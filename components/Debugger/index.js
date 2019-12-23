import React, { useState } from 'react';

// Components
import DatGui, { DatBoolean, DatColor, DatNumber, DatString } from '@tim-soft/react-dat-gui';

// Context
import { useSceneData } from '../Scene/context';

const Debugger = ({ onUpdate }) => {
  // const data = useSceneData();
  const [guiData, setGuiData] = useState({
    color: '#ffff00'
  });

  // console.log('CONTEXT - data', data);

  const handleUpdate = (data) => {
    setGuiData({ ...guiData, ...data });
    onUpdate(data);
  };

   return (
    <DatGui data={guiData} onUpdate={handleUpdate}>
      <DatColor label="Color" path="color" />
    </DatGui>
  );
};

export default Debugger;
