const dotenv=require('dotenv');
dotenv.config();
const express=require('express');
const cors=require('cors');
const cookieParser=require('cookie-parser');
const app=express();

const connectToDb=require('./db/db');
connectToDb();
const userRoutes=require('./routes/user.routes');
const captainRoutes=require('./routes/captain.routes');
const mapsRoutes=require('./routes/maps.routes')
const rideRoutes=require('./routes/ride.routes')

app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cookieParser());






app.get('/',(req,res)=>{
    res.send('hey riya')
});


app.use('/users',userRoutes);

app.use('/captains',captainRoutes);

app.use('/maps',mapsRoutes);

app.use('/rides',rideRoutes);

module.exports=app;