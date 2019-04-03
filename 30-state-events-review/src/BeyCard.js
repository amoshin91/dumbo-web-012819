import React from "react";

const BeyCard = (props) => {
  return (
    <div>
      <h3>{props.bey.name}</h3>
      <img onClick={(e) => { props.handleClick(props.bey.id) }} alt={props.bey.name} src={props.bey.img} />
    </div>
  );
};

export default BeyCard;
