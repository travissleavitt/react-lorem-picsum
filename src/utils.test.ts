// @ts-nocheck
import { getBaseUrl, getDimensions, getOptions } from './utils';

describe.each([
  [
    { id: 1, random: false, forceRandom: false },
    'https://picsum.photos/id/1',
    'returns a url with id',
  ],
  [{ random: true }, 'https://picsum.photos/seed/picsum', 'returns a random url'],
  [{ forceRandom: true }, 'https://picsum.photos', 'returns url for forceRandom'],
  [{ id: 5, forceRandom: true }, 'https://picsum.photos', 'ignores id with forceRandom'],
  [{ id: 5, random: true }, 'https://picsum.photos/id/5', 'ignores random if id present'],
  [
    { id: 5, random: true, forceRandom: true },
    'https://picsum.photos',
    'ignores id and random if forceRandom present',
  ],
  [{}, 'https://picsum.photos', 'returns default url if params empty'],
  [undefined, 'https://picsum.photos', 'returns default url if params undefined'],
  [null, 'https://picsum.photos', 'returns default url if params null'],
])('getBaseUrl', (params, expectation, label) => {
  it(label, () => {
    expect(getBaseUrl(params)).toBe(expectation);
  });
});

describe.each([
  [{ width: 200, height: 100 }, '/200/100', 'returns width and height'],
  [{ width: 200 }, '/200/200', 'returns default height if ommitted'],
])('getDimensions', (params, expectation, label) => {
  it(label, () => {
    expect(getDimensions(params)).toBe(expectation);
  });
});

describe.each([
  [{ grayscale: true }, '?grayscale', 'returns grayscale param'],
  [{ blur: 2 }, '?blur=2', 'returns blur param'],
  [{ forceRandom: 1 }, '?random=1', 'returns forceRandom param'],
  [
    { forceRandom: 1, blur: 10, grayscale: true },
    '?random=1&blur=10&grayscale',
    'returns all prams',
  ],
])('getOptions', (params, expectation, label) => {
  it(label, () => {
    expect(getOptions(params)).toBe(expectation);
  });
});
