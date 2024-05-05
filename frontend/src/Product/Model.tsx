import { useEffect, useRef } from 'react';
import type { ModelViewerElement } from '@google/model-viewer/lib/model-viewer';
import '@google/model-viewer/dist/model-viewer';
type ModelProps = {
  modelUrl: string;
  color: Array<number>;
};

const Model = ({ modelUrl, color }: ModelProps) => {
  console.log(modelUrl);
  const modelRef: any = useRef<ModelViewerElement>();
  useEffect(() => {
    const modelViewer: any = document.querySelector('model-viewer');
    if (modelViewer.model && modelViewer.model.materials[18]) {
      modelViewer.model.materials[18].pbrMetallicRoughness.baseColorTexture.setTexture(
        null,
      );
      modelViewer.model.materials[18].pbrMetallicRoughness.setBaseColorFactor(
        color,
      );
    }
    function onModelLoad() {
      modelViewer.model.materials[18].pbrMetallicRoughness.baseColorTexture.setTexture(
        null,
      );
      modelViewer.model.materials[18].pbrMetallicRoughness.setBaseColorFactor(
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
        style={{ width: '1000px', height: '700px' }}
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
