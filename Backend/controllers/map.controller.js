const mapService=require('../services/maps.service')
const {validationResult}=require('express-validator')


module.exports.getCoordinates=async(req,res,next)=>{
    const errors=validationResult(req);

  const {address}= req.query;

  if(!errors.isEmpty()){
    return res.status(400).json({errors:errors.array()});
  }

  try{
    const coordinates=await mapService.getAddressCoordinate(address);
    res.status(200).json(coordinates);
  }
catch(err){
    res.status(404).json({message:'coordinates not found'});
  }
}


module.exports.getDistanceTime=async(req,res,next)=>{
  try {
    const errors=validationResult(req);
    if(!errors.isEmpty()){
      res.status(400).json({errors:errors.array()})
    }

    const {origin,destination}=req.query;
const distanceTime=await mapService.getDistanceTime(origin,destination);
 return res.status(200).json(distanceTime);
    
  } catch (error) {
    console.error(error);
    res.status(500).json({message:'Intenal server error'})
    
  }
}


module.exports.getAutoCompleteSuggestions=async(req,res,next)=>{
  try {

    const errors=validationResult(req);
    if(!errors.isEmpty()){
      return res.status(400).json({errors:errors.array()});
    }

    const {input}=req.query;

    const suggestions=await mapService.getAutoCompleteSuggestions(input);
    return res.status(200).json(suggestions);
    
  } catch (error) {
    console.error(error);
    res.status(500).json({message:'Internal server error'});
    
  }

}