import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = ({allTiles}) => {
  return (


    <div>
      {
           allTiles.map((singleTileInfo, index) => 
          (<Tile key={index} singleTileInfo={singleTileInfo} />)
        )
      }
    </div>
  );
};
