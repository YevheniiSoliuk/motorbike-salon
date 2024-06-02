import { useEffect, useRef } from 'react';
import type { ModelViewerElement } from '@google/model-viewer/lib/model-viewer';
import '@google/model-viewer/dist/model-viewer';
import { ProductAddition } from '../api/products';

type ModelProps = {
  modelUrl: string;
  color: ProductAddition | null;
  selectedMaterial: ProductAddition | null;
  materials: ProductAddition[];
};

const Model = ({
  modelUrl,
  color,
  selectedMaterial,
  materials,
}: ModelProps) => {
  const modelRef = useRef<ModelViewerElement>();

  useEffect(() => {
    const modelViewer: any = document.querySelector('model-viewer');

    if (modelRef.current && modelRef.current?.model) {
      if (color) {
        modelViewer.model.materials[
          color.modelMaterialIndex
        ].pbrMetallicRoughness.baseColorTexture.setTexture(null);
        modelViewer.model.materials[
          color.modelMaterialIndex
        ].pbrMetallicRoughness.setBaseColorFactor(color.rgba);
      }

      if (selectedMaterial) {
        modelViewer.model.materials[
          selectedMaterial.modelMaterialIndex
        ].pbrMetallicRoughness.setBaseColorFactor([0, 0, 0, 1]);

        materials.forEach((material) => {
          if (material.id !== selectedMaterial.id) {
            modelViewer.model.materials[
              material.modelMaterialIndex
            ].pbrMetallicRoughness.setBaseColorFactor([0, 0, 0, -1]);
          }
        });
      }
    }

    function onModelLoad() {
      if (modelRef.current && modelRef.current?.model) {
        if (color) {
          modelViewer.model.materials[
            color.modelMaterialIndex
          ].pbrMetallicRoughness.baseColorTexture.setTexture(null);
          modelViewer.model.materials[
            color.modelMaterialIndex
          ].pbrMetallicRoughness.setBaseColorFactor(color.rgba);
        }

        if (selectedMaterial) {
          modelViewer.model.materials[
            selectedMaterial.modelMaterialIndex
          ].pbrMetallicRoughness.setBaseColorFactor([0, 0, 0, 1]);
        }
      }
    }

    modelViewer.addEventListener('load', onModelLoad);

    return () => {
      modelViewer.removeEventListener('load', onModelLoad);
    };
  }, [color, selectedMaterial, materials]);

  return (
    <div>
      <model-viewer
        style={{ width: '900px', height: '670px' }}
        touch-action='pan-y'
        tone-mapping='aces'
        id='first'
        src={modelUrl}
        seamless-poster
        environment-image='neutral'
        exposure={1.0}
        interaction-prompt-threshold={0}
        shadow-intensity={1}
        ar
        autoplay
        ar-modes='webxr scene-viewer quick-look'
        auto-rotate
        camera-controls
        camera-orbit='0deg 90deg 0deg 8.37364m'
        alt='3D model'
        ref={modelRef}
      ></model-viewer>
    </div>
  );
};

export default Model;
