import React from "react";

const Shop = props => {
  return (
    <React.Fragment>
      <h1>Welcom to Fortnite Shop</h1>
      {props.data.data ? (
        props.data.data.map((e, i) => (
          <h3
            key={i}
            onClick={event => {
              props.click(e.itemId);
              props.history.push(`/shop/${e.itemId}`);
            }}
          >
            {e.item.name}
          </h3>
        ))
      ) : (
        <h3>Loading...</h3>
      )}
    </React.Fragment>
  );
};

export default Shop;
