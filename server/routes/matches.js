import express from 'express';

const matchesRoute = express.Router();

import {getMatches,watchMatch,getMatchToBuy,buyMatch,createMatches} from '../controllers/matches.js';
import auth from '../middleware/auth.js';

matchesRoute.get('/',getMatches);
matchesRoute.get('/watch/:id',auth,watchMatch);
matchesRoute.get('/match/:id',auth,getMatchToBuy);
matchesRoute.patch('/match/:id/buyMatch',auth,buyMatch);
matchesRoute.post('/',createMatches);


export default matchesRoute;