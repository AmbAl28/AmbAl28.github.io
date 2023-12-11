import React from "react";
import { useGLTF } from "@react-three/drei";

export function HomeModel(props) {
  const { nodes, materials } = useGLTF("/home.glb");
  return (
    <group {...props} dispose={null}>
      <group position={[-13.719, -0.066, -18.019]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Куб002_1.geometry}
          material={materials["ставни зеленые"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Куб002_2.geometry}
          material={materials["дом синий"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Куб002_3.geometry}
          material={materials.бетон}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Куб002_4.geometry}
          material={materials["внутри ставней 01"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Куб002_5.geometry}
          material={materials.металл}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Куб002_6.geometry}
          material={materials["труба печь"]}
        />
        <group position={[0.006, 0.782, 0.6]} scale={0.685}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Куб015.geometry}
            material={materials["крыша желтая"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Куб015_1.geometry}
            material={materials.шифер}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Куб015_2.geometry}
            material={materials["белая обводка дерево"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Куб015_3.geometry}
            material={materials.стекло}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Куб015_4.geometry}
            material={materials["ставни фиолет"]}
          />
        </group>
        <group position={[-0.003, 0.148, 0.75]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Куб020.geometry}
            material={materials["ставни фиолет"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Куб020_1.geometry}
            material={materials["внутри ставней 01.002"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Куб020_2.geometry}
            material={materials["рама окна"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Куб020_3.geometry}
            material={materials.стекло}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Куб020_4.geometry}
            material={materials.шторы}
          />
        </group>
        <group position={[0.006, 0.234, -0.633]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Куб024.geometry}
            material={materials["дерево стены"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Куб024_1.geometry}
            material={materials.шифер}
          />
        </group>
      </group>
      <group position={[-2.688, -0.086, -17.972]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Куб.geometry}
          material={materials["ставни зеленые.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Куб_1.geometry}
          material={materials["дом желтый"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Куб_2.geometry}
          material={materials.бетон}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Куб_3.geometry}
          material={materials.металл}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Краша_1_дома001.geometry}
          material={materials["крыша дома 1"]}
          position={[0.027, 1.047, -0.012]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Куб004.geometry}
          material={materials["труба печь"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Куб005.geometry}
          material={materials["труба печь.001"]}
        />
        <group position={[-0.054, 0.114, 0.113]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Куб009.geometry}
            material={materials["ставни зеленые"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Куб009_1.geometry}
            material={materials["внутри ставней 01.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Куб009_2.geometry}
            material={materials["рама окна"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Куб009_3.geometry}
            material={materials.стекло}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Куб009_4.geometry}
            material={materials.шторы}
          />
        </group>
        <group position={[0.64, 0.271, -1.726]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Куб010.geometry}
            material={materials["дерево стены"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Куб010_1.geometry}
            material={materials.шифер}
          />
        </group>
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Куб006.geometry}
        material={materials["ставни зеленые.001"]}
        position={[-2.688, -0.086, -17.972]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Куб002.geometry}
        material={materials["Дом 1"]}
        position={[6.853, -0.074, -18.601]}
      />
      <group position={[10.89, -0.074, -18.601]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Куб014.geometry}
          material={materials["ставни зеленые"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Куб014_1.geometry}
          material={materials["дом красный"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Куб014_2.geometry}
          material={materials.бетон}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Куб014_3.geometry}
          material={materials["ставни 01"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Куб014_4.geometry}
          material={materials["внутри ставней 01"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Куб014_5.geometry}
          material={materials.металл}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Куб014_6.geometry}
          material={materials["труба печь.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Куб014_7.geometry}
          material={materials["крыша 1 дома"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Куб014_8.geometry}
          material={materials.шифер}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Куб014_9.geometry}
          material={materials.стекло}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Куб014_10.geometry}
          material={materials["дерево стены"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Куб014_11.geometry}
          material={materials["рама окна"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Куб014_12.geometry}
          material={materials.шторы}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Плоскость006.geometry}
        material={materials.дорога}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Плоскость006_1.geometry}
        material={materials.земля}
      />
    </group>
  );
}

useGLTF.preload("/home.glb");