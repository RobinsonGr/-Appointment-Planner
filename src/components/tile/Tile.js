import React from "react";

export const Tile = ({singleTileInfo}) => {
  
  
  const listInfo = Object.values(singleTileInfo)


  return (
    <div className="tile-container">
      
      {
        listInfo.map((data, index) =>  
          {
            //when the appointments object is rendered, there is another nested contacts object right there
            if (typeof data !== "object") {                   
              return index === 0 ? (<h2 key={index} className="tile-name">{data}</h2>) :
                (<p key={index} className="tile">{data}</p>)     
              } else {
                return Object.values(data).map((contactInfo, key) => {
                  return <p style={{fontWeight: "bold", fontStyle: "italic"}}key={key}>{contactInfo}</p> })
              }               
         }
        )
      }
    </div>
  );
};
