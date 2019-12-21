import React from 'react'

// Components
import Head from 'next/head'
import Nav from '../components/nav'
import Scene from '../components/Scene';
import Model from '../components/Model';
import styled from 'styled-components';

const Headline = styled.h1`
  color: rebeccapurple;
`;

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Nav />

    <Headline>STUFF HERE</Headline>

    <Scene>
      <Model />
    </Scene>
  </div>
);

export default Home;
