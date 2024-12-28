import React from "react";

function LocationSearchPanel(props) {

  const locations = [
    "MG Road, Bengaluru, Karnataka,Road Number 127",
    "Connaught Place, New Delhi, Delhi,Road Number 452",
    "Marine Drive, Mumbai, Maharashtra,Road Number 678",
    "Banjara Hills, Hyderabad, Telangana,Road Number 12",
  ];

  return (
    <div>
      {locations.map((elem,idx) => (
        <div
        key={idx}
          onClick={() => {
            props.setVehiclePanelOpen(true);
            props.setPanelOpen(false);
          }}
          className="flex items-center justify-start gap-1 p-3 my-2 border-2 border-gray-100 active:border-black rounded-lg"
        >
          <h2 className="bg-[#eee] rounded-full h-7 w-7 flex justify-center items-center">
            <i className="ri-map-pin-2-fill"></i>
          </h2>
          <h4>{elem}</h4>
        </div>
      ))}
    </div>
  );
}

export default LocationSearchPanel;
