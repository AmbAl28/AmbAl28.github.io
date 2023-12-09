import {RigidBody} from "@react-three/rapier";
import cubes from "./cubes.json";

// Цыкл генерирующий кубы
export const Cubes = () => {
    return cubes.map((coords, index) => <Cube key={index} position={coords} />);
}

const Cube = (props) => {
    return (
      // Для того чтобы куб вёл себя как реальный физический объект, необходимо обернуть его в компонент RigidBody
        <RigidBody {...props}>
            <mesh>
                <meshStandardMaterial color="lime" />
                <boxGeometry />
            </mesh>
        </RigidBody>
    );
}