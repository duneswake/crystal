import React, { useRef, lookAt } from "react"
import { useLoader } from "@react-three/fiber";
import monospace from '../../public/Monospace_Medium.json'
import { extend } from '@react-three/fiber';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { useFrame } from '@react-three/fiber'
import useDarkMode from 'use-dark-mode';
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import * as THREE from 'three'


extend({ TextGeometry })
const link = 'http://soloshow.online/'


export default function imageContent(props) {
    
    //text
    const group = useRef()
    const text = useRef()
    const mat0 = useRef()
    const mat1 = useRef()
    const mat2 = useRef()
    const t1 = useRef()
    const t2 = useRef()

    //image
    const ifs = useRef()
    const ils = useRef()
    const irs = useRef()
    const test = useRef()

    //background
    const bgg = useRef()
    const bgm = useRef()

    const font = new FontLoader().parse(monospace);
    const texts = link
    const initRot = [0, 0, 0]
    const darkMode = useDarkMode();
    const darkl = useLoader(TextureLoader, 'tr.png')
    const darkt = useLoader(TextureLoader, 'tri.png')
    // const bgt = useLoader(TextureLoader, 'l.png')

    let tm = new THREE.MeshBasicMaterial({ transparent: true, side: THREE.DoubleSide, map: darkt });

    var darkFlag = 'false';
    var lightflag = 'false';
    useFrame(() => {
        // plane.current.lookAt(1,1,1);
        // test.current.lookAt(props.camera.position)
        irs.current.lookAt(props.camera.position)
        ils.current.lookAt(props.camera.position)
        ifs.current.lookAt(props.camera.position)
        bgg.current.lookAt(props.camera.position)

        t1.current.lookAt(props.camera.position)
        t2.current.lookAt(props.camera.position)

        // test.current.mesh.lookAt(0, 0, 35);
        if (darkMode.value == true) {
            if (darkFlag == 'false') {
                console.log('hello')
                // plane.current.lookAt(0, 0, 35) 
                darkFlag = 'true';
                lightflag = 'false';

                test.current.material = new THREE.MeshBasicMaterial({ transparent: true, side: THREE.DoubleSide, map: darkt });
                irs.current.material = new THREE.MeshBasicMaterial({ transparent: true, side: THREE.DoubleSide, map: darkt });
                ifs.current.material = new THREE.MeshBasicMaterial({ transparent: true, side: THREE.DoubleSide, map: darkt });
                ils.current.material = new THREE.MeshBasicMaterial({ transparent: true, side: THREE.DoubleSide, map: darkt });
                bgm.current.material = new THREE.MeshBasicMaterial({ transparent: true, side: THREE.DoubleSide, map: darkl });
                console.log(bgm.current.material)

                mat0.current.color.setHex(0xffffff);
                mat1.current.color.setHex(0xffffff);
                mat2.current.color.setHex(0xffffff);

            }
        }

        if (darkMode.value == false) {
            if (lightflag == 'false') {
                lightflag = 'true';
                darkFlag = 'false';

                test.current.material = new THREE.MeshBasicMaterial({ transparent: true, side: THREE.DoubleSide, map: darkl });
                irs.current.material = new THREE.MeshBasicMaterial({ transparent: true, side: THREE.DoubleSide, map: darkl });
                ifs.current.material = new THREE.MeshBasicMaterial({ transparent: true, side: THREE.DoubleSide, map: darkl });
                ils.current.material = new THREE.MeshBasicMaterial({ transparent: true, side: THREE.DoubleSide, map: darkl });
                bgm.current.material = new THREE.MeshBasicMaterial({ transparent: true, side: THREE.DoubleSide, map: darkt });
                console.log(bgm.current.material)

                mat0.current.color.setHex(0x00000);
                mat1.current.color.setHex(0x00000);
                mat2.current.color.setHex(0x00000);

            }

        }
    })

    var mattt = new THREE.MeshBasicMaterial({ side: THREE.DoubleSide, map: darkt })
    mattt.anisotropy = 32;

    function Image(props) {
        return (
            <mesh
                {...props}
                ref={test}
                material={mattt}
                rotation={[1.8, 0, 0]}
            >
                <planeBufferGeometry attach="geometry" args={[3, 2]} />
            </mesh>
        )
    }

    return (
        <>
            <group ref={group} >
                <Image position={[0, -10, 0]}
                />
                <Irs position={[2, 0, 0]} />
                <Ils position={[-2, 0, 0]} />
                <Ifs position={[0, 0, 1]} />
                <Bgg/>
            </group>
            <group ref={text}
                rotation={initRot}
            >
                <mesh
                    ref={t1}
                    rotation={[0, 0, 3.14]}
                    position={[0, -10, 0]}
                >
                    <textGeometry args={[texts, { font, size: .6, height: .2 }]} />
                    <meshStandardMaterial ref={mat0} color='black' transparent />
                </mesh>
                <mesh
                    ref={t2}
                    position={[10, -10, 0]}
                    rotation={[0, 0, 3.14]}
                >
                    <textGeometry args={[texts, { font, size: .6, height: .2 }]} />
                    <meshStandardMaterial ref={mat1} color='black' transparent />
                </mesh>
                <mesh
                    // ref={t2}
                    rotation={[0, 0, -4.71]}
                    position={[.2, -10, 0]}
                // onClick={(e) => { window.open(link) }}
                >
                    <textGeometry args={[texts, { font, size: .6, height: .2 }]} />
                    <meshStandardMaterial ref={mat2} color='black' transparent />
                </mesh>
            </group>

        </>
    )

    function Ifs(props) {
        return (
            <mesh
                {...props}
                ref={ifs}
                material={tm}
                rotation={[0, 0, 3.14]}
            >
                <planeBufferGeometry attach="geometry" args={[2, 7]} />
            </mesh>
        )
    }

    function Ils(props) {
        return (
            <mesh
                {...props}
                ref={ils}
                material={tm}
                rotation={[0, 0, 3.14]}
            >
                <planeBufferGeometry attach="geometry" args={[2, 7]} />
            </mesh>
        )
    }

    function Irs(props) {
        return (
            <mesh
                {...props}
                ref={irs}
                material={tm}
                rotation={[0, 0, 3.14]}
            >
                <planeBufferGeometry attach="geometry" args={[2, 7]} />
            </mesh>
        )
    }

    function Bgg() {
        return (
            <group ref={bgg}>
                <mesh
                    ref={bgm}
                    material={tm}
                    position={[200, -200, -200]}
                    rotation={[0, 0, 1.85]}
                >
                    <planeBufferGeometry attach="geometry" args={[20, 50]} />
                </mesh>
            </group>
        )
    }
}

