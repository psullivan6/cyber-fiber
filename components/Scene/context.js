import React, {
  createContext,
  useContext,
} from 'react';
import _get from 'lodash/get';


export const SceneDataContext = createContext();

export function useSceneData() {
  const context = useContext(SceneDataContext);

  if (!context) {
    throw new Error('useSceneData must be used within a SceneDataProvider');
  }

  return context;
}

export const SceneDataProvider = props => (<SceneDataContext.Provider {...props} />);

export default {
  SceneDataProvider,
  useSceneData,
};
