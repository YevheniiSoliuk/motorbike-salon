import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars, useGLTF } from "@react-three/drei";
import { Physics, usePlane, useBox } from "@react-three/cannon";
import { useLoader } from "@react-three/fiber";
import * as THREE from "three";
import React, { Suspense, useRef } from "react";
import { GLTF } from "three-stdlib";
const Photo = ({ photo }: any) => {
  type GLTFResult = GLTF & {
    nodes: {
      Object_514: THREE.Mesh;
      Object_250: THREE.Mesh;
      Object_7: THREE.Mesh;
      Object_10: THREE.Mesh;
      Object_13: THREE.Mesh;
      Object_15: THREE.Mesh;
      Object_17: THREE.Mesh;
      Object_19: THREE.Mesh;
      Object_21: THREE.Mesh;
      Object_23: THREE.Mesh;
      Object_25: THREE.Mesh;
      Object_27: THREE.Mesh;
      Object_29: THREE.Mesh;
      Object_31: THREE.Mesh;
      Object_33: THREE.Mesh;
      Object_35: THREE.Mesh;
      Object_37: THREE.Mesh;
      Object_40: THREE.Mesh;
      Object_42: THREE.Mesh;
      Object_44: THREE.Mesh;
      Object_46: THREE.Mesh;
      Object_48: THREE.Mesh;
      Object_50: THREE.Mesh;
      Object_52: THREE.Mesh;
      Object_54: THREE.Mesh;
      Object_56: THREE.Mesh;
      Object_58: THREE.Mesh;
      Object_60: THREE.Mesh;
      Object_62: THREE.Mesh;
      Object_64: THREE.Mesh;
      Object_66: THREE.Mesh;
      Object_68: THREE.Mesh;
      Object_70: THREE.Mesh;
      Object_72: THREE.Mesh;
      Object_74: THREE.Mesh;
      Object_76: THREE.Mesh;
      Object_78: THREE.Mesh;
      Object_81: THREE.Mesh;
      Object_83: THREE.Mesh;
      Object_85: THREE.Mesh;
      Object_87: THREE.Mesh;
      Object_89: THREE.Mesh;
      Object_91: THREE.Mesh;
      Object_93: THREE.Mesh;
      Object_95: THREE.Mesh;
      Object_97: THREE.Mesh;
      Object_99: THREE.Mesh;
      Object_101: THREE.Mesh;
      Object_103: THREE.Mesh;
      Object_105: THREE.Mesh;
      Object_107: THREE.Mesh;
      Object_109: THREE.Mesh;
      Object_111: THREE.Mesh;
      Object_113: THREE.Mesh;
      Object_115: THREE.Mesh;
      Object_117: THREE.Mesh;
      Object_119: THREE.Mesh;
      Object_121: THREE.Mesh;
      Object_123: THREE.Mesh;
      Object_125: THREE.Mesh;
      Object_127: THREE.Mesh;
      Object_129: THREE.Mesh;
      Object_131: THREE.Mesh;
      Object_133: THREE.Mesh;
      Object_135: THREE.Mesh;
      Object_137: THREE.Mesh;
      Object_139: THREE.Mesh;
      Object_141: THREE.Mesh;
      Object_143: THREE.Mesh;
      Object_145: THREE.Mesh;
      Object_147: THREE.Mesh;
      Object_149: THREE.Mesh;
      Object_151: THREE.Mesh;
      Object_153: THREE.Mesh;
      Object_155: THREE.Mesh;
      Object_157: THREE.Mesh;
      Object_159: THREE.Mesh;
      Object_161: THREE.Mesh;
      Object_163: THREE.Mesh;
      Object_165: THREE.Mesh;
      Object_167: THREE.Mesh;
      Object_169: THREE.Mesh;
      Object_171: THREE.Mesh;
      Object_173: THREE.Mesh;
      Object_175: THREE.Mesh;
      Object_177: THREE.Mesh;
      Object_179: THREE.Mesh;
      Object_181: THREE.Mesh;
      Object_183: THREE.Mesh;
      Object_185: THREE.Mesh;
      Object_187: THREE.Mesh;
      Object_189: THREE.Mesh;
      Object_191: THREE.Mesh;
      Object_193: THREE.Mesh;
      Object_195: THREE.Mesh;
      Object_197: THREE.Mesh;
      Object_199: THREE.Mesh;
      Object_201: THREE.Mesh;
      Object_203: THREE.Mesh;
      Object_205: THREE.Mesh;
      Object_207: THREE.Mesh;
      Object_209: THREE.Mesh;
      Object_211: THREE.Mesh;
      Object_213: THREE.Mesh;
      Object_215: THREE.Mesh;
      Object_217: THREE.Mesh;
      Object_219: THREE.Mesh;
      Object_221: THREE.Mesh;
      Object_223: THREE.Mesh;
      Object_225: THREE.Mesh;
      Object_227: THREE.Mesh;
      Object_229: THREE.Mesh;
      Object_232: THREE.Mesh;
      Object_236: THREE.Mesh;
      Object_238: THREE.Mesh;
      Object_240: THREE.Mesh;
      Object_242: THREE.Mesh;
      Object_244: THREE.Mesh;
      Object_246: THREE.Mesh;
      Object_248: THREE.Mesh;
      Object_252: THREE.Mesh;
      Object_254: THREE.Mesh;
      Object_256: THREE.Mesh;
      Object_259: THREE.Mesh;
      Object_261: THREE.Mesh;
      Object_263: THREE.Mesh;
      Object_266: THREE.Mesh;
      Object_268: THREE.Mesh;
      Object_270: THREE.Mesh;
      Object_272: THREE.Mesh;
      Object_274: THREE.Mesh;
      Object_276: THREE.Mesh;
      Object_278: THREE.Mesh;
      Object_280: THREE.Mesh;
      Object_283: THREE.Mesh;
      Object_285: THREE.Mesh;
      Object_287: THREE.Mesh;
      Object_290: THREE.Mesh;
      Object_292: THREE.Mesh;
      Object_294: THREE.Mesh;
      Object_296: THREE.Mesh;
      Object_298: THREE.Mesh;
      Object_300: THREE.Mesh;
      Object_302: THREE.Mesh;
      Object_304: THREE.Mesh;
      Object_306: THREE.Mesh;
      Object_309: THREE.Mesh;
      Object_311: THREE.Mesh;
      Object_313: THREE.Mesh;
      Object_315: THREE.Mesh;
      Object_317: THREE.Mesh;
      Object_320: THREE.Mesh;
      Object_322: THREE.Mesh;
      Object_324: THREE.Mesh;
      Object_326: THREE.Mesh;
      Object_328: THREE.Mesh;
      Object_330: THREE.Mesh;
      Object_332: THREE.Mesh;
      Object_334: THREE.Mesh;
      Object_336: THREE.Mesh;
      Object_338: THREE.Mesh;
      Object_340: THREE.Mesh;
      Object_343: THREE.Mesh;
      Object_345: THREE.Mesh;
      Object_348: THREE.Mesh;
      Object_350: THREE.Mesh;
      Object_352: THREE.Mesh;
      Object_354: THREE.Mesh;
      Object_357: THREE.Mesh;
      Object_359: THREE.Mesh;
      Object_361: THREE.Mesh;
      Object_363: THREE.Mesh;
      Object_365: THREE.Mesh;
      Object_367: THREE.Mesh;
      Object_369: THREE.Mesh;
      Object_372: THREE.Mesh;
      Object_374: THREE.Mesh;
      Object_376: THREE.Mesh;
      Object_379: THREE.Mesh;
      Object_381: THREE.Mesh;
      Object_383: THREE.Mesh;
      Object_385: THREE.Mesh;
      Object_387: THREE.Mesh;
      Object_389: THREE.Mesh;
      Object_391: THREE.Mesh;
      Object_393: THREE.Mesh;
      Object_396: THREE.Mesh;
      Object_398: THREE.Mesh;
      Object_400: THREE.Mesh;
      Object_402: THREE.Mesh;
      Object_404: THREE.Mesh;
      Object_406: THREE.Mesh;
      Object_410: THREE.Mesh;
      Object_412: THREE.Mesh;
      Object_414: THREE.Mesh;
      Object_416: THREE.Mesh;
      Object_418: THREE.Mesh;
      Object_421: THREE.Mesh;
      Object_423: THREE.Mesh;
      Object_426: THREE.Mesh;
      Object_428: THREE.Mesh;
      Object_430: THREE.Mesh;
      Object_432: THREE.Mesh;
      Object_434: THREE.Mesh;
      Object_437: THREE.Mesh;
      Object_439: THREE.Mesh;
      Object_441: THREE.Mesh;
      Object_443: THREE.Mesh;
      Object_445: THREE.Mesh;
      Object_447: THREE.Mesh;
      Object_449: THREE.Mesh;
      Object_452: THREE.Mesh;
      Object_454: THREE.Mesh;
      Object_456: THREE.Mesh;
      Object_458: THREE.Mesh;
      Object_460: THREE.Mesh;
      Object_462: THREE.Mesh;
      Object_465: THREE.Mesh;
      Object_467: THREE.Mesh;
      Object_469: THREE.Mesh;
      Object_471: THREE.Mesh;
      Object_473: THREE.Mesh;
      Object_475: THREE.Mesh;
      Object_477: THREE.Mesh;
      Object_479: THREE.Mesh;
      Object_481: THREE.Mesh;
      Object_484: THREE.Mesh;
      Object_486: THREE.Mesh;
      Object_489: THREE.Mesh;
      Object_493: THREE.Mesh;
      Object_495: THREE.Mesh;
      Object_497: THREE.Mesh;
      Object_500: THREE.Mesh;
      Object_502: THREE.Mesh;
      Object_504: THREE.Mesh;
      Object_507: THREE.Mesh;
      Object_509: THREE.Mesh;
      Object_512: THREE.Mesh;
      Object_517: THREE.Mesh;
      Object_519: THREE.Mesh;
      Object_521: THREE.Mesh;
      Object_525: THREE.Mesh;
      Object_527: THREE.Mesh;
      Object_530: THREE.Mesh;
      Object_532: THREE.Mesh;
      Object_534: THREE.Mesh;
      Object_536: THREE.Mesh;
      Object_538: THREE.Mesh;
      Object_540: THREE.Mesh;
      Object_542: THREE.Mesh;
      Object_544: THREE.Mesh;
      Object_546: THREE.Mesh;
      Object_548: THREE.Mesh;
      Object_550: THREE.Mesh;
      Object_552: THREE.Mesh;
      Object_554: THREE.Mesh;
      Object_558: THREE.Mesh;
      Object_560: THREE.Mesh;
      Object_562: THREE.Mesh;
      Object_564: THREE.Mesh;
      Object_566: THREE.Mesh;
      Object_566001: THREE.Mesh;
      Plane: THREE.Mesh;
      Plane001: THREE.Mesh;
      Plane002: THREE.Mesh;
    };
    materials: {
      ["espelho.002"]: THREE.MeshStandardMaterial;
      ["Matte__FFCCCCCC.006"]: THREE.MeshStandardMaterial;
      logo: THREE.MeshStandardMaterial;
      ["plastico_fosco.002"]: THREE.MeshStandardMaterial;
      ["Matte__FFFF0000__spec_.003_Vermelha"]: THREE.MeshStandardMaterial;
      ["cabos.002"]: THREE.MeshStandardMaterial;
      ["sdsd.002"]: THREE.MeshStandardMaterial;
      aluminio: THREE.MeshStandardMaterial;
      ["prata_aluminio.002"]: THREE.MeshStandardMaterial;
      ["Matte__FF6C6C6C__spec_.003"]: THREE.MeshStandardMaterial;
      MATERIAL_TANQUE: THREE.MeshStandardMaterial;
      ["MATERIAL_TANQUE.001"]: THREE.MeshStandardMaterial;
      ["pneu.002"]: THREE.MeshStandardMaterial;
      ["metalico.002"]: THREE.MeshStandardMaterial;
      ["Matte__FFC0C0C0__spec_.003"]: THREE.MeshStandardMaterial;
      ["Matte__FF808080__spec_.003"]: THREE.MeshStandardMaterial;
      ["Matte__FF161616__spec_.003"]: THREE.MeshStandardMaterial;
      ["Matte__FFB60000__spec_.003"]: THREE.MeshStandardMaterial;
      ["Matte__FF5B5B5B__spec_.003"]: THREE.MeshStandardMaterial;
      ["Matte__FF8C8C8C__spec_.003"]: THREE.MeshStandardMaterial;
      ["Matte__FF171717.003"]: THREE.MeshStandardMaterial;
      ["plasicos_brilho.002"]: THREE.MeshStandardMaterial;
      cromo: THREE.MeshStandardMaterial;
      mascara_tanque: THREE.MeshStandardMaterial;
      ["Matte__FFCCCCCC.007"]: THREE.MeshStandardMaterial;
      ["Matte__FFD60000__spec_.004"]: THREE.MeshStandardMaterial;
      ["Matte__FF7C7C7C__spec_.004"]: THREE.MeshStandardMaterial;
      Matte__FFA48263: THREE.MeshStandardMaterial;
      ["Matte__FF5F5F5F__spec_.002"]: THREE.MeshStandardMaterial;
      ["mascara_tanque.002"]: THREE.MeshStandardMaterial;
      ["cor_moto.002_Vermelha"]: THREE.MeshStandardMaterial;
      COURINO: THREE.MeshStandardMaterial;
      ["Matte__FFFFFFFF.005"]: THREE.MeshStandardMaterial;
      ["Matte__FF000000__spec_.003"]: THREE.MeshStandardMaterial;
      ["Matte__FF331400.002"]: THREE.MeshStandardMaterial;
      ["Matte__FF003300.002"]: THREE.MeshStandardMaterial;
      ["vehiclelights__spec_FR_.002"]: THREE.MeshStandardMaterial;
      ["preto_metal.002"]: THREE.MeshStandardMaterial;
      ["parafusos.002"]: THREE.MeshStandardMaterial;
      pneu_borracha: THREE.MeshStandardMaterial;
      disco: THREE.MeshStandardMaterial;
      preto_fosco: THREE.MeshStandardMaterial;
      Farol: THREE.MeshStandardMaterial;
      translucido_incolor: THREE.MeshPhysicalMaterial;
      PiscaAlertaCB: THREE.MeshStandardMaterial;
      FarolCB: THREE.MeshStandardMaterial;
      plastico_brilho2: THREE.MeshPhysicalMaterial;
      LanternaCB: THREE.MeshPhysicalMaterial;
      fundo_farol: THREE.MeshStandardMaterial;
      ["Placa-Mercosul-Moto.003"]: THREE.MeshStandardMaterial;
      ["motor.003"]: THREE.MeshStandardMaterial;
      ["Matte__FFCCCCCC__spec_.003"]: THREE.MeshStandardMaterial;
      ["Matte__FFE9E9E9__spec_.003"]: THREE.MeshStandardMaterial;
      ["Matte__FF020202__spec_.003"]: THREE.MeshStandardMaterial;
      ["Matte__FF332B29__spec_.003"]: THREE.MeshStandardMaterial;
      ["Matte__FF291F15__spec_.003"]: THREE.MeshStandardMaterial;
      ["Matte__FF4A4A4A__spec_.003"]: THREE.MeshStandardMaterial;
      ["corrente.002"]: THREE.MeshStandardMaterial;
    };
    // animations: GLTFAction[]
  };
  function Model(props: JSX.IntrinsicElements["group"]) {
    const { nodes, materials } = useGLTF(
      "/motorcycle/txamax.gltf"
    ) as GLTFResult;
    return (
      <group
        {...props}
        dispose={null}
        scale={4}
        position={[-7.803, -3.001, -2.019]}
      >
        <group position={[30.203, 0.001, -0.019]} rotation={[0, 1.571, 0]}>
          <mesh
            geometry={nodes.Object_514.geometry}
            material={materials["espelho.002"]}
            position={[-0.331, 1.075, 0.202]}
            rotation={[1.713, 0, -Math.PI]}
          />
        </group>
        <directionalLight intensity={1} rotation={[-Math.PI / 2, 0, 0]} />
        <pointLight
          intensity={1}
          color="#ae65ff"
          position={[3.004, 0.597, 0.873]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          geometry={nodes.Object_7.geometry}
          material={materials.logo}
          position={[1.262, 0.528, -0.017]}
          rotation={[Math.PI / 2, -0.482, Math.PI / 2]}
          scale={0.715}
        />
        <mesh
          geometry={nodes.Object_10.geometry}
          material={materials["plastico_fosco.002"]}
          position={[2.233, 0.254, -0.017]}
          rotation={[Math.PI / 2, 0.023, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_13.geometry}
          material={materials["Matte__FFFF0000__spec_.003_Vermelha"]}
          position={[2.48, 0.692, -0.228]}
          rotation={[1.577, -0.035, 1.63]}
          scale={[1.002, 0.919, 0.919]}
        />
        <mesh
          geometry={nodes.Object_15.geometry}
          material={materials["Matte__FFCCCCCC.006"]}
          position={[2.48, 0.692, -0.228]}
          rotation={[1.577, -0.035, 1.63]}
          scale={[1.002, 0.919, 0.919]}
        />
        <mesh
          geometry={nodes.Object_17.geometry}
          material={materials["cabos.002"]}
          position={[2.233, 0.254, -0.017]}
          rotation={[Math.PI / 2, 0.023, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_19.geometry}
          material={materials["cabos.002"]}
          position={[2.233, 0.254, -0.017]}
          rotation={[Math.PI / 2, 0.023, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_21.geometry}
          material={materials["plastico_fosco.002"]}
          position={[2.247, 0.534, 0.104]}
          rotation={[Math.PI / 2, 0.023, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_23.geometry}
          material={materials["sdsd.002"]}
          position={[2.25, 0.271, -0.014]}
          rotation={[Math.PI / 2, 0.023, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_25.geometry}
          material={materials.aluminio}
          position={[2.266, 0.282, 0.007]}
          rotation={[Math.PI / 2, 0.023, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_27.geometry}
          material={materials.aluminio}
          position={[2.272, 0.284, -0.033]}
          rotation={[Math.PI / 2, 0.023, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_29.geometry}
          material={materials.aluminio}
          position={[1.834, 0.48, 0.125]}
          rotation={[Math.PI / 2, -0.059, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_31.geometry}
          material={materials["prata_aluminio.002"]}
          position={[2.295, 0.202, 0.007]}
          rotation={[Math.PI / 2, -0.059, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_33.geometry}
          material={materials["Matte__FF6C6C6C__spec_.003"]}
          position={[2.233, 0.254, -0.017]}
          rotation={[Math.PI / 2, 0.023, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_35.geometry}
          material={materials["Matte__FF6C6C6C__spec_.003"]}
          position={[2.233, 0.293, -0.017]}
          rotation={[Math.PI / 2, 0.023, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_37.geometry}
          material={materials.MATERIAL_TANQUE}
          position={[1.522, 0.811, 0.083]}
          rotation={[1.57, 0.084, 1.583]}
        />
        <mesh
          geometry={nodes.Object_40.geometry}
          material={materials["MATERIAL_TANQUE.001"]}
          position={[2.332, 0.293, -0.036]}
          rotation={[1.708, 0.054, 1.594]}
        />
        <mesh
          geometry={nodes.Object_42.geometry}
          material={materials["plastico_fosco.002"]}
          position={[2.332, 0.293, -0.036]}
          rotation={[1.708, 0.054, 1.594]}
        />
        <mesh
          geometry={nodes.Object_44.geometry}
          material={materials["plastico_fosco.002"]}
          position={[1.785, 0.421, 0.13]}
          rotation={[1.658, 0.086, 1.608]}
        />
        <mesh
          geometry={nodes.Object_46.geometry}
          material={materials["pneu.002"]}
          position={[2.233, 0.254, -0.017]}
          rotation={[Math.PI / 2, 0.023, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_48.geometry}
          material={materials["plastico_fosco.002"]}
          position={[2.233, 0.254, -0.017]}
          rotation={[Math.PI / 2, 0.023, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_50.geometry}
          material={materials["plastico_fosco.002"]}
          position={[2.233, 0.254, -0.017]}
          rotation={[Math.PI / 2, 0.023, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_52.geometry}
          material={materials["plastico_fosco.002"]}
          position={[2.233, 0.254, -0.017]}
          rotation={[Math.PI / 2, 0.023, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_54.geometry}
          material={materials["plastico_fosco.002"]}
          position={[2.233, 0.254, -0.017]}
          rotation={[Math.PI / 2, 0.023, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_56.geometry}
          material={materials["plastico_fosco.002"]}
          position={[2.233, 0.254, -0.017]}
          rotation={[Math.PI / 2, 0.023, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_58.geometry}
          material={materials["plastico_fosco.002"]}
          position={[2.233, 0.254, -0.017]}
          rotation={[Math.PI / 2, 0.023, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_60.geometry}
          material={materials["plastico_fosco.002"]}
          position={[2.233, 0.254, -0.017]}
          rotation={[Math.PI / 2, 0.023, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_62.geometry}
          material={materials["plastico_fosco.002"]}
          position={[2.233, 0.254, -0.017]}
          rotation={[Math.PI / 2, 0.023, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_64.geometry}
          material={materials["plastico_fosco.002"]}
          position={[2.233, 0.254, -0.017]}
          rotation={[Math.PI / 2, 0.023, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_66.geometry}
          material={materials["plastico_fosco.002"]}
          position={[2.233, 0.254, -0.017]}
          rotation={[Math.PI / 2, 0.023, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_68.geometry}
          material={materials["plastico_fosco.002"]}
          position={[2.233, 0.254, -0.017]}
          rotation={[Math.PI / 2, 0.023, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_70.geometry}
          material={materials["plastico_fosco.002"]}
          position={[2.233, 0.254, -0.017]}
          rotation={[Math.PI / 2, 0.023, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_72.geometry}
          material={materials["plastico_fosco.002"]}
          position={[2.233, 0.254, -0.017]}
          rotation={[Math.PI / 2, 0.023, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_74.geometry}
          material={materials["plastico_fosco.002"]}
          position={[2.233, 0.254, -0.017]}
          rotation={[Math.PI / 2, 0.023, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_76.geometry}
          material={materials["plastico_fosco.002"]}
          position={[2.233, 0.254, -0.017]}
          rotation={[Math.PI / 2, 0.023, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_78.geometry}
          material={materials["plastico_fosco.002"]}
          position={[2.233, 0.254, -0.017]}
          rotation={[Math.PI / 2, 0.023, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_81.geometry}
          material={materials["plastico_fosco.002"]}
          position={[2.232, 0.254, -0.017]}
          rotation={[Math.PI / 2, 0.026, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_83.geometry}
          material={materials["metalico.002"]}
          position={[2.232, 0.254, -0.017]}
          rotation={[Math.PI / 2, 0.026, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_85.geometry}
          material={materials["plastico_fosco.002"]}
          position={[2.233, 0.254, -0.017]}
          rotation={[Math.PI / 2, 0.023, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_87.geometry}
          material={materials["plastico_fosco.002"]}
          position={[2.233, 0.254, -0.017]}
          rotation={[Math.PI / 2, 0.023, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_89.geometry}
          material={materials["plastico_fosco.002"]}
          position={[2.233, 0.254, -0.017]}
          rotation={[Math.PI / 2, 0.023, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_91.geometry}
          material={materials["plastico_fosco.002"]}
          position={[2.233, 0.254, -0.017]}
          rotation={[Math.PI / 2, 0.023, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_93.geometry}
          material={materials["plastico_fosco.002"]}
          position={[2.233, 0.254, -0.017]}
          rotation={[Math.PI / 2, 0.023, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_95.geometry}
          material={materials["plastico_fosco.002"]}
          position={[2.233, 0.254, -0.017]}
          rotation={[Math.PI / 2, 0.023, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_97.geometry}
          material={materials["plastico_fosco.002"]}
          position={[2.233, 0.254, -0.017]}
          rotation={[Math.PI / 2, 0.023, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_99.geometry}
          material={materials["plastico_fosco.002"]}
          position={[2.233, 0.254, -0.017]}
          rotation={[Math.PI / 2, 0.023, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_101.geometry}
          material={materials["plastico_fosco.002"]}
          position={[2.233, 0.254, -0.017]}
          rotation={[Math.PI / 2, 0.023, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_103.geometry}
          material={materials["plastico_fosco.002"]}
          position={[2.233, 0.254, -0.017]}
          rotation={[Math.PI / 2, 0.023, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_105.geometry}
          material={materials["plastico_fosco.002"]}
          position={[2.233, 0.254, -0.017]}
          rotation={[Math.PI / 2, 0.023, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_107.geometry}
          material={materials["plastico_fosco.002"]}
          position={[2.233, 0.254, -0.017]}
          rotation={[Math.PI / 2, 0.023, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_109.geometry}
          material={materials["plastico_fosco.002"]}
          position={[2.233, 0.254, -0.017]}
          rotation={[Math.PI / 2, 0.023, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_111.geometry}
          material={materials["plastico_fosco.002"]}
          position={[2.233, 0.254, -0.017]}
          rotation={[Math.PI / 2, 0.023, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_113.geometry}
          material={materials["plastico_fosco.002"]}
          position={[2.233, 0.254, -0.017]}
          rotation={[Math.PI / 2, 0.023, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_115.geometry}
          material={materials["plastico_fosco.002"]}
          position={[2.233, 0.254, -0.017]}
          rotation={[Math.PI / 2, 0.023, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_117.geometry}
          material={materials["plastico_fosco.002"]}
          position={[2.233, 0.254, -0.017]}
          rotation={[Math.PI / 2, 0.023, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_119.geometry}
          material={materials["plastico_fosco.002"]}
          position={[2.233, 0.254, -0.017]}
          rotation={[Math.PI / 2, 0.023, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_121.geometry}
          material={materials["plastico_fosco.002"]}
          position={[2.233, 0.254, -0.017]}
          rotation={[Math.PI / 2, 0.023, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_123.geometry}
          material={materials["plastico_fosco.002"]}
          position={[2.233, 0.254, -0.017]}
          rotation={[Math.PI / 2, 0.023, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_125.geometry}
          material={materials["plastico_fosco.002"]}
          position={[2.233, 0.254, -0.017]}
          rotation={[Math.PI / 2, 0.023, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_127.geometry}
          material={materials["plastico_fosco.002"]}
          position={[2.233, 0.254, -0.017]}
          rotation={[Math.PI / 2, 0.023, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_129.geometry}
          material={materials["plastico_fosco.002"]}
          position={[2.233, 0.254, -0.017]}
          rotation={[Math.PI / 2, 0.023, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_131.geometry}
          material={materials["plastico_fosco.002"]}
          position={[2.233, 0.254, -0.017]}
          rotation={[Math.PI / 2, 0.023, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_133.geometry}
          material={materials["plastico_fosco.002"]}
          position={[2.233, 0.254, -0.017]}
          rotation={[Math.PI / 2, 0.023, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_135.geometry}
          material={materials["plastico_fosco.002"]}
          position={[2.233, 0.254, -0.017]}
          rotation={[Math.PI / 2, 0.023, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_137.geometry}
          material={materials["plastico_fosco.002"]}
          position={[2.233, 0.254, -0.017]}
          rotation={[Math.PI / 2, 0.023, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_139.geometry}
          material={materials["plastico_fosco.002"]}
          position={[2.233, 0.254, -0.017]}
          rotation={[Math.PI / 2, 0.023, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_141.geometry}
          material={materials["plastico_fosco.002"]}
          position={[2.233, 0.254, -0.017]}
          rotation={[Math.PI / 2, 0.023, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_143.geometry}
          material={materials["plastico_fosco.002"]}
          position={[2.233, 0.254, -0.017]}
          rotation={[Math.PI / 2, 0.023, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_145.geometry}
          material={materials["plastico_fosco.002"]}
          position={[2.233, 0.254, -0.017]}
          rotation={[Math.PI / 2, 0.023, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_147.geometry}
          material={materials["plastico_fosco.002"]}
          position={[2.233, 0.254, -0.017]}
          rotation={[Math.PI / 2, 0.023, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_149.geometry}
          material={materials["plastico_fosco.002"]}
          position={[2.233, 0.254, -0.017]}
          rotation={[Math.PI / 2, 0.023, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_151.geometry}
          material={materials["plastico_fosco.002"]}
          position={[2.233, 0.254, -0.017]}
          rotation={[Math.PI / 2, 0.023, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_153.geometry}
          material={materials["plastico_fosco.002"]}
          position={[2.233, 0.254, -0.017]}
          rotation={[Math.PI / 2, 0.023, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_155.geometry}
          material={materials["plastico_fosco.002"]}
          position={[2.233, 0.254, -0.017]}
          rotation={[Math.PI / 2, 0.023, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_157.geometry}
          material={materials["plastico_fosco.002"]}
          position={[2.233, 0.254, -0.017]}
          rotation={[Math.PI / 2, 0.023, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_159.geometry}
          material={materials["plastico_fosco.002"]}
          position={[2.141, 0.264, 0.17]}
          rotation={[Math.PI / 2, 0.136, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_161.geometry}
          material={materials["plastico_fosco.002"]}
          position={[2.057, 0.262, 0.112]}
          rotation={[Math.PI / 2, 0.136, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_163.geometry}
          material={materials["plastico_fosco.002"]}
          position={[2.272, 0.284, -0.017]}
          rotation={[Math.PI / 2, 0.023, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_165.geometry}
          material={materials["plastico_fosco.002"]}
          position={[2.233, 0.254, -0.017]}
          rotation={[Math.PI / 2, 0.023, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_167.geometry}
          material={materials["plastico_fosco.002"]}
          position={[2.233, 0.254, -0.017]}
          rotation={[Math.PI / 2, 0.023, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_169.geometry}
          material={materials["plastico_fosco.002"]}
          position={[2.233, 0.254, -0.017]}
          rotation={[Math.PI / 2, 0.023, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_171.geometry}
          material={materials["plastico_fosco.002"]}
          position={[2.243, 0.291, -0.03]}
          rotation={[Math.PI / 2, 0.023, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_173.geometry}
          material={materials["plastico_fosco.002"]}
          position={[2.233, 0.254, -0.017]}
          rotation={[Math.PI / 2, 0.023, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_175.geometry}
          material={materials["plastico_fosco.002"]}
          position={[2.233, 0.293, -0.017]}
          rotation={[Math.PI / 2, 0.023, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_177.geometry}
          material={materials["plastico_fosco.002"]}
          position={[2.233, 0.254, -0.017]}
          rotation={[Math.PI / 2, 0.023, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_179.geometry}
          material={materials["plastico_fosco.002"]}
          position={[2.233, 0.293, -0.017]}
          rotation={[Math.PI / 2, 0.023, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_181.geometry}
          material={materials["plastico_fosco.002"]}
          position={[2.233, 0.254, -0.017]}
          rotation={[Math.PI / 2, 0.023, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_183.geometry}
          material={materials["plastico_fosco.002"]}
          position={[2.233, 0.254, -0.017]}
          rotation={[Math.PI / 2, 0.023, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_185.geometry}
          material={materials["plastico_fosco.002"]}
          position={[2.233, 0.293, -0.017]}
          rotation={[Math.PI / 2, 0.023, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_187.geometry}
          material={materials["plastico_fosco.002"]}
          position={[2.233, 0.254, -0.017]}
          rotation={[Math.PI / 2, 0.023, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_189.geometry}
          material={materials["plastico_fosco.002"]}
          position={[2.233, 0.254, -0.017]}
          rotation={[Math.PI / 2, 0.023, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_191.geometry}
          material={materials["plastico_fosco.002"]}
          position={[2.233, 0.254, -0.017]}
          rotation={[Math.PI / 2, 0.023, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_193.geometry}
          material={materials["plastico_fosco.002"]}
          position={[2.233, 0.254, -0.017]}
          rotation={[Math.PI / 2, 0.023, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_195.geometry}
          material={materials["plastico_fosco.002"]}
          position={[2.233, 0.254, -0.017]}
          rotation={[Math.PI / 2, 0.023, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_197.geometry}
          material={materials["plastico_fosco.002"]}
          position={[2.233, 0.254, -0.017]}
          rotation={[Math.PI / 2, 0.023, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_199.geometry}
          material={materials["plastico_fosco.002"]}
          position={[2.233, 0.254, -0.017]}
          rotation={[Math.PI / 2, 0.023, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_201.geometry}
          material={materials["plastico_fosco.002"]}
          position={[2.243, 0.291, -0.03]}
          rotation={[Math.PI / 2, 0.023, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_203.geometry}
          material={materials["plastico_fosco.002"]}
          position={[2.233, 0.254, -0.017]}
          rotation={[Math.PI / 2, 0.023, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_205.geometry}
          material={materials["plastico_fosco.002"]}
          position={[2.243, 0.291, -0.03]}
          rotation={[Math.PI / 2, 0.023, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_207.geometry}
          material={materials["plastico_fosco.002"]}
          position={[2.233, 0.254, -0.017]}
          rotation={[Math.PI / 2, 0.023, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_209.geometry}
          material={materials["plastico_fosco.002"]}
          position={[2.243, 0.291, -0.03]}
          rotation={[Math.PI / 2, 0.023, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_211.geometry}
          material={materials["plastico_fosco.002"]}
          position={[2.243, 0.291, -0.03]}
          rotation={[Math.PI / 2, 0.023, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_213.geometry}
          material={materials["plastico_fosco.002"]}
          position={[2.243, 0.289, -0.03]}
          rotation={[Math.PI / 2, 0.023, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_215.geometry}
          material={materials["plastico_fosco.002"]}
          position={[2.233, 0.254, -0.017]}
          rotation={[Math.PI / 2, 0.023, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_217.geometry}
          material={materials["plastico_fosco.002"]}
          position={[2.233, 0.254, -0.017]}
          rotation={[Math.PI / 2, 0.023, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_219.geometry}
          material={materials["plastico_fosco.002"]}
          position={[2.243, 0.291, -0.03]}
          rotation={[Math.PI / 2, 0.023, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_221.geometry}
          material={materials["plastico_fosco.002"]}
          position={[2.233, 0.254, -0.017]}
          rotation={[Math.PI / 2, 0.023, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_223.geometry}
          material={materials["plastico_fosco.002"]}
          position={[2.245, 0.32, -0.03]}
          rotation={[Math.PI / 2, 0.023, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_225.geometry}
          material={materials["plastico_fosco.002"]}
          position={[2.233, 0.254, -0.017]}
          rotation={[Math.PI / 2, 0.023, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_227.geometry}
          material={materials["plastico_fosco.002"]}
          position={[2.233, 0.254, -0.017]}
          rotation={[Math.PI / 2, 0.023, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_229.geometry}
          material={materials["plastico_fosco.002"]}
          position={[2.233, 0.254, -0.017]}
          rotation={[Math.PI / 2, 0.023, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_232.geometry}
          material={materials.MATERIAL_TANQUE}
          position={[2.239, 0.305, 0.007]}
          rotation={[Math.PI / 2, -0.03, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_236.geometry}
          material={materials["plastico_fosco.002"]}
          position={[2.266, 0.282, 0.007]}
          rotation={[Math.PI / 2, 0.023, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_238.geometry}
          material={materials["plastico_fosco.002"]}
          position={[2.272, 0.284, -0.033]}
          rotation={[Math.PI / 2, 0.023, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_240.geometry}
          material={materials["plastico_fosco.002"]}
          position={[2.233, 0.254, -0.017]}
          rotation={[Math.PI / 2, 0.023, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_242.geometry}
          material={materials["plastico_fosco.002"]}
          position={[2.196, 0.322, -0.017]}
          rotation={[Math.PI / 2, 0.023, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_244.geometry}
          material={materials["plastico_fosco.002"]}
          position={[2.233, 0.254, -0.017]}
          rotation={[Math.PI / 2, 0.023, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_246.geometry}
          material={materials["plastico_fosco.002"]}
          position={[2.233, 0.254, -0.017]}
          rotation={[Math.PI / 2, 0.023, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_248.geometry}
          material={materials["plastico_fosco.002"]}
          position={[1.53, 0.796, -0.016]}
          rotation={[Math.PI / 2, 0.023, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_252.geometry}
          material={materials["Matte__FFCCCCCC.006"]}
          position={[1.493, 0.793, -0.018]}
          rotation={[Math.PI / 2, 0.023, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_254.geometry}
          material={materials["Matte__FFCCCCCC.006"]}
          position={[2.302, 0.29, -0.017]}
          rotation={[Math.PI / 2, 0.023, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_256.geometry}
          material={materials["Matte__FFC0C0C0__spec_.003"]}
          position={[2.233, 0.254, -0.017]}
          rotation={[Math.PI / 2, 0.023, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_259.geometry}
          material={materials["Matte__FFC0C0C0__spec_.003"]}
          position={[2.233, 0.254, -0.017]}
          rotation={[Math.PI / 2, 0.023, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_261.geometry}
          material={materials["Matte__FF808080__spec_.003"]}
          position={[2.233, 0.254, -0.017]}
          rotation={[Math.PI / 2, 0.023, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_263.geometry}
          material={materials["Matte__FFC0C0C0__spec_.003"]}
          position={[2.233, 0.254, -0.017]}
          rotation={[Math.PI / 2, 0.023, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_266.geometry}
          material={materials["Matte__FFC0C0C0__spec_.003"]}
          position={[2.233, 0.254, -0.017]}
          rotation={[Math.PI / 2, 0.023, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_268.geometry}
          material={materials["Matte__FF808080__spec_.003"]}
          position={[2.233, 0.254, -0.017]}
          rotation={[Math.PI / 2, 0.023, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_270.geometry}
          material={materials["Matte__FFC0C0C0__spec_.003"]}
          position={[2.233, 0.254, -0.017]}
          rotation={[Math.PI / 2, 0.023, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_272.geometry}
          material={materials["Matte__FF161616__spec_.003"]}
          position={[2.233, 0.254, -0.017]}
          rotation={[Math.PI / 2, 0.023, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_274.geometry}
          material={materials["Matte__FF161616__spec_.003"]}
          position={[2.233, 0.254, -0.017]}
          rotation={[Math.PI / 2, 0.023, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_276.geometry}
          material={materials["Matte__FF161616__spec_.003"]}
          position={[2.233, 0.254, -0.017]}
          rotation={[Math.PI / 2, 0.023, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_278.geometry}
          material={materials["Matte__FF161616__spec_.003"]}
          position={[2.233, 0.254, -0.017]}
          rotation={[Math.PI / 2, 0.023, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_280.geometry}
          material={materials["Matte__FF161616__spec_.003"]}
          position={[2.233, 0.254, -0.017]}
          rotation={[Math.PI / 2, 0.023, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_283.geometry}
          material={materials["Matte__FF161616__spec_.003"]}
          position={[2.233, 0.254, -0.017]}
          rotation={[Math.PI / 2, 0.023, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_285.geometry}
          material={materials["Matte__FFB60000__spec_.003"]}
          position={[2.233, 0.254, -0.017]}
          rotation={[Math.PI / 2, 0.023, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_287.geometry}
          material={materials["Matte__FF5B5B5B__spec_.003"]}
          position={[2.233, 0.254, -0.017]}
          rotation={[Math.PI / 2, 0.023, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_290.geometry}
          material={materials["cabos.002"]}
          position={[2.249, 0.289, -0.018]}
          rotation={[Math.PI / 2, 0.027, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_292.geometry}
          material={materials["Matte__FF161616__spec_.003"]}
          position={[2.249, 0.289, -0.018]}
          rotation={[Math.PI / 2, 0.027, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_294.geometry}
          material={materials["Matte__FF8C8C8C__spec_.003"]}
          position={[2.249, 0.289, -0.018]}
          rotation={[Math.PI / 2, 0.027, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_296.geometry}
          material={materials["Matte__FF8C8C8C__spec_.003"]}
          position={[2.233, 0.254, -0.017]}
          rotation={[Math.PI / 2, 0.023, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_298.geometry}
          material={materials["Matte__FF8C8C8C__spec_.003"]}
          position={[2.233, 0.254, -0.017]}
          rotation={[Math.PI / 2, 0.023, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_300.geometry}
          material={materials["Matte__FF171717.003"]}
          position={[2.153, 0.249, -0.017]}
          rotation={[Math.PI / 2, -0.094, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_302.geometry}
          material={materials["Matte__FF171717.003"]}
          position={[2.153, 0.249, -0.017]}
          rotation={[Math.PI / 2, -0.094, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_304.geometry}
          material={materials["Matte__FF171717.003"]}
          position={[2.153, 0.249, -0.017]}
          rotation={[Math.PI / 2, -0.094, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_306.geometry}
          material={materials["Matte__FF171717.003"]}
          position={[2.153, 0.249, -0.017]}
          rotation={[Math.PI / 2, -0.094, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_309.geometry}
          material={materials["Matte__FFFF0000__spec_.003_Vermelha"]}
          position={[2.494, 0.674, 0.199]}
          rotation={[1.577, -0.032, 1.63]}
          scale={[1.002, 0.919, 0.919]}
        />
        <mesh
          geometry={nodes.Object_311.geometry}
          material={materials["Matte__FFCCCCCC.006"]}
          position={[2.494, 0.674, 0.199]}
          rotation={[1.577, -0.032, 1.63]}
          scale={[1.002, 0.919, 0.919]}
        />
        <mesh
          geometry={nodes.Object_313.geometry}
          material={materials["prata_aluminio.002"]}
          position={[2.177, 0.296, -0.017]}
          rotation={[Math.PI / 2, -0.094, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_315.geometry}
          material={materials["Matte__FF6C6C6C__spec_.003"]}
          position={[2.786, 0.437, 0.079]}
          rotation={[1.572, 0.026, 1.511]}
        />
        <mesh
          geometry={nodes.Object_317.geometry}
          material={materials["Matte__FF6C6C6C__spec_.003"]}
          position={[1.965, 0.224, 0.125]}
          rotation={[1.572, 0.023, 1.511]}
        />
        <mesh
          geometry={nodes.Object_320.geometry}
          material={materials["plasicos_brilho.002"]}
          position={[2.225, 0.23, -0.015]}
          rotation={[Math.PI / 2, 0.014, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_322.geometry}
          material={materials.cromo}
          position={[2.225, 0.23, -0.015]}
          rotation={[Math.PI / 2, 0.014, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_324.geometry}
          material={materials.cromo}
          position={[2.225, 0.23, -0.015]}
          rotation={[Math.PI / 2, 0.014, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_326.geometry}
          material={materials.mascara_tanque}
          position={[2.225, 0.23, -0.015]}
          rotation={[Math.PI / 2, 0.014, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_328.geometry}
          material={materials["Matte__FFCCCCCC.007"]}
          position={[2.225, 0.23, -0.015]}
          rotation={[Math.PI / 2, 0.014, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_330.geometry}
          material={materials["Matte__FFD60000__spec_.004"]}
          position={[2.225, 0.23, -0.015]}
          rotation={[Math.PI / 2, 0.014, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_332.geometry}
          material={materials["Matte__FF7C7C7C__spec_.004"]}
          position={[2.225, 0.23, -0.015]}
          rotation={[Math.PI / 2, 0.014, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_334.geometry}
          material={materials["plastico_fosco.002"]}
          position={[2.225, 0.23, -0.015]}
          rotation={[Math.PI / 2, 0.014, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_336.geometry}
          material={materials.Matte__FFA48263}
          position={[2.225, 0.23, -0.015]}
          rotation={[Math.PI / 2, 0.014, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_338.geometry}
          material={materials.cromo}
          position={[2.225, 0.23, -0.015]}
          rotation={[Math.PI / 2, 0.014, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_340.geometry}
          material={materials["plasicos_brilho.002"]}
          position={[2.225, 0.23, -0.015]}
          rotation={[Math.PI / 2, 0.014, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_343.geometry}
          material={materials["Matte__FF5F5F5F__spec_.002"]}
          position={[2.467, 0.822, -0.011]}
          rotation={[Math.PI / 2, -0.303, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_345.geometry}
          material={materials["mascara_tanque.002"]}
          position={[2.467, 0.822, -0.011]}
          rotation={[Math.PI / 2, -0.303, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_348.geometry}
          material={materials["cabos.002"]}
          position={[2.71, 0.431, 0.026]}
          rotation={[Math.PI / 2, -0.002, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_350.geometry}
          material={materials["plastico_fosco.002"]}
          position={[2.71, 0.431, 0.026]}
          rotation={[Math.PI / 2, -0.002, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_352.geometry}
          material={materials["metalico.002"]}
          position={[2.71, 0.431, 0.026]}
          rotation={[Math.PI / 2, -0.002, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_354.geometry}
          material={materials.MATERIAL_TANQUE}
          position={[2.71, 0.431, 0.026]}
          rotation={[Math.PI / 2, -0.002, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_357.geometry}
          material={materials["plastico_fosco.002"]}
          position={[2.802, 0.555, -0.017]}
          rotation={[0, 0, 0.004]}
        />
        <mesh
          geometry={nodes.Object_359.geometry}
          material={materials["cor_moto.002_Vermelha"]}
          position={[2.802, 0.555, -0.017]}
          rotation={[0, 0, 0.004]}
          material-color={photo}
        />
        <mesh
          geometry={nodes.Object_361.geometry}
          material={materials.COURINO}
          position={[1.913, 0.699, -0.013]}
          rotation={[Math.PI / 2, -0.042, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_363.geometry}
          material={materials.COURINO}
          position={[1.647, 0.802, -0.013]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_365.geometry}
          material={materials["plastico_fosco.002"]}
          position={[2.367, 0.806, 0.128]}
          rotation={[1.012, 0.021, 1.57]}
        />
        <mesh
          geometry={nodes.Object_367.geometry}
          material={materials["cor_moto.002_Vermelha"]}
          position={[1.67, 0.763, -0.128]}
          rotation={[Math.PI / 2, -0.156, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_369.geometry}
          material={materials["cor_moto.002_Vermelha"]}
          position={[1.642, 0.773, 0.094]}
          rotation={[Math.PI / 2, -0.138, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_372.geometry}
          material={materials["Matte__FFFF0000__spec_.003_Vermelha"]}
          position={[1.631, 0.778, -0.116]}
          rotation={[Math.PI / 2, -0.156, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_374.geometry}
          material={materials["Matte__FFFFFFFF.005"]}
          position={[1.631, 0.778, -0.116]}
          rotation={[Math.PI / 2, -0.156, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_376.geometry}
          material={materials["Matte__FFFFFFFF.005"]}
          position={[1.682, 0.76, 0.104]}
          rotation={[Math.PI / 2, -0.138, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_379.geometry}
          material={materials["Matte__FF000000__spec_.003"]}
          position={[2.575, 0.909, -0.012]}
          rotation={[Math.PI / 2, -0.057, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_381.geometry}
          material={materials["Matte__FF331400.002"]}
          position={[2.575, 0.909, -0.012]}
          rotation={[Math.PI / 2, -0.057, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_383.geometry}
          material={materials["Matte__FF003300.002"]}
          position={[2.575, 0.909, -0.012]}
          rotation={[Math.PI / 2, -0.057, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_385.geometry}
          material={materials["vehiclelights__spec_FR_.002"]}
          position={[2.575, 0.909, -0.012]}
          rotation={[Math.PI / 2, -0.057, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_387.geometry}
          material={materials.MATERIAL_TANQUE}
          position={[1.957, 0.25, -0.092]}
          rotation={[-Math.PI / 2, -1.134, -Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_389.geometry}
          material={materials["plastico_fosco.002"]}
          position={[2.37, 0.601, 0.108]}
          rotation={[0, 0, -0.313]}
        />
        <mesh
          geometry={nodes.Object_391.geometry}
          material={materials["plastico_fosco.002"]}
          position={[1.337, 0.691, -0.018]}
          rotation={[0, 0, 0.099]}
        />
        <mesh
          geometry={nodes.Object_393.geometry}
          material={materials["plastico_fosco.002"]}
          position={[2.381, 0.731, 0.116]}
          rotation={[0, 0, -0.157]}
        />
        <mesh
          geometry={nodes.Object_396.geometry}
          material={materials["prata_aluminio.002"]}
          position={[2.363, 0.535, 0.036]}
          rotation={[0, 0, -0.371]}
        />
        <mesh
          geometry={nodes.Object_398.geometry}
          material={materials["plastico_fosco.002"]}
          position={[2.363, 0.535, 0.036]}
          rotation={[0, 0, -0.371]}
        />
        <mesh
          geometry={nodes.Object_400.geometry}
          material={materials["MATERIAL_TANQUE.001"]}
          position={[2.108, 0.206, 0.015]}
        />
        <mesh
          geometry={nodes.Object_402.geometry}
          material={materials["plastico_fosco.002"]}
          position={[1.999, 0.563, -0.016]}
        />
        <mesh
          geometry={nodes.Object_404.geometry}
          material={materials["plastico_fosco.002"]}
          position={[2.481, 0.665, 0.081]}
          rotation={[0.016, 0.115, -0.141]}
        />
        <mesh
          geometry={nodes.Object_406.geometry}
          material={materials["preto_metal.002"]}
          position={[1.696, 0.372, 0.181]}
          rotation={[0, 0, 0.664]}
        />
        <mesh
          geometry={nodes.Object_410.geometry}
          material={materials["cabos.002"]}
          position={[2.825, 0.264, 0.017]}
          rotation={[Math.PI / 2, -1.034, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_412.geometry}
          material={materials["plastico_fosco.002"]}
          position={[2.825, 0.264, 0.017]}
          rotation={[Math.PI / 2, -1.034, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_414.geometry}
          material={materials["parafusos.002"]}
          position={[2.825, 0.264, 0.017]}
          rotation={[Math.PI / 2, -1.034, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_416.geometry}
          material={materials.MATERIAL_TANQUE}
          position={[2.825, 0.264, 0.017]}
          rotation={[Math.PI / 2, -1.034, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_418.geometry}
          material={materials.pneu_borracha}
          position={[2.827, 0.266, -0.015]}
          rotation={[Math.PI / 2, -1.034, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_421.geometry}
          material={materials["preto_metal.002"]}
          position={[2.826, 0.262, 0.042]}
          rotation={[Math.PI / 2, -1.224, 0]}
        />
        <mesh
          geometry={nodes.Object_423.geometry}
          material={materials.disco}
          position={[2.826, 0.262, 0.042]}
          rotation={[Math.PI / 2, -1.224, 0]}
        />
        <mesh
          geometry={nodes.Object_426.geometry}
          material={materials["cabos.002"]}
          position={[2.25, 0.309, -0.017]}
          rotation={[Math.PI / 2, -0.018, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_428.geometry}
          material={materials.preto_fosco}
          position={[2.25, 0.309, -0.017]}
          rotation={[Math.PI / 2, -0.018, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_430.geometry}
          material={materials.aluminio}
          position={[2.25, 0.309, -0.017]}
          rotation={[Math.PI / 2, -0.018, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_432.geometry}
          material={materials["parafusos.002"]}
          position={[2.25, 0.309, -0.017]}
          rotation={[Math.PI / 2, -0.018, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_434.geometry}
          material={materials["MATERIAL_TANQUE.001"]}
          position={[2.25, 0.309, -0.017]}
          rotation={[Math.PI / 2, -0.018, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_437.geometry}
          material={materials["plastico_fosco.002"]}
          position={[2.634, 0.814, -0.014]}
          rotation={[Math.PI / 2, 0.061, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_439.geometry}
          material={materials["plastico_fosco.002"]}
          position={[2.634, 0.814, -0.014]}
          rotation={[Math.PI / 2, 0.061, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_441.geometry}
          material={materials.Farol}
          position={[2.634, 0.814, -0.014]}
          rotation={[Math.PI / 2, 0.061, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_443.geometry}
          material={materials["plastico_fosco.002"]}
          position={[2.634, 0.814, -0.014]}
          rotation={[Math.PI / 2, 0.061, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_445.geometry}
          material={materials.translucido_incolor}
          position={[2.634, 0.814, -0.014]}
          rotation={[Math.PI / 2, 0.061, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_447.geometry}
          material={materials.PiscaAlertaCB}
          position={[2.634, 0.814, -0.014]}
          rotation={[Math.PI / 2, 0.061, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_449.geometry}
          material={materials.FarolCB}
          position={[2.634, 0.814, -0.014]}
          rotation={[Math.PI / 2, 0.061, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_452.geometry}
          material={materials["Matte__FFCCCCCC.006"]}
          position={[2.303, 0.25, -0.017]}
          rotation={[Math.PI / 2, 0.015, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_454.geometry}
          material={materials["Matte__FF808080__spec_.003"]}
          position={[2.303, 0.25, -0.017]}
          rotation={[Math.PI / 2, 0.015, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_456.geometry}
          material={materials["plastico_fosco.002"]}
          position={[2.303, 0.25, -0.017]}
          rotation={[Math.PI / 2, 0.015, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_458.geometry}
          material={materials.translucido_incolor}
          position={[2.303, 0.25, -0.017]}
          rotation={[Math.PI / 2, 0.015, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_460.geometry}
          material={materials.PiscaAlertaCB}
          position={[2.303, 0.25, -0.017]}
          rotation={[Math.PI / 2, 0.015, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_462.geometry}
          material={materials["cor_moto.002_Vermelha"]}
          position={[2.615, 0.774, -0.053]}
          rotation={[-0.024, 0.467, 0.052]}
        />
        <mesh
          geometry={nodes.Object_465.geometry}
          material={materials["cor_moto.002_Vermelha"]}
          position={[2.303, 0.734, -0.012]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          geometry={nodes.Object_467.geometry}
          material={materials["plastico_fosco.002"]}
          position={[2.303, 0.734, -0.012]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          geometry={nodes.Object_469.geometry}
          material={materials["plastico_fosco.002"]}
          position={[2.262, 0.622, 0.102]}
          rotation={[Math.PI / 2, 0, 0.073]}
        />
        <mesh
          geometry={nodes.Object_471.geometry}
          material={materials["plastico_fosco.002"]}
          position={[2.176, 0.525, 0.102]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          geometry={nodes.Object_473.geometry}
          material={materials["plastico_fosco.002"]}
          position={[2.007, 0.531, 0.092]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          geometry={nodes.Object_475.geometry}
          material={materials["prata_aluminio.002"]}
          position={[2.077, 0.366, 0.107]}
          rotation={[Math.PI / 2, 0, -0.043]}
        />
        <mesh
          geometry={nodes.Object_477.geometry}
          material={materials.plastico_brilho2}
          position={[1.738, 0.676, 0.104]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          geometry={nodes.Object_479.geometry}
          material={materials["plastico_fosco.002"]}
          position={[2.365, 0.242, -0.012]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          geometry={nodes.Object_481.geometry}
          material={materials["plastico_fosco.002"]}
          position={[2.701, 0.837, -0.013]}
          rotation={[0, 0, -0.883]}
        />
        <mesh
          geometry={nodes.Object_484.geometry}
          material={materials.plastico_brilho2}
          position={[2.536, 0.69, 0.173]}
          rotation={[Math.PI / 2, 0, -0.037]}
        />
        <mesh
          geometry={nodes.Object_486.geometry}
          material={materials["plastico_fosco.002"]}
          position={[2.536, 0.69, 0.173]}
          rotation={[Math.PI / 2, 0, -0.037]}
        />
        <mesh
          geometry={nodes.Object_489.geometry}
          material={materials["plastico_fosco.002"]}
          position={[1.544, 0.749, -0.016]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          geometry={nodes.Object_493.geometry}
          material={materials["plastico_fosco.002"]}
          position={[2.717, 0.797, 0.079]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          geometry={nodes.Object_495.geometry}
          material={materials.translucido_incolor}
          position={[2.784, 0.741, -0.014]}
          rotation={[0, 0, -1.571]}
        />
        <mesh
          geometry={nodes.Object_497.geometry}
          material={materials["plastico_fosco.002"]}
          position={[2.703, 0.689, -0.014]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          geometry={nodes.Object_500.geometry}
          material={materials.LanternaCB}
          position={[1.576, 0.721, -0.016]}
          rotation={[Math.PI / 2, -0.195, 0]}
        />
        <mesh
          geometry={nodes.Object_502.geometry}
          material={materials.fundo_farol}
          position={[1.576, 0.721, -0.016]}
          rotation={[Math.PI / 2, -0.195, 0]}
        />
        <mesh
          geometry={nodes.Object_504.geometry}
          material={materials["plastico_fosco.002"]}
          position={[2.02, 0.539, 0.095]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          geometry={nodes.Object_507.geometry}
          material={materials["plastico_fosco.002"]}
          position={[1.812, 0.378, 0.158]}
        />
        <mesh
          geometry={nodes.Object_509.geometry}
          material={materials["prata_aluminio.002"]}
          position={[1.812, 0.378, 0.158]}
        />
        <mesh
          geometry={nodes.Object_512.geometry}
          material={materials["plastico_fosco.002"]}
          position={[2.406, 1.077, 0.312]}
          rotation={[Math.PI / 2, -0.143, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_517.geometry}
          material={materials.MATERIAL_TANQUE}
          position={[2.339, 0.876, -0.013]}
          rotation={[Math.PI / 2, 0.068, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_519.geometry}
          material={materials.aluminio}
          position={[2.339, 0.876, -0.013]}
          rotation={[Math.PI / 2, 0.068, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_521.geometry}
          material={materials["Matte__FFFF0000__spec_.003_Vermelha"]}
          position={[2.339, 0.876, -0.013]}
          rotation={[Math.PI / 2, 0.068, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_525.geometry}
          material={materials["Placa-Mercosul-Moto.003"]}
          position={[1.28, 0.563, -0.012]}
          rotation={[Math.PI / 2, -0.483, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_527.geometry}
          material={materials["motor.003"]}
          position={[1.28, 0.563, -0.012]}
          rotation={[Math.PI / 2, -0.483, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_530.geometry}
          material={materials["sdsd.002"]}
          position={[2.229, 0.254, -0.017]}
          rotation={[Math.PI / 2, 0.037, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_532.geometry}
          material={materials["Matte__FF6C6C6C__spec_.003"]}
          position={[2.229, 0.254, -0.017]}
          rotation={[Math.PI / 2, 0.037, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_534.geometry}
          material={materials["plastico_fosco.002"]}
          position={[2.229, 0.254, -0.017]}
          rotation={[Math.PI / 2, 0.037, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_536.geometry}
          material={materials["metalico.002"]}
          position={[2.229, 0.254, -0.017]}
          rotation={[Math.PI / 2, 0.037, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_538.geometry}
          material={materials["Matte__FFCCCCCC__spec_.003"]}
          position={[2.229, 0.254, -0.017]}
          rotation={[Math.PI / 2, 0.037, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_540.geometry}
          material={materials["Matte__FFE9E9E9__spec_.003"]}
          position={[2.229, 0.254, -0.017]}
          rotation={[Math.PI / 2, 0.037, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_542.geometry}
          material={materials["Matte__FF020202__spec_.003"]}
          position={[2.229, 0.254, -0.017]}
          rotation={[Math.PI / 2, 0.037, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_544.geometry}
          material={materials["Matte__FF332B29__spec_.003"]}
          position={[2.229, 0.254, -0.017]}
          rotation={[Math.PI / 2, 0.037, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_546.geometry}
          material={materials["Matte__FF291F15__spec_.003"]}
          position={[2.229, 0.254, -0.017]}
          rotation={[Math.PI / 2, 0.037, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_548.geometry}
          material={materials["Matte__FF4A4A4A__spec_.003"]}
          position={[2.229, 0.254, -0.017]}
          rotation={[Math.PI / 2, 0.037, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_550.geometry}
          material={materials.MATERIAL_TANQUE}
          position={[2.229, 0.254, -0.017]}
          rotation={[Math.PI / 2, 0.037, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_552.geometry}
          material={materials["plastico_fosco.002"]}
          position={[2.232, 0.254, -0.017]}
          rotation={[Math.PI / 2, 0.026, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_554.geometry}
          material={materials["corrente.002"]}
          position={[2.226, 0.252, -0.017]}
          rotation={[Math.PI / 2, 0.037, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_558.geometry}
          material={materials["cabos.002"]}
          position={[1.561, 0.296, -0.017]}
          rotation={[Math.PI / 2, -0.579, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_560.geometry}
          material={materials.MATERIAL_TANQUE}
          position={[1.561, 0.296, -0.017]}
          rotation={[Math.PI / 2, -0.579, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_562.geometry}
          material={materials["metalico.002"]}
          position={[1.561, 0.296, -0.017]}
          rotation={[Math.PI / 2, -0.579, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_564.geometry}
          material={materials.disco}
          position={[1.561, 0.296, -0.017]}
          rotation={[Math.PI / 2, -0.579, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_566.geometry}
          material={materials.pneu_borracha}
          position={[1.561, 0.296, -0.017]}
          rotation={[Math.PI / 2, 0.203, Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Object_250.geometry}
          material={materials["Matte__FFCCCCCC.006"]}
          position={[2.233, 0.254, -0.017]}
          rotation={[Math.PI / 2, 0.023, Math.PI / 2]}
        />
      </group>
    );
  }

  function Box() {
    return (
      <mesh>
        <boxBufferGeometry attach="geometry" />
        <meshLambertMaterial attach="material" color={photo} />
      </mesh>
    );
  }
  return (
    <>
      <div className="canvas-container">
        <Canvas>
          <Suspense fallback={null}>
            <ambientLight />
            <spotLight position={0.9} angle={0.15} penumbra={1} castShadow />
            <Model />
          </Suspense>
          <OrbitControls enableRotate={true} />
        </Canvas>
      </div>
    </>
  );
};
export default Photo;
