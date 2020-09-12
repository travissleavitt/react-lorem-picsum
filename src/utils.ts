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
  const { id, random = false, forceRandom } = options;
  const baseUrl = 'https://picsum.photos';

  if (forceRandom) {
    return baseUrl;
  }

  if (id) {
    return `${baseUrl}/id/${id}`;
  }

  if (random) {
    return `${baseUrl}/seed/picsum`;
  }

  return baseUrl;
};

export const getDimensions = ({ width, height }: Partial<LoremPicsumProps>): String => {
  return height ? `/${width}/${height}` : `/${width}`;
};

export const getOptions = ({ grayscale, blur, forceRandom }: Partial<LoremPicsumProps>): String => {
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
