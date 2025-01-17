/*
  Context-API

  Read values out of the Context
*/
import React, { useContext } from 'react';
import { SubTitle } from '../Headline';

const defaultValue = {
  foo: 'default foo'
};

const MyContext = React.createContext(defaultValue);

const Child1 = () => {
  const valueOutOfContext = useContext(MyContext);

  return <div>Child1: {JSON.stringify(valueOutOfContext)}</div>;
};

const Child2 = ({ children }: any) => {
  return (
    <>
      <div>Child2</div>
      {children}
    </>
  );
};

const Child3 = () => {
  const valueOutOfContext = useContext(MyContext);

  return <div>Child3: {JSON.stringify(valueOutOfContext)}</div>;
};

export default function () {
  return (
    <>
      <SubTitle>useContext (read)</SubTitle>
      {/* Children consuming context without Provider*/}
      {/*}
      <>
        <Child1 />
        <Child2>
          <Child3 />
        </Child2>
      </>
      */}
      {/* Children consuming context with Provider*/}
      <MyContext.Provider value={{ ...defaultValue }}>
        <Child1 />
        <Child2>
          <Child3 />
        </Child2>
      </MyContext.Provider>
    </>
  );
}
