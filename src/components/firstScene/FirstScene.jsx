import React, { useRef,  useState  } from "react";

export default function FirstScene() {

    const meshRef = useRef();
    const [active, setActive] = useState(false)

    return (
        <>
            <ambientLight intensity={0.1} />
            <directionalLight color="red" position={[0, 0, 5]} />

             <mesh scale={active ? 1.5 : 2} onClick={() => setActive(!active)} ref={meshRef}>
                <boxGeometry args={[2, 2, 2]}/>
              
                <meshPhongMaterial />
               
            </mesh> 
            <mesh visible userData={{ hello: 'world' }} position={[1, 2, 3]} rotation={[Math.PI / 2, 0, 0]}>
                <sphereGeometry args={[1, 26, 16]} />
                <meshStandardMaterial color="hotpink" transparent />
            </mesh>
        </>
    )
}
