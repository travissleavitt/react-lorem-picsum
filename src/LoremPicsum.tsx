import React from 'react';
import makeUrl from './utils';

export type Blur = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
export type FileExtension = 'jpg' | 'webp';
export type RandomParam = number | string | boolean;

export interface LoremPicsumProps {
  /**
   * Specify an image by ID
   */
  id?: number;
  /**
   * Image height
   */
  height?: number;
  /**
   * Image width
   */
  width: number;
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
  random?: RandomParam;
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
    random,
    width,
    height = width,
    grayscale = false,
    blur,
    extension,
    ratio,
    ...rest
  } = props;

  return (
    <img
      src={makeUrl({ id, random, width, height, grayscale, blur, extension, ratio })}
      {...rest}
    />
  );
};

export default LoremPicsum;
