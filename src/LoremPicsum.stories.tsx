import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { LoremPicsumProps } from '../types';
import LoremPicsum from './LoremPicsum';

export default {
  title: 'LoremPicsum',
  component: LoremPicsum,
} as Meta;

const Template: Story<LoremPicsumProps> = (args) => <LoremPicsum {...args} />;

export const Default = Template.bind({});
Default.args = {
  width: 600,
  height: 400,
};

export const Grayscale = Template.bind({});
Default.args = {
  grayscale: true,
  width: 800,
  height: 450,
};

export const SpecifyID = Template.bind({});
Default.args = {
  id: 5,
  width: 800,
  height: 450,
};
