import React, { useState, useContext } from 'react'
import styled from 'styled-components';

// Components
import Head from 'next/head'
import Nav from '../components/nav'
import Scene from '../components/Scene';
import Model from '../components/Model';
import Debugger from '../components/Debugger';

import Test from '../components/Test';

// Context
import { SceneDataContext } from '../components/Scene/context';

const Legend = styled.h1`
  .axisX {
    color: red;
  }
  .axisY {
    color: green;
  }
  .axisZ {
    color: blue;
  }
`;

const Home = () => {
  const [lightColor, setLightColor] = useState(null);

  const handleUpdate = ({ color }) => {
    console.log('color', color);
    setLightColor(color);
  };

  // console.log('lightColor', lightColor);

  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />

      <Legend>
        <span className="axisX">X Axis</span>
        <span className="axisY">Y Axis</span>
        <span className="axisZ">Z Axis</span>
      </Legend>

      <Debugger onUpdate={handleUpdate} />

      {/* <SceneDataContext.Provider value={{ lightColor }}> */}
        <Test />
      {/* </SceneDataContext.Provider> */}

      <Scene>
        <Model />
      </Scene>
    </div>
  );
}

export default Home;
