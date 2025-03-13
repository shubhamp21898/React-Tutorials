import React from "react";

const ChildComponents = React.memo((props) => {
  console.log("Child comp. go re-rendered again");
  return (
    <div>
      <button onClick={props.handleClick}>{props.buttonName}</button>
    </div>
  );
});

export default ChildComponents;
