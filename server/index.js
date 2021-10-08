import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import matchesRoute from './routes/matches.js';
import authRoute from './routes/auth.js';

const app = express();
dotenv.config();
app.use(cors());
app.use(express.json({extended:true}));
app.use(express.urlencoded({extended:true}));

app.use('/',matchesRoute);
app.use('/auth',authRoute);

const PORT = process.env.PORT || 7000;

mongoose.connect(process.env.CONNECTION_DB,{useNewUrlParser:true,useUnifiedTopology:true,useCreateIndex:true,useFindAndModify:false})
        .then(() => app.listen(PORT,() => console.log(`Server is running on PORT ${PORT}`)))
        .catch(error => console.log(error));
