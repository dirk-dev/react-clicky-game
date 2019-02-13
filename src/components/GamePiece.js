import React from "react";

function GamePiece(props) {
  // console.log(props);
  return (
    <span>
      <input
        id={props.id}
        type="image"
        className="imgBtn"
        name={props.name}
        src={props.src}
        alt="Submit"
        width="170"
        height="170"
        onClick={() => { props.clicked(props.id) }}
      />
    </span>
  );
}

export default GamePiece;


