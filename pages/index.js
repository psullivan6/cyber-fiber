import React, { useState, useContext } from 'react';
import styled from 'styled-components';

// Components
import Head from 'next/head';
import Nav from '../components/nav';
import Scene from '../components/Scene';
import Model from '../components/Model';
import Debugger from '../components/Debugger';

import Test from '../components/Test';

// Context
// import { SceneDataContext } from '../components/Scene/context';
import { PageProvider, usePage } from '../context/PageContext';

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

// const ref = useUpdate(
//   geometry => {
//     geometry.addAttribute('position', getVertices(x, y, z))
//     geometry.attributes.position.needsUpdate = true
//   },
//   [x, y, z] // execute only if these properties change
// )
// return <bufferGeometry ref={ref} />

const HomeContent = () => {
  const { setDebugData } = usePage();

  const handleUpdate = ({ color }) => {
    setDebugData(color);
  };

  return (
    <>
      <Legend>
        <span className="axisX">X Axis</span>
        <span className="axisY">Y Axis</span>
        <span className="axisZ">Z Axis</span>
      </Legend>

      <Debugger onUpdate={handleUpdate} />

      <Test />
    </>
  );
};

const HomeScene = () => {
  const { debugData } = usePage();

  console.log('debugData', debugData);

  return (
    <Scene>
      <Model />
    </Scene>
  );
};

const Home = () => (
  <>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Nav />

    <PageProvider>
      <HomeContent />
      <HomeScene />
    </PageProvider>
  </>
);

export default Home;
