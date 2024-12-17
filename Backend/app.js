const dotenv=require('dotenv');
dotenv.config();
const express=require('express');
const cors=require('cors');
const app=express();

const connectToDb=require('./db/db');
connectToDb();
const userRoutes=require('./routes/user.routes')

app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());






app.get('/',(req,res)=>{
    res.send('hey riya')
});


app.use('/users',userRoutes);

module.exports=app;