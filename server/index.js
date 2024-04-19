import express from 'express';
import cors from 'cors';
import {connectToDatabase} from './config/SQLServer.js'
const app = express(express.json());
const db = await connectToDatabase();
app.use(cors());
app.use(express.urlencoded({
    extended: true
}))
app.get("/Doctor", (req, res) => {    
  const SQLstring = " Select distinct nv.Ma_so_nhan_vien, nv.Ho,nv.Ten,bs.Chuyen_khoa from nhan_vien AS nv INNER JOIN bac_si AS bs ON nv.Ma_so_nhan_vien=bs.Ma_so_nhan_vien"
  const data = db.request()
  data.query(SQLstring,(err,data)=>{
      if(err){
        console.log(err)
      }
      else {
        res.json(data)
      }
  });
  });
// app.post('/create', (req, res) => {    
//   const sql = "INSERT INTO student (Name, Email) VALUES (?)";    
//   const values = [req.body.name,req.body.email]    
//   db.query(sql, [values], (err, data) => {        
//     if(err) return res.json("Error");        
//     return res.json(data);    })
// })
// app.put('/update/:id', (req, res) => {    const sql = "update student set Name = ?, Email = ? where ID = ?";    const values = [        req.body.name,        req.body.email    ]    const id = req.params.id;        db.query(sql, [...values, id], (err, data) => {        if(err) return res.json("Error");        return res.json(data);    })})
// app.delete('/student/:id', (req, res) => {    const sql = "DELETE FROM student WHERE ID = ?";    const id = req.params.id;        db.query(sql, [id], (err, data) => {        if(err) return res.json("Error");        return res.json(data);    })})
// app.listen(8081, () => {    console.log("listening");})
app.listen(3001, () => {
  console.log(' I am running  http://localhost:3001')
})
