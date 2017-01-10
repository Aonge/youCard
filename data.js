/**
 * Created by lanouhn on 17/1/10.
 */
var express = require("express");
var mongoose = require("mongoose");
var path = require("path");
var app = express();
app.use(express.static(path.join(__dirname)));
var db = mongoose.connect("mongodb://localhost:27017/mangerUser");
mongoose.Promise = global.Promise;
db.connection.on("error",function (err) {
    throw err;
});
db.connection.on("open",function () {
    console.log("数据库连接成功");
});
var schema = mongoose.Schema({
    phone:{type:String},
    password:{type:String},
    care:{type:Array},
    isLogin:{type:Boolean}
},{collection:"users"});
var Model = db.model("users",schema);
var Care = db.model("care",schema);
app.get("/get",function (req,res) {
    var data = req.query;
    console.log(data.care)
    switch(data.act){
        case "signUp":
            Model.find({phone:data.phone},function (err,doc) {
                // console.log(doc[0].care)
                if(err){
                    throw err;
                }else if(doc.length == 0 && data.phone && data.password){
                    Model.create([{
                        phone: data.phone,
                        password:data.password,
                        care:[
                            {careGame:data.care.careGame},
                            {careMa:data.care.careGame},
                            {careVideo:data.care.careGame}
                            ],
                        isLogin:data.isLogin
                    }],function (err, doc) {
                        if (err) {
                            throw err;
                        }else {
                            res.send({err: 0,msg:"注册成功",href:"index.html"});
                        }
                    })
                }else if(doc.length != 0){
                    res.send({err:1,msg:"该手机好已经被注册"});
                }
            });
        break;
        case "login":
            Model.find({phone:data.phone},function (err,doc) {
                if (err) {
                    throw err;
                } else if (doc.length == 1) {
                    // console.log(doc[0].password);
                    if(doc[0].password == data.password){
                        res.send({err:0,msg:"登录成功",href:"index.html"});
                    }else{
                        res.send({err:1,msg:"密码错误"});
                    }
                }else if(doc.length == 0){
                    res.send({err:2,msg:"请先注册"});
                }
            });
        break;
        case "myself":
            Model.find({phone:data.phone},function (err,doc) {
                if (err) {
                    throw err;
                } else if (doc.length == 1) {
                    // console.log(doc[0].password);
                    if(doc[0].password == data.password){
                        res.send({err:0,msg:"登录成功",href:"index.html"});
                    }else{
                        res.send({err:1,msg:"密码错误"});
                    }
                }else if(doc.length == 0){
                    res.send({err:2,msg:"请先注册"});
                }
            });
        break;
        case "findPass":
            Model.find({phone:data.phone},function (err,doc) {
                if (err) {
                    throw err;
                } else if (doc.length == 1) {
                    res.send({err:0,password:doc[0].password});
                }else if(doc.length == 0){
                    res.send({err:1,msg:"账号不存在"});
                }
            });
    }
});
app.get("/care",function (res,req) {

});
app.listen(8000);