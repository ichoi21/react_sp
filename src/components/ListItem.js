import React from "react";

const ListItem = (props) => {
  return <li data-Id={props.anotherProp}>{props.passedNumber}</li>;
};

export default ListItem;
