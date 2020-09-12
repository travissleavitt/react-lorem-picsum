import React from 'react';
import { LoremPicsumProps } from '../types';
import { getBaseUrl, getDimensions, getOptions } from './utils';

const LoremPicsum = (props: LoremPicsumProps) => {
  const {
    id,
    random = true,
    width = 100,
    height = width,
    grayscale = false,
    blur,
    forceRandom,
    extension,
    ...rest
  } = props;
  const url = [
    getBaseUrl({ id, random, width, height, forceRandom }),
    getDimensions({ width, height }),
    getOptions({ grayscale, blur, forceRandom }),
    extension ? `.${extension}` : '',
  ];

  return <img src={url.join('')} {...rest} />;
};

export default LoremPicsum;
