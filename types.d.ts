export type Blur = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

export interface LoremPicsumProps {
  /**
   * The base URL
   */
  baseUrl?: String;
  /**
   * Specify an image by ID
   */
  id?: Number;
  /**
   * Random image
   */
  random?: Boolean;
  /**
   * Image height
   */
  height?: Number;
  /**
   * Image width
   */
  width?: Number;
  /**
   * Make the image grayscale
   */
  grayscale?: Boolean;
  /**
   * Blur property - between 1 and 10
   */
  blur?: Blur;
  /**
   * Force multiple images on the same page to be random
   */
  forceRandom?: Number;
}
