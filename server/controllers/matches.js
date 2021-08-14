import MatchModel from '../models/matcheModel.js';

export const getMatches = async (req,res) => {
    try {
        const allMatches = await MatchModel.find();
        res.status(200).json(allMatches);
    } catch (error) {
        res.status(404).json({message:error})
    }
}

export const getMatch = async (req,res) => {
    const {id} = req.params;

    try {
        const match = await MatchModel.findById(id);
        res.status(200).json(match);
    } catch (error) {
        res.status(404).json({message:error})
    }
}

export const buyMatch = async (req,res) => {
    const {id} = req.params;

    try {
        const buyedMatch = await MatchModel.findById(id);
        res.status(200).json(buyedMatch);
    } catch (error) {
        res.status(404).json({message:error})
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
    }
}