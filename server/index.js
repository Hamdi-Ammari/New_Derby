import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import matchesRoute from './routes/matches.js';
import usersRoute from './routes/users.js';

const app = express();
app.use(cors());
app.use(express.json({extended:true}));
app.use(express.urlencoded({extended:true}));

app.use('/',matchesRoute);
app.use('/users',usersRoute);

const CONNECTION_DB = 'mongodb+srv://hamdi:mongo26955951@cluster1.uwe9y.mongodb.net/derby?retryWrites=true&w=majority';
const PORT = process.env.PORT || 7000;

mongoose.connect(CONNECTION_DB,{useNewUrlParser:true,useUnifiedTopology:true})
        .then(() => app.listen(PORT,() => console.log(`Server is running on PORT ${PORT}`)))
        .catch(error => console.log(error));

mongoose.set('useFindAndModify',false);
