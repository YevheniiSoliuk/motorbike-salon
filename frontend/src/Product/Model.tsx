import { useEffect, useRef } from 'react';
import type { ModelViewerElement } from '@google/model-viewer/lib/model-viewer';
import '@google/model-viewer/dist/model-viewer';
type ModelProps = {
  modelUrl: string;
  color: Array<number> | Object;
  option1: Array<number>;
};

const Model = ({ modelUrl, color, option1 }: ModelProps) => {
  const modelRef: any = useRef<ModelViewerElement>();
  useEffect(() => {
    const modelViewer: any = document.querySelector('model-viewer');
    if (
      modelViewer.model &&
      modelViewer.model.materials[18] &&
      !('optionNumber' in color)
    ) {
      modelViewer.model.materials[14].pbrMetallicRoughness.baseColorTexture.setTexture(
        null,
      );
      modelViewer.model.materials[14].pbrMetallicRoughness.setBaseColorFactor(
        color,
      );
    } else {
      if ('optionNumber' in color) {
        if (color.optionNumber == 1) {
          modelViewer.model.materials[16].pbrMetallicRoughness.setBaseColorFactor(
            [0, 0, 0, 1],
          );

          modelViewer.model.materials[20].pbrMetallicRoughness.setBaseColorFactor(
            [0, 0, 0, -1],
          );
        } else if (color.optionNumber == 2) {
          modelViewer.model.materials[16].pbrMetallicRoughness.setBaseColorFactor(
            [0, 0, 0, -1],
          );

          modelViewer.model.materials[20].pbrMetallicRoughness.setBaseColorFactor(
            [0, 0, 0, 1],
          );
        }
      }
    }

    function onModelLoad() {
      modelViewer.model.materials[14].pbrMetallicRoughness.baseColorTexture.setTexture(
        null,
      );
      modelViewer.model.materials[14].pbrMetallicRoughness.setBaseColorFactor(
        color,
      );
    }
    modelViewer.addEventListener('load', onModelLoad);

    return () => {
      modelViewer.removeEventListener('load', onModelLoad);
    };
  }, [color]);
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
