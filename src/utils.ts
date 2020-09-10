import { Blur } from '../types';

const LOREM_PICSUM_ROOT_URL = 'https://picsum.photos';

export const getBaseUrl = ({ id, random }: { id?: Number; random?: Boolean }): String => {
  if (id) {
    return `${LOREM_PICSUM_ROOT_URL}/id/${id}`;
  }

  if (random) {
    return `${LOREM_PICSUM_ROOT_URL}/seed/picsum`;
  }

  return LOREM_PICSUM_ROOT_URL;
};

export const getDimensions = (width: Number, height: Number): String => {
  if (width && !height) {
    return `/${width}`;
  }

  return `/${width}/${height}`;
};

type Options = {
  grayscale?: Boolean;
  blur?: Blur;
  forceRandom?: Number;
};

export const getOptions = ({ grayscale, blur, forceRandom }: Options): String => {
  const queryString = [];

  if (grayscale) {
    queryString.push('grayscale');
  }

  if (forceRandom) {
    queryString.push(`random=${forceRandom}`);
  }

  if (blur) {
    queryString.push(`blur=${blur}`);
  }

  if (queryString.length === 0) {
    return '';
  }

  return `?${queryString.join('&')}`;
};
