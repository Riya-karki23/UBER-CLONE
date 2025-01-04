import React from "react";

function LocationSearchPanel({suggestions,setPickup,setDestination,activeField}) {

  const handleSuggestionClick= (suggestion)=>{
  if (activeField==='pickup'){
    setPickup(suggestion)
  }else if(activeField==='destination'){
    setDestination(suggestion)
  }

  }


  return (



    <div>
      {suggestions.map((elem,idx) => (
        <div
        key={idx}
        onClick={()=>{
          handleSuggestionClick(elem.description)
        }}
        
          className="flex items-center justify-start gap-1 p-3 my-2 border-2 border-gray-100 active:border-black rounded-lg"
        >
          <h2 className="bg-[#eee] rounded-full h-7 w-7 flex justify-center items-center">
            <i className="ri-map-pin-2-fill"></i>
          </h2>
          <h4>{elem.description}</h4>
        </div>
      ))}

    </div>
  );
}

export default LocationSearchPanel;
