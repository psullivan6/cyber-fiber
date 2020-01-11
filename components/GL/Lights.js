import React, { useReducer, useState } from 'react';
const uuid = require('uuid/v4');

// Hooks
import { useResource } from 'react-three-fiber';
import { useControl } from 'react-three-gui';
import { a } from 'react-spring/three';

const Toggle = ({ control, value }) => (
  <>
    <label>{control.name}</label>
    <input
      type="checkbox"
      onChange={e => {
        const bool = e.currentTarget.checked;
        control.set(bool);
        control.config.onChange(bool);
      }}
      checked={value}
    />
  </>
);

const SpotLight = ({ id, group, onRemove }) => {
  const [ref, light] = useResource();
  const [showHelper, setShowHelper] = useState(true);

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
  const positionX = useControl('position X', {
    type: 'number',
    min: -10,
    max: 10,
    value: 0,
    group
  });
  const positionObject = useControl('Position XY', {
    type: 'xypad',
    distance: Math.PI,
    scrub: true,
    group
  });

  // [TODO] Ensure the `react-three-gui` library sends the onChange handler for the boolean type,
  // had to make a custom type to use the onChange handler
  useControl('Show Helper', {
    type: 'custom',
    value: showHelper,
    component: Toggle,
    onChange: value => {
      setShowHelper(value);
    },
    group
  });

  useControl('Remove', {
    type: 'button',
    onClick: onRemove,
    group
  });

  const handleUpdate = self => {
    self.lookAt(0, 0, 0);
  };

  return (
    <group>
      <a.spotLight
        ref={ref}
        intensity={intensity}
        angle={Math.PI / 30}
        position={[positionObject.x, positionObject.y, 5]}
        penumbra={0.9}
        color={color}
        distance={15}
        decay={2}
        onUpdate={handleUpdate}
      />
      {light && showHelper && <spotLightHelper args={[light, 0xff00ff]} />}
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
