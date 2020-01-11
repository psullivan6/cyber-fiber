import React, { useState, useContext } from 'react';
import styled from 'styled-components';

// Components
import Head from 'next/head';
import Nav from '../components/nav';
import Scene from '../components/Scene';
import Model from '../components/Model';

import { Controls } from 'react-three-gui';

// Context
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

const HomeScene = () => {
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
    <Legend>
      <span className="axisX">X Axis</span>
      <span className="axisY">Y Axis</span>
      <span className="axisZ">Z Axis</span>
    </Legend>
    <HomeScene />
    <Controls />
  </>
);

export default Home;
