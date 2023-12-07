// Плоскость земли, повёрнутая по оси X
import * as THREE from "three";
import { useTexture } from "@react-three/drei";
import floorTexture from "./assets/Grass_1.png"; // Текстура на земле
import {RigidBody} from "@react-three/rapier"; //Обёртка для объектов которым нужна физика

export const Ground = () => {
    const texture = useTexture(floorTexture);
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;

    return (
        <RigidBody>
          <mesh position={[0, -5, 0]} rotation-x={-Math.PI / 2}>
              <planeGeometry args={[500, 500]} />
              <meshStandardMaterial
              /*Цвет заливки (виден через текстуру) color="gray"*/
              map={texture}
              /*Размер текстуры*/map-repeat={[100, 100]} />
          </mesh>
        </RigidBody>
    );
}