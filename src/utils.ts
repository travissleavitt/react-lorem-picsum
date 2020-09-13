import { LoremPicsumProps } from './LoremPicsum';

/**
 * URL structures include:
 *
 * https://picsum.photos
 * https://picsum.photos/id/{id}
 * https://picsum.photos/seed/picsum
 *
 */
export const getBaseUrl = (options: Partial<LoremPicsumProps>): String => {
  const baseUrl = 'https://picsum.photos';

  if (!options) {
    return baseUrl;
  }

  if (options.forceRandom) {
    return baseUrl;
  }

  if (options.id) {
    return `${baseUrl}/id/${options.id}`;
  }

  if (options.random) {
    return `${baseUrl}/seed/picsum`;
  }

  return baseUrl;
};

export const getDimensions = ({
  width = 100,
  height,
  ratio,
}: Partial<LoremPicsumProps>): String => {
  const imageHeight = height || width;

  if (ratio) {
    const [rWidth, rHeight] = ratio.split(':');
    const perc = parseInt(rHeight, 10) / parseInt(rWidth, 10);

    return isNaN(perc) ? `/${width}/${imageHeight}` : `/${width}/${Math.floor(width * perc)}`;
  }

  return `/${width}/${imageHeight}`;
};

export const getOptions = ({ grayscale, blur, forceRandom }: Partial<LoremPicsumProps>): String => {
  const queryString = [];

  if (forceRandom) {
    queryString.push(`random=${forceRandom}`);
  }

  if (blur) {
    queryString.push(`blur=${blur}`);
  }

  if (grayscale) {
    queryString.push('grayscale');
  }

  if (queryString.length === 0) {
    return '';
  }

  return `?${queryString.join('&')}`;
};
