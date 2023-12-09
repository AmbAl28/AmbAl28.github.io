import * as THREE from "three";
import * as RAPIER from "@dimforge/rapier3d-compat"
import {CapsuleCollider, RigidBody, useRapier} from "@react-three/rapier";
import {useRef} from "react";
import {usePersonControls} from "./hooks.js";
import {useFrame} from "@react-three/fiber";

// Переменные, которые будут хранить состояния направлений движения
const MOVE_SPEED = 5;
const direction = new THREE.Vector3();
const frontVector = new THREE.Vector3();
const sideVector = new THREE.Vector3();

export const Player = () => {
    // Создаём ссылку для объекта игрока. Эта ссылка позволит напрямую взаимодействовать с объектом игрока на сцене.
    const playerRef = useRef();
    // При использовании хука возвращается объект с булевыми значениями, указывающими, какие кнопки управления в данный момент нажаты игроком.
    const { forward, backward, left, right, jump } = usePersonControls();
       
    const rapier = useRapier();

    // Хук вызывается на каждом кадре анимации. Внутри этого хука происходит обновление позиции и линейной скорости игрока.
    useFrame((state) => {
        // Проверка на наличие объекта игрока. Если объект игрока отсутствует, то, во избежание ошибок, функция прекратит выполнение.
        if (!playerRef.current) return;

        // Получение текущей линейной скорости игрока.
        // moving player
        const velocity = playerRef.current.linvel();

        // Установка вектора движения вперёд/назад на основе нажатых кнопок.
        frontVector.set(0, 0, backward - forward);
        // Установка вектора движения влево/вправо.
        sideVector.set(left - right, 0, 0);
        // Вычисление итогового вектора движения игрока путём вычитания векторов движения, нормализации результата (чтобы длина вектора была равна 1) и умножения на константу скорости движения.
        direction.subVectors(frontVector, sideVector).normalize().multiplyScalar(MOVE_SPEED);

        // "Пробуждение" объекта игрока, чтобы убедиться, что он реагирует на изменения. Если не использовать данный метод, то через некоторое время объект “заснёт” и не будет реагировать на изменение позиции.
        playerRef.current.wakeUp();
        // Установка новой линейной скорости игрока на основе вычисленного направления движения и сохранение текущей вертикальной скорости (чтобы не влиять на прыжки или падения).
        playerRef.current.setLinvel({ x: direction.x, y: velocity.y, z: direction.z });

        // Получение доступа к сцене физического движка Rapier. Он содержит все физические объекты и управляет их взаимодействием.
        // jumping
        const world = rapier.world;
        // В этом месте происходит “лучевое прослеживание” (raycasting). Создаётся луч, который начинается в текущей позиции игрока и направлен вниз по оси Y. Этот луч “бросается” в сцену, чтобы определить, пересекается ли он с каким-либо объектом на сцене.
        const ray = world.castRay(new RAPIER.Ray(playerRef.current.translation(), { x: 0, y: -1, z: 0 }));
        
        // Проверяется условие, находится ли игрок на земле:
        // ray - был ли луч создан;
        // ray.collider - столкнулся ли луч с каким-либо объектом на сцене;
        // Math.abs(ray.toi) - “время воздействия” луча. Если это значение меньше или равно заданному, это может указывать на то, что игрок находится достаточно близко к поверхности, чтобы считаться “на земле”.       
        const grounded = ray && ray.collider && Math.abs(ray.toi) <= 1;
        
        if (jump && grounded) doJump();
    });

    const doJump = () => {
        playerRef.current.setLinvel({x: 0, y: 8, z: 0});
    }

    return (
        <>
            <RigidBody colliders={false} mass={1} ref={playerRef} lockRotations>
                <mesh>
                  {/* Это персонаж с обёрткой как физический объект */}
                    <capsuleGeometry args={[0.5, 0.5]}/>
                    <CapsuleCollider args={[0.5, 0.5]} />
                </mesh>
            </RigidBody>
        </>
    );
}