import mongoose from 'mongoose';

const matchSchema = mongoose.Schema({
    team1:String,
    team2:String,
    date:String,
    time:String,
    payed:Boolean
})

var MatchModel = mongoose.model('MatchModel',matchSchema);
export default MatchModel;
