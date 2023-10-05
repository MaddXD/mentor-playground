/*
  Use two differnet interfaces to map two view of one Component .

  At first the view from the Parnet-Compenent who’s callings/using the
  Child-Componenent. And as second, the view of the Component
  for the perspective of Redux-`connect` e.g.
  */
import React from "react";

interface PublicInterface {
  readonly publicProp1: string;
  readonly publicProp2: string;
}

type PrivateInterface = {
  readonly privateProp1: () => any;
};

const ChildComponent: React.FC<any> = ({
  privateProp1 = () => <div>Default-Value of privateProp1</div>,
  publicProp1,
  publicProp2
}: PublicInterface & PrivateInterface) => {
  return (
    <>
      <div>Child-Component</div>
      <ul>
        <li>{privateProp1()}</li>
        <li>1. Property: {publicProp1}</li>
        <li>2. Property: {publicProp2}</li>
      </ul>
    </>
  );
};

export const ParentComponent = () => {
  return (
    <>
      <div>Parent-Component</div>
      <ChildComponent
        publicProp1="value of publicProp1"
        publicProp2="value of publicProp2"
      />
    </>
  );
};

export default ParentComponent;
