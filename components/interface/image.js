import { OrbitControls } from '@react-three/drei'
import React, { Suspense } from "react"
import { Canvas } from '@react-three/fiber'
import monospace from '../../public/Monospace_Medium.json'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import ImageContent from './imageContent'
import * as THREE from 'three'



export default function image() {
  const font = new FontLoader().parse(monospace);
  let camera = new THREE.PerspectiveCamera (10, 1.5, 0.1, 1000);
  camera.position.set(0, 0, -10);

  return (
    <>
      <div id="root">
          <Canvas camera={camera}>
          <ambientLight intensity={7.8} />
          <Suspense fallback={null}>
            {/* <OrbitControls
              PolarAngle={Math.PI /1}
              AzimuthAngle={Math.PI /1}
              minPolarAngle={.94}
              maxPolarAngle={2.3}
              minAzimuthAngle={Math.PI / .54}
              maxAzimuthAngle={Math.PI / -.54}
            /> */}
            <OrbitControls
              // dampingFactor={.4}
            />
            <ImageContent camera={camera}/>
          </Suspense>
        </Canvas>
      </div>
    </>
  )
} 