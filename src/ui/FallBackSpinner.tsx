import React from "react";
import Spinner from "./spinner";

function FallBackSpinner(): React.JSX.Element {
  return (
    <div className="absolute w-full h-full flex justify-center items-center">
      <Spinner />
    </div>
  );
}

export default FallBackSpinner;
