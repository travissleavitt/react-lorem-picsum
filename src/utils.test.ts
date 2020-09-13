// @ts-nocheck
import makeUrl, { getBaseUrl, getDimensions, resetCache } from './utils';

describe.each([
  [1, false, 'https://picsum.photos/id/1', 'returns a url with id'],
  [undefined, false, 'https://picsum.photos/seed/picsum', 'returns seed url'],
  [3, 2, 'https://picsum.photos', 'returns base url if random is number'],
  [4, 'random', 'https://picsum.photos', 'returns base url if random is string'],
  [true, true, 'https://picsum.photos', 'returns base url if random is boolean'],
  ,
])('getBaseUrl', (id, random, expectation, label) => {
  it(label, () => {
    expect(getBaseUrl(id, random)).toBe(expectation);
  });
});

describe.each([
  [200, 100, undefined, '/200/100', 'returns width and height'],
  [800, 450, '16:9', '/800/450', 'returns correct aspect ratio'],
  [1600, 1600, '53:13', '/1600/392', 'returns correct aspect ratio with uneven ratio'],
  [789, 789, 'ff', '/789/789', 'returns width when ratio is not a valid number'],
  [1600, 1600, null, '/1600/1600', 'returns width when ratio is null'],
  [500, 500, '4454', '/500/500', 'returns width when ratio is not a valid number'],
])('getDimensions', (width, height, ratio, expectation, label) => {
  it(label, () => {
    expect(getDimensions(width, height, ratio)).toBe(expectation);
  });
});

describe('makeUrl', () => {
  it.each([
    [
      'return url given id and dimensions',
      { id: 1, width: 400, height: 200 },
      'https://picsum.photos/id/1/400/200',
    ],
    [
      'return seed url given dimensions',
      { width: 400, height: 200 },
      'https://picsum.photos/seed/picsum/400/200',
    ],
    [
      'return seed url with default height',
      { width: 400 },
      'https://picsum.photos/seed/picsum/400/400',
    ],
    [
      'return user-specified random valued',
      { width: 400, height: 200, random: 'test' },
      'https://picsum.photos/400/200?random=test',
    ],
    [
      'return url with grayscale param',
      { id: 5, width: 400, height: 200, grayscale: true },
      'https://picsum.photos/id/5/400/200?grayscale',
    ],
    [
      'return url with blur and grayscale',
      { id: 5, width: 400, height: 200, grayscale: true, blur: 4 },
      'https://picsum.photos/id/5/400/200?blur=4&grayscale',
    ],
    [
      'return url with blur and grayscale',
      { width: 400, height: 200, grayscale: true, blur: 4, random: 'test' },
      'https://picsum.photos/400/200?blur=4&random=test&grayscale',
    ],
    [
      'return user-specified random valued',
      { width: 1600, ratio: '16:9' },
      'https://picsum.photos/seed/picsum/1600/900',
    ],
  ])('%s', (label, params, expectation) => {
    expect(makeUrl(params)).toBe(expectation);
  });

  it.each([
    [
      'return url with counter of 1',
      { width: 400, height: 200, random: true },
      'https://picsum.photos/400/200?random=1',
    ],
    [
      'return url with counter of 2',
      { width: 400, height: 200, random: true },
      'https://picsum.photos/400/200?random=2',
    ],
    [
      'return url with counter of 3',
      { width: 400, height: 200, random: true },
      'https://picsum.photos/400/200?random=3',
    ],
    [
      'return url with counter of 1',
      { width: 400, height: 400, random: true },
      'https://picsum.photos/400/400?random=1',
    ],
  ])('%s', (label, params, expectation) => {
    expect(makeUrl(params)).toBe(expectation);
  });

  afterAll(() => {
    resetCache();
  });
});
