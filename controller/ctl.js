const AdminSchema = require("../module/firstschema");
const LogSchema = require("../module/loguser");
const fs = require("fs");


module.exports.HomePage = async(req,res) =>{
    res.render("Dashboard");
}
module.exports.Sidebar = async(req,res) =>{
    res.render("Sidebar");
}
module.exports.Header = async(req,res) =>{
    res.render("header");
}
module.exports.Addadmin =async(req,res) => {
    let data = await AdminSchema.find({})
    data && res.render("addadmin")
}
module.exports.AddAdminData = async(req,res)=>{
    let data = await AdminSchema.create(req.body);
    data && res.redirect("addadmin");
}
module.exports.Viewadmin =async(req,res) => {
    let data = await AdminSchema.find({})
    data && res.render("viewadmin",{data});
}
module.exports.DeleteData = async(req,res)=>{
    let data = await AdminSchema.findByIdAndDelete(req.query.id)
    data && res.redirect("/viewAdmin");
}
module.exports.EditData = async(req,res)=>{
    let data = await AdminSchema.findById(req.query.id)
    data && res.render("enditform",{data})
}
module.exports.UpdateData = async(req,res)=>{
    let data = await AdminSchema.findByIdAndUpdate(req.body.id,req.body)
    data && res.redirect("/viewAdmin");
}
//login//

module.exports.Login = async(req,res) =>{
    res.render("login");
}
module.exports.Register = async(req,res) =>{
    res.render("register");
}
module.exports.Forgot = async(req,res) =>{
    res.render("forgot");
}
module.exports.Logadd = async(req,res)=>{
    let data = await LogSchema.create(req.body)
    data && res.redirect("/")
}
module.exports.Loguser = async (req, res) =>{
    console.log(req.body);
    
    let admin = await LogSchema.findOne({email: req.body.email});
    console.log(admin);
    
    if(admin){
       if(admin.password == req.body.password){
        res.cookie("adminData",admin);
        res.redirect("/Dashboard");
       }else{
        console.log("password is wrong");
       }
    }else{
        console.log("email not existed");
    }
};
module.exports.Logout = (req,res)=>{
    res.clearCookie("adminData");
    res.redirect("/");
}

