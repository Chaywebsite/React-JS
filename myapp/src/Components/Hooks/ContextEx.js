import React, { createContext, useContext, useState } from 'react';
const userData = createContext();

const ContextEx = () => {
    const [name, setName] = useState("Elearn")
  return (
    <div className='container p-5'>
        <userData.Provider value ={name}>
            <h1>ContextEx {name}</h1>
            <Comp1/>
        </userData.Provider>
    </div>
  );
};

export default ContextEx;

const Comp1 = () => {
    return (
      <div className='container p-5'>
          <h1>Component 1</h1>
          <Comp2/>
      </div>
    );
  };

const Comp2 = () => {
    return (
      <div className='container p-5'>
          <h1>Component 2</h1>
          <Comp3/>
      </div>
    );
};

const Comp3 = () => {
    return (
      <div className='container p-5'>
          <h1>Component 3</h1>
          <Comp4/>
      </div>
    );
  };

const Comp4 = (data) => {
    const name = useContext(userData)
    return (
      <div className='container p-5'>
          <h1>Component 4 {name}</h1>
      </div>
    );
  };
