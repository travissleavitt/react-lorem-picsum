# React Lorem Picsum

A simple React wrapper around [Lorem Picsum](https://picsum.photos/).

## Install

#### NPM

```
 npm install react-lorem-picsum
```

#### Yarn

```
 yarn add react-lorem-picsum
```

## How to Use

```js
import { LoremPicsum } from "react-lorem-picsum";

// Specify ID
// https://picsum.photos/id/4/300/300
<LoremPicsum id={4} width={300} height={300} />

// Random image
// https://picsum.photos/seed/picsum/800/450
<LoremPicsum width={800} height={450} />

// Grayscale
// https://picsum.photos/seed/picsum/800/450?grayscale
<LoremPicsum width={800} height={450} grayscale />

// Blur
// https://picsum.photos/seed/picsum/800/450?blur=4
<LoremPicsum width={800} height={450} blur={4} />

// Omitting height will default it to the width
// https://picsum.photos/seed/picsum/800/800
<LoremPicsum width={800} />
```

### Force Random

To force random images of the same size provide a number. Please note specifying an `id` will not work when `forceRandom` is present.

```js
import { LoremPicsum } from "react-lorem-picsum";

// https://picsum.photos/100/100?random=1
<LoremPicsum width={100} height={100} forceRandom={1} />

// https://picsum.photos/100/100?random=2
<LoremPicsum width={100} height={100} forceRandom={2} />
```

### Aspect Ratio

If you are working with ratios you can provide one via the `ratio` prop. This will calculate the correct height given the width.

Please note `Math.floor` is used for uneven calculations.

```js
import { LoremPicsum } from "react-lorem-picsum";

// https://picsum.photos/800/450
<LoremPicsum width={800} ratio="16:9" />

// https://picsum.photos/800/640
<LoremPicsum width={800} ratio="5:4" />

// https://picsum.photos/1600/392
<LoremPicsum width={1600} ratio="53:13" />
```

## Props

| Name      | Type    | Default     | Description                                                                                                       |
| --------- | ------- | ----------- | ----------------------------------------------------------------------------------------------------------------- |
| id        | number  | `undefined` | Image ID. Please note this prop overrides `random`                                                                |
| random    | boolean | `true`      | Choose a random image.                                                                                            |
| width     | number  | `100`       | Image width                                                                                                       |
| height    | number  | `width`     | Image height                                                                                                      |
| grayscale | boolean | `false`     | Render image in grayscale                                                                                         |
| blur      | number  | `undefined` | Add blur to image. Must be a number between 1-10                                                                  |
| extension | string  | `undefined` | Provide extension to url. Currently supported extensions: `jpg`, `webp`                                           |
| ratio     | string  | `undefined` | If a ratio is provided, e.g. `16:9` height will automatically be calculated. Please note `height` will be ignored |

Component renders an `img` tag. The remaining props are passed down.

## Notes

- I am not affiliated with the creators of [Lorem Picsum](https://picsum.photos/).
