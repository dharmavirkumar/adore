const Router = require('express'); // Import the express router
const User = require('../model/schema')

const route = Router(); // Create a new router instance

route.get("/",(req,res)=>{
 res.render("daseboard")
})

route.get("/home",(req,res)=>{
 res.render("Home")
})

route.get("/service",(req,res)=>{
 res.render("Services")
})

route.get("/products",(req,res)=>{
 res.render("Products")
})

route.get("/contact",(req,res)=>{
  res.render('Contact', { isAuthenticated: req.session.userId ? true : false });
 
})



route.post("/contact",(req,res)=>{
  const {name,phone,address, message} = req.body; // Destructure name, email, and message from the request body
  const Item =  new User({name,phone,address,message})
  Item.save()
    .then(() => {
      res.render("Contact", { message: "Message sent successfully!" });
    })
    .catch((error) => {
      console.error("Error saving contact message:", error);
      res.render("Contact", { message: "An error occurred while sending your message." });
    });
})



route.get("/login",(req,res)=>{
    res.render("Login")
})

// route.post("/login",async(req,res)=>{
//     const {email, password} = req.body; // Destructure email and password from the request body
//     try {
//     const user = await User.findOne({ email });

//     if (!user) {
//       return res.render("Login", { message: "User not found" });
//     }

//     if (user.password !== password) {
//       return res.render("Login", { message: "Incorrect password" });
//     }

//     // Successful login
//      // store user ID in session
//   req.session.userId = user._id;
  
//    res.redirect("/home"); // Or redirect to dashboard
//   } catch (error) {
//     console.error("Login error:", error);
//     res.render("Login", { message: "An error occurred during login" });
//   }
// });
route.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email, password });
  if (!user) {
    return res.send('Invalid credentials');
  }

  // store user ID in session
  req.session.userId = user._id;
  res.redirect('/home');
});

route.get("/signup",(req,res)=>{
    res.render("Signup");
})

route.post("/signup",async(req,res)=>{
    const{email,password,confirm_password} = req.body;
    const Item =  new User({email,password,confirm_password})
    await Item.save();
    res.render("Signup");
})

route.get(("/profile"),(req,res)=>{
  res.render("Profile");
})

module.exports = route; // Export the router for use in the main app