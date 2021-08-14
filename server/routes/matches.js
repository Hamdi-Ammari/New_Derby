import express from 'express';
import {getMatches,getMatch,createMatches,buyMatch} from '../controllers/matches.js';

const matchesRoute = express.Router();

matchesRoute.get('/',getMatches);
matchesRoute.get('/match/:id',getMatch);
matchesRoute.get('/buyMatch/:id',buyMatch)
matchesRoute.post('/',createMatches);

export default matchesRoute;