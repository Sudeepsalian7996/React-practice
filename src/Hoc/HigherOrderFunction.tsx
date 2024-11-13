import React from "react";

// Define the component as a Functional Component with no props
const HigherOrderFunction = (
  WrapperComponent: React.ComponentType,
  auth: Boolean = false
) => {
  const FinalWrapper: React.FC = (props: any) => {
    return auth ? <WrapperComponent {...props} /> : <h1>No access</h1>;
  };
  return FinalWrapper;
};

export default HigherOrderFunction;
