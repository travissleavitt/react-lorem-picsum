import React from 'react';
import { getBaseUrl, getDimensions, getOptions } from './utils';

export type Blur = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
export type FileExtension = 'jpg' | 'webp';

export interface LoremPicsumProps {
  /**
   * Specify an image by ID
   */
  id?: number;
  /**
   * Random image
   */
  random?: boolean;
  /**
   * Image height
   */
  height?: number;
  /**
   * Image width
   */
  width?: number;
  /**
   * Make the image grayscale
   */
  grayscale?: boolean;
  /**
   * Blur property - between 1 and 10
   */
  blur?: Blur;
  /**
   * Force identical images (height, width) on the same page to be random
   */
  forceRandom?: number;
  /**
   * File extension
   */
  extension?: FileExtension;
  /**
   * Calculate the height automatically based on an aspect ratio
   */
  ratio?: string;
}

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
    ratio,
    ...rest
  } = props;
  const url = [
    getBaseUrl({ id, random, width, height, forceRandom }),
    getDimensions({ width, height, ratio }),
    getOptions({ grayscale, blur, forceRandom }),
    extension ? `.${extension}` : '',
  ];

  return <img src={url.join('')} {...rest} />;
};

export default LoremPicsum;
