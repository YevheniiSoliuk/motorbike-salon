import { useRef } from 'react';
import type { ModelViewerElement } from '@google/model-viewer/lib/model-viewer';
import '@google/model-viewer/dist/model-viewer';
type ModelProps = {
  modelUrl: string;
};

const Model = ({ modelUrl }: ModelProps) => {
  const modelRef = useRef<ModelViewerElement>();
  console.log(modelRef.current);

  return (
    <div>
      <model-viewer
        style={{ width: '100%', height: '100%' }}
        touch-action='pan-y'
        tone-mapping='aces'
        id='first'
        src={'/assets/scene.glb'}
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
