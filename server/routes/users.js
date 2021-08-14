import express from 'express';

const usersRoute = express.Router();

import {signup,signin} from '../controllers/users.js';

usersRoute.post('/signup',signup);
usersRoute.post('/signin',signin);

export default usersRoute;