var express = require('express');
var router = express.Router();
// const conn = require('../config/config');
const bcrypt = require("bcrypt")
const bodyparser = require('body-parser')
const multer = require('multer')
const path = require('path')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


// router.get('/get', async (req, res) => {
//   try {
//     var sql = "SELECT * FROM student";
//     await conn.query(sql, (error, results) => {
//       console.log(results,error)
//         res.status(200).json(results);
//       });
//   } catch (error) {
//     console.log(error);
//   }
// });

// router.get('/createdbtable',(req,res)=>{
//   let sql = 'create table user(id int primary key auto_increment,name varchar(20), email varchar(100), password varchar(60))';
//   conn.query(sql,(err,result)=>{
//       if(err) throw err;
//       console.log("Table Created...");
//   });
// });


// var storage = multer.diskStorage({
//   destination: (req, file, callBack) => {
//       callBack(null, './public/images/') 
//   },
//   filename: (req, file, callBack) => {
//       callBack(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
//   }
// })

// var upload = multer({
//   storage: storage
// });


// router.post("/register",upload.single('image'), async(req, resp) => {    
//   const { name, email, password, password_confirm } = req.body
//   console.log(req.file,"req.body",req.body)
//   var imgsrc = 'http://127.0.0.1:3000/images/' + req.file.filename
//   // let hashedPassword = await bcrypt.hash(password, 8)

//   var result = conn.query('INSERT INTO Users SET?', {name: name, email: email, password: password,image:imgsrc}, (err, res) => {
//           if(err){
//             console.log("Error IS :-",err)
//           }else{
//             resp.status(200).json({status:true,message:"User Create successfully"});
//           }
//   })
// })

// router.get('/get', async (req, res) => {
//   try {
//     var sql = "SELECT * FROM student";
//     await conn.query(sql, (error, results) => {
//       console.log(results,error)
//         res.status(200).json(results);
//       });
//   } catch (error) {
//     console.log(error);
//   }
// });
// router.get('/register', async(req,res)=>{
//   try{
//     let Data = "SELECT * FROM Users";
//     await conn.query(Data,(err,results)=>{
//      console.log(err,"fffff",results);
//      res.status(200).json({status:true,message:"User get successfully", data:results});
//     })
//   }catch (error) {
//     console.log(error);
//   }

// })


// router.post("/companies", async(req, res) => {
//   const { company, email, website, phone } = req.body
//   conn.query('INSERT INTO companies SET?', {company: company, email: email, website: website,phone:phone}, (err, res) => {
//           if(err){
//             console.log("Error IS :-",err)
//           }else{
//             resp.status(200).json({status:true,message:"company Create successfully"});
//           }
//   })
// })
// router.get("/companies", async(req, resp) => {  
//   let sql = " ";
//   if(req.query.user_id){
//     sql = `select * from companies WHERE id =${req.query.user_id}`
//   }else{
//     sql = 'select * from companies'
//   } 
// conn.query(sql, (err, results) => {
//           if(err){
//             console.log("Error IS :-",err)
//           }else{
//             resp.status(200).json({status:true,message:"company get successfully",data:results});
//           }
//   })
// })

// router.delete('/companies',(req,resp)=>{
//   let sql = 'DELETE * FROM companies WHERE id ='+id+
//   conn.query(sql , (err,result)=>{
//     if(err) throw err
//     resp.status(200).json({status:true,message:"companies delete success"})
//   })
// })



module.exports = router;
