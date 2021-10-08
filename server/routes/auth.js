import express from 'express';

const authRoute = express.Router();

import {register,login,forgotpassword,resetpassword} from '../controllers/auth.js';


authRoute.post('/register',register);
authRoute.post('/login',login);
authRoute.post('/forgotpassword',forgotpassword);
authRoute.put('/resetpassword/:resetToken',resetpassword);


export default authRoute;