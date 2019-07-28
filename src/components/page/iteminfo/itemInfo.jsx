import React from "react";

const ItemInfo = props => {
  console.log("ITEM::", props.match.params.id);
  return (
    <React.Fragment>
      {props.item ? (
        <div>
          <h1>{props.item.data.item.name}</h1>
          <img src={props.item.data.item.images.background} alt="img" />
        </div>
      ) : (
        <h2>loading...</h2>
      )}
    </React.Fragment>
  );
};

export default ItemInfo;
