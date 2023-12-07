// const playerRef = useRef();
// Создаём ссылку для объекта игрока. Эта ссылка позволит напрямую взаимодействовать с объектом игрока на сцене.

// const { forward, backward, left, right, jump } = usePersonControls();
// При использовании хука возвращается объект с булевыми значениями, указывающими, какие кнопки управления в данный момент нажаты игроком.

// useFrame((state) => { ... });
// Хук вызывается на каждом кадре анимации. Внутри этого хука происходит обновление позиции и линейной скорости игрока. 

// if (!playerRef.current) return;
// Проверка на наличие объекта игрока. Если объект игрока отсутствует, то, во избежание ошибок, функция прекратит выполнение.

// const velocity = playerRef.current.linvel();
// Получение текущей линейной скорости игрока.

// frontVector.set(0, 0, backward - forward);
// Установка вектора движения вперёд/назад на основе нажатых кнопок.

// sideVector.set(left - right, 0, 0);
// Установка вектора движения влево/вправо.

// direction.subVectors(frontVector, sideVector).normalize().multiplyScalar(MOVE_SPEED);
// Вычисление итогового вектора движения игрока путём вычитания векторов движения, нормализации результата (чтобы длина вектора была равна 1) и умножения на константу скорости движения.

// playerRef.current.wakeUp();
// "Пробуждение" объекта игрока, чтобы убедиться, что он реагирует на изменения. Если не использовать данный метод, то через некоторое время объект “заснёт” и не будет реагировать на изменение позиции.

// playerRef.current.setLinvel({ x: direction.x, y: velocity.y, z: direction.z });
// Установка новой линейной скорости игрока на основе вычисленного направления движения и сохранение текущей вертикальной скорости (чтобы не влиять на прыжки или падения).

import * as THREE from "three";
import {RigidBody} from "@react-three/rapier";
import {useRef} from "react";
import {usePersonControls} from "./hooks.js";
import {useFrame} from "@react-three/fiber";

// Переменные, которые будут хранить состояния направлений движения
const MOVE_SPEED = 5;
const direction = new THREE.Vector3();
const frontVector = new THREE.Vector3();
const sideVector = new THREE.Vector3();

export const Player = () => {
    const playerRef = useRef();
    const { forward, backward, left, right, jump } = usePersonControls();

    useFrame((state) => {
        if (!playerRef.current) return;

        const velocity = playerRef.current.linvel();

        frontVector.set(0, 0, backward - forward);
        sideVector.set(left - right, 0, 0);
        direction.subVectors(frontVector, sideVector).normalize().multiplyScalar(MOVE_SPEED);

        playerRef.current.wakeUp();
        playerRef.current.setLinvel({ x: direction.x, y: velocity.y, z: direction.z });
    });

    return (
        <>
            <RigidBody position={[0, 1, -2]} ref={playerRef}>
                <mesh>
                  {/* Это персонаж с обёрткой как физический объект */}
                    <capsuleGeometry args={[0.5, 0.5]}/>
                </mesh>
            </RigidBody>
        </>
    );
}