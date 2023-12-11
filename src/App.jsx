import {PointerLockControls, Sky} from "@react-three/drei";
import {Ground} from "./Ground.jsx";
import {Physics} from "@react-three/rapier";
import {Player} from "./Player.jsx";
import {Cubes} from "./Cube.jsx";
import {WeaponModel} from "./WeaponModel.jsx";
import {HomeModel} from "./HomeModel.jsx";

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
                {/* Кубы */}
                <Cubes />
                {/* Другие объекты */}
            </Physics>

            <group position={[0, 3, 0]}>
                <WeaponModel/>
            </group>
            <group position={[0, 3, 0]} scale={5}>
                <HomeModel/>
            </group>
    </>
)
}

export default App