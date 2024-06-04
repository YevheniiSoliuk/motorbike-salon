import React, { useState, useEffect } from 'react';
import Select from './Select';
import { getModelById } from '../api';
import { AxiosResponse } from 'axios';
import { ProductModel } from './types';

const ModelMaterialSelect = (props) => {
  const [modelMaterials, setModelMaterials] = useState<any[]>([]);
  const [selectedMaterial, setSelectedMaterial] = useState<any | null>(null);
  const [modelFileUrl, setModelFileUrl] = useState('');
  const [isModalLoads, setIsModalLoads] = useState(false);

  useEffect(() => {
    (async () => {
      await import('@google/model-viewer/dist/model-viewer.js');
    })();
  }, []);

  useEffect(() => {
    const modelViewer: any = document.querySelector('model-viewer');

    function onModelLoad() {
      setIsModalLoads(false);
      setModelMaterials(
        modelViewer.model.materials.map((material) => ({
          ...material,
          name: `${material.index} - ${material.name}`,
        })),
      );

      if (props.record.params.modelMaterialIndex && !selectedMaterial) {
        const material =
          modelViewer.model.materials[props.record.params.modelMaterialIndex];
        setSelectedMaterial({
          ...material,
          value: material.index,
          label: `${material.index} - ${material.name}`,
        });
      }
    }

    modelViewer.addEventListener('load', onModelLoad);

    return () => {
      modelViewer.removeEventListener('load', onModelLoad);
    };
  }, []);

  useEffect(() => {
    if (!props.record.params['productModel.id']) {
      return;
    }

    (async () => {
      const { data: productModel }: AxiosResponse<ProductModel> =
        await getModelById(props.record.params['productModel.id']);
      setModelFileUrl(productModel.model.url);
      setIsModalLoads(true);

      if (selectedMaterial) {
        setSelectedMaterial(null);
        props.record.params.modelMaterialIndex = null;
      }
    })();
  }, [props]);

  const onMaterialSelect = (material: any) => {
    setSelectedMaterial(material);
    props.record.params.modelMaterialIndex = material.value;
  };

  return (
    <>
      <Select
        values={modelMaterials}
        value={selectedMaterial}
        setValue={onMaterialSelect}
        fields={['name']}
        required={false}
        placeholder={''}
        label={'Model Material'}
        isLoading={isModalLoads}
        error={props.record.errors.modelMaterial?.message ?? ''}
        hasError={!!props.record.errors.modelMaterial}
      />
      <div>
        <model-viewer
          style={{ width: 0, height: 0 }}
          // touch-action='pan-y'
          // tone-mapping='aces'
          // id='first'
          src={modelFileUrl}
          // seamless-poster
          // environment-image='neutral'
          // exposure={1.0}
          // interaction-prompt-threshold={0}
          // shadow-intensity={1}
          // ar
          // autoplay
          // ar-modes='webxr scene-viewer quick-look'
          // auto-rotate
          // camera-controls
          // camera-orbit='0deg 90deg 0deg 8.37364m'
          // alt='3D model'
        ></model-viewer>
      </div>
    </>
  );
};

export default ModelMaterialSelect;
