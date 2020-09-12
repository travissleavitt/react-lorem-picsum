import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import times from 'lodash/times';
import { LoremPicsumProps } from '../types';
import LoremPicsum from './LoremPicsum';

export default {
  title: 'LoremPicsum',
  component: LoremPicsum,
} as Meta;

interface ArgType extends LoremPicsumProps {
  count: number;
}

const wrapperStyles = {
  display: 'flex',
  flexWrap: 'wrap',
} as React.CSSProperties;

const colStyles = {
  padding: '8px',
} as React.CSSProperties;

const Template: Story<ArgType> = ({ count, ...args }) => (
  <div style={wrapperStyles}>
    {times(count).map((i: number) => (
      <div style={colStyles} key={i}>
        <LoremPicsum {...args} />
      </div>
    ))}
  </div>
);

export const Default = Template.bind({});
Default.args = {
  width: 200,
  height: 200,
  count: 3,
};
Default.argTypes = {
  count: { control: { type: 'range', min: 1, max: 10 } },
};

export const ForceRandom = () => {
  return (
    <div style={wrapperStyles}>
      {times(5).map((i: number) => (
        <div style={colStyles} key={i}>
          <LoremPicsum forceRandom={i} />
        </div>
      ))}
    </div>
  );
};
