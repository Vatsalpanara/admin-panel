const express = require("express")
const route = express.Router();
const ctl = require("../controller/ctl");
const multer = require("../multer/murlter");


route.get("/Dashboard", ctl.HomePage);
route.get("/Sidebar", ctl.Sidebar);
route.get("/header", ctl.Header);
route.get("/addadmin",ctl.Addadmin);
route.post("/send",multer,ctl.AddAdminData);
route.get("/viewadmin",ctl.Viewadmin);
route.get("/delete",ctl.DeleteData);
route.get("/edit",ctl.EditData);
route.post("/update",multer,ctl.UpdateData);


//login//
route.get("/", ctl.Login);
route.get("/register", ctl.Register);
route.get("/forgot", ctl.Forgot);
route.post("/logadd",ctl.Logadd);
route.post("/loguser",ctl.Loguser);
route.get("/logout",ctl.Logout);



module.exports = route