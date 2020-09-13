import { LoremPicsumProps, RandomParam } from './LoremPicsum';

/**
 * URL structures include:
 *
 * https://picsum.photos
 * https://picsum.photos/id/{id}
 * https://picsum.photos/seed/picsum
 *
 */
export const getBaseUrl = (id: number | null, random: RandomParam): String => {
  const baseUrl = 'https://picsum.photos';

  if (random) {
    return baseUrl;
  }

  if (id) {
    return `${baseUrl}/id/${id}`;
  }

  return `${baseUrl}/seed/picsum`;
};

export const getDimensions = (width: number, height: number, ratio: string | null): String => {
  if (ratio) {
    const [ratioWidth, ratioHeight] = ratio.split(':');
    const percentage = parseInt(ratioHeight, 10) / parseInt(ratioWidth, 10);

    return isNaN(percentage)
      ? `/${width}/${height}`
      : `/${width}/${Math.floor(width * percentage)}`;
  }

  return `/${width}/${height}`;
};

type ReactLoremPicsumCounter = {
  [key: string]: number;
};

// Counters for cache busting
let reactLoremPicsumCounters: ReactLoremPicsumCounter = {};

const getRandomValue = (random: RandomParam, width: number, height: number): string => {
  if (random === true) {
    const key = `${width}${height}`;

    if (!reactLoremPicsumCounters[key]) {
      reactLoremPicsumCounters[key] = 0;
    }

    reactLoremPicsumCounters[key] = reactLoremPicsumCounters[key] + 1;

    return String(reactLoremPicsumCounters[key]);
  }

  return String(random);
};

const makeUrl = (params: LoremPicsumProps) => {
  const { id = null, random = false, width, height, blur, ratio = null, grayscale } = params;
  const imageHeight = height || width;
  const baseUrl = getBaseUrl(id, random);
  const dimensions = getDimensions(width, imageHeight, ratio);
  const randomValue = getRandomValue(random, width, imageHeight);
  const options = [];

  if (blur) {
    options.push(`blur=${blur}`);
  }

  if (random) {
    options.push(`random=${randomValue}`);
  }

  if (grayscale) {
    options.push('grayscale');
  }

  const optionsString = options.length > 0 ? `?${options.join('&')}` : '';

  return `${baseUrl}${dimensions}${optionsString}`;
};

// Used for testing
export const resetCounters = () => {
  reactLoremPicsumCounters = {};
};

export default makeUrl;
