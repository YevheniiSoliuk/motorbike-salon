import React, { useState, useMemo, useEffect } from 'react';
import { UIInfoContainer } from './styles';
import { UIHContainer, UIHelperText, UILabel, UIVContainer } from '../styles';
import { ModelTexture } from '../types';

const MAX_COLOR_AMOUNT = 255;

const ColorPicker = (props) => {
  const [color, setColor] = useState('');

  const hexToSrgb = (hex) => {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16),
        }
      : null;
  };

  function rgbToHex(r, g, b) {
    return '#' + ((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1);
  }

  useEffect(() => {
    const r = props.record.params['rgba.0'] * MAX_COLOR_AMOUNT;
    const g = props.record.params['rgba.1'] * MAX_COLOR_AMOUNT;
    const b = props.record.params['rgba.2'] * MAX_COLOR_AMOUNT;
    const hex = rgbToHex(r, g, b);
    setColor(hex);
  }, []);

  const onColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColor(e.target.value);
    const rgb = hexToSrgb(e.target.value);

    props.record.params['rgba.0'] = rgb.r / MAX_COLOR_AMOUNT;
    props.record.params['rgba.1'] = rgb.g / MAX_COLOR_AMOUNT;
    props.record.params['rgba.2'] = rgb.b / MAX_COLOR_AMOUNT;
    props.record.params['rgba.3'] = 1;
  };

  const hasError = useMemo(() => {
    return (
      props.record.errors['rgba.0'] &&
      props.record.errors['rgba.1'] &&
      props.record.errors['rgba.2'] &&
      props.record.errors['rgba.3']
    );
  }, [props]);

  if (props.record.params.modelTextureType !== ModelTexture.BaseColor) {
    return;
  }

  return (
    <UIVContainer>
      <UILabel id={'material-color'} $error={hasError}>
        Material color
      </UILabel>
      <UIHContainer>
        <input
          id='colorpicker'
          type='color'
          name='colorpicker'
          value={color}
          onChange={onColorChange}
        />
        <UIInfoContainer>
          Selected color: {color ?? 'None color selected'}
        </UIInfoContainer>
      </UIHContainer>
      <UIHelperText id={`error-material-color`}>
        {props.record.errors['rgba.0']?.message ?? ''}
      </UIHelperText>
    </UIVContainer>
  );
};

export default ColorPicker;
