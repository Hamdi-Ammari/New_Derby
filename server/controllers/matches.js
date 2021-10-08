import mongoose from 'mongoose';
import MatchModel from '../models/matcheModel.js';

export const getMatches = async (req,res) => {
    try {
        const allMatches = await MatchModel.find();
        res.status(200).json(allMatches);
    } catch (error) {
        res.status(404).json({message:error})
        console.log(error)
    }
}

export const watchMatch = async (req,res) => {
    const {id} = req.params;

    try {
        const match = await MatchModel.findById(id);
        res.status(200).json(match);
    } catch (error) {
        res.status(404).json({message:error})
        console.log(error)
    }
}

export const getMatchToBuy = async (req,res) => {
    const {id} = req.params;

    try {
        const matchToBuy = await MatchModel.findById(id);
        res.status(200).json(matchToBuy);
    } catch (error) {
        res.status(404).json({message:error})
        console.log(error)
    }
}

export const buyMatch = async (req,res) => {
    const {id} = req.params;
    try {
        if(!req.userId) return res.json({message:'Unauthenticated'});
        if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('no post with that id')
        const matchToBuy = await MatchModel.findById(id);

        const index = matchToBuy.buyers.findIndex((id) => id === String(req.userId));
        if(index === -1) {
           matchToBuy.buyers.push(req.userId);
        }

        const updatedMatch = await MatchModel.findByIdAndUpdate(id,matchToBuy,{new:true}); 
        res.status(200).json(updatedMatch);

    } catch (error) {
        res.status(409).json({message:error}) 
        console.log(error)
    }
}

export const createMatches = async (req,res) => {
    const match = req.body;
    const newMatch = new MatchModel(match);
    try {
        await newMatch.save();
        res.status(201).json(newMatch)
    } catch (error) {
      res.status(409).json({message:error})  
      console.log(error)
    }
}