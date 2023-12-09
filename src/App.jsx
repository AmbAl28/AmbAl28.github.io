import {PointerLockControls, Sky} from "@react-three/drei";
import {Ground} from "./Ground.jsx";
import {Physics, RigidBody} from "@react-three/rapier";
import {Player} from "./Player.jsx";

export const App = () => {
  return (
    <>
    {/* Фиксируем курсор на экране, чтобы он не перемещался при движении мышью, а менялось положение камеры на сцене. */}
    <PointerLockControls />
    {/* Небо и солнце, задний план */}
        <Sky sunPosition={[100, 20, 100]}/>
    {/* Освещение не имеющее направления */}
        <ambientLight intensity={1.5} />
   {/* Физика на сцене */}
   <Physics gravity={[0, -20, 0]}>
                {/* Поверхность (земля) */}
                <Ground />
                {/* Игрок */}
                <Player />
                {/* Для того чтобы куб вёл себя как реальный физический объект, необходимо обернуть его в компонент RigidBody */}
                <RigidBody>
                    <mesh position={[0, 3, -5]}>
                        <boxGeometry />
                    </mesh>
                </RigidBody>
                <RigidBody>
                    <mesh position={[3, 3, -7]}>
                        <boxGeometry />
                    </mesh>
                </RigidBody>
                <RigidBody>
                    <mesh position={[8, 3, -9]}>
                        <boxGeometry />
                    </mesh>
                </RigidBody>
            </Physics>
    </>
)
}

export default App