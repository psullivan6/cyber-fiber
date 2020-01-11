import React, { useReducer, useState } from 'react';
const uuid = require('uuid/v4');

// Hooks
import { useResource } from 'react-three-fiber';
import { useControl } from 'react-three-gui';
import { a } from 'react-spring/three';

const SpotLight = ({ id, group, onRemove }) => {
  const [ref, light] = useResource();

  const color = useControl('Light Color', {
    type: 'color',
    value: '#ff0',
    group
  });
  const intensity = useControl('Light Intensity', {
    type: 'number',
    value: 10,
    min: 0,
    max: 100,
    group
  });
  useControl('Remove', {
    type: 'button',
    onClick: onRemove,
    group
  });

  return (
    <group>
      <a.spotLight
        ref={ref}
        intensity={intensity}
        angle={Math.PI / 30}
        position={[8, 8, 5]}
        penumbra={0.9}
        color={color}
        distance={15}
        decay={2}
      />
      {light && <spotLightHelper args={[light, 0xff00ff]} />}
    </group>
  );
};

function reducer(state, action) {
  switch (action.type) {
    case 'add':
      const id = uuid();

      return {
        ...state,
        [id]: {
          name: `Spot Light - ${id.substr(id.length - 5)}`,
          id
        }
      };
    case 'remove':
      const { [action.id]: removed, ...rest } = state;
      return rest;
    default:
      console.log('undefined `action` in reducer');
  }
}

const Lights = () => {
  const [lights, dispatch] = useReducer(reducer, []);

  useControl('Add Spot Light', {
    type: 'button',
    onClick: () => {
      dispatch({ type: 'add' });
    }
  });

  return (
    <>
      {Object.values(lights).map(({ id, name }) => (
        <SpotLight
          key={id}
          id={id}
          group={name}
          onRemove={() => {
            dispatch({ type: 'remove', id });
          }}
        />
      ))}
    </>
  );
};

export default Lights;
