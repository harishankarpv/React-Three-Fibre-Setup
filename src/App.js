import React from 'react'
import { Canvas } from '@react-three/fiber'
import styled from 'styled-components'
import FirstScene from './components/firstScene/FirstScene';

const CanvasContainer = styled.div`
    width:100%;
    height: 100%;
`;

export default function App() {
  return (
    <CanvasContainer>
        <Canvas>
            <FirstScene />   
        </Canvas>
    </CanvasContainer>
  );
}
