import React from 'react';
import { LoremPicsumProps } from '../types';
import { getBaseUrl, getDimensions, getOptions } from './utils';

const LoremPicsum = (props: LoremPicsumProps) => {
  const {
    baseUrl = 'https://picsum.photos',
    id,
    random = true,
    width = 100,
    height = width,
    grayscale = false,
    blur,
    forceRandom,
    ...rest
  } = props;

  return (
    <img
      src={`${getBaseUrl({ id, random })}${getDimensions(width, height)}${getOptions({
        grayscale,
        forceRandom,
        blur,
      })}`}
      {...rest}
    />
  );
};

export default LoremPicsum;
