const axios=require('axios')

module.exports.getAddressCoordinate=async(address)=>{
    const apiKey=process.env.GOOGLE_MAPS_API;
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${apiKey}`;
    
console.log(url)

    try {

        const response=await axios.get(url);
        if(response.data.status==='OK'){

            const location=response.data.results[0].geometry.location;
            return{
                ltd:location.lat,
                lng:location.lng
            }

        }else{
              throw new Error('unable to fetch map coordinates');   
        }
        
    } catch (error) {
        console.error("Error fetching coordinates:", error.response?.data || error.message);

        throw error;
    }
    
}


module.exports.getDistanceTime=async(origin,destination)=>{

    if(!origin || !destination){
        throw new Error('origin and destination are required');
    }
  
    const apiKey=process.env.GOOGLE_MAPS_API;
    const url= `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${encodeURIComponent(origin)}&destinations=${encodeURIComponent(destination)}&key=${apiKey}`;

    console.log(url)


    try {
        const response=await axios.get(url);
        

        if(response.data.status==='OK'){

            if(response.data.rows[0].elements[0].status==='ZERO RESULTS'){
                 throw new Error('no routes found')
            }

            return response.data.rows[0].elements[0]
        }else{
            throw new Error('Unable to fetch distance and time');
        }
        
    } catch (error) {
        console.error(error);
        throw error;
        
    }

}

module.exports.getAutoCompleteSuggestions=async(input)=>{

const apiKey=process.env.GOOGLE_MAPS_API;

const url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${encodeURIComponent(input)}&key=${apiKey}`;


try{
const response=await axios.get(url);
if(response.data.status==='OK'){
    return response.data.predictions;
}else{
    throw new Error('Unable to fetch suggestions');
}
}catch(err){
    console.log(err);
    throw err;
}
}
