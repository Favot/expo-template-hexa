import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { GluestackUIProvider } from '@/lib/gluestack-ui-provider'; // Import your provider
import { Text } from './index'; // Import the Text component

const meta: Meta<typeof Text> = {
  title: 'Components/Atoms/Text',
  component: Text,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    children: { control: 'text' },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl'],
    },
    bold: { control: 'boolean' },
    italic: { control: 'boolean' },
    underline: { control: 'boolean' },
    strikeThrough: { control: 'boolean' },
    isTruncated: { control: 'boolean' },
    sub: { control: 'boolean' },
    highlight: { control: 'boolean' },
  },
  args: {
    children: 'This is a Text component',
    size: 'md',
    bold: false,
    italic: false,
    underline: false,
    strikeThrough: false,
    isTruncated: false,
    sub: false,
    highlight: false,
  },
  decorators: [
    Story => (
      <GluestackUIProvider mode="light">
        <Story />
      </GluestackUIProvider>
    ),
  ],
};

export default meta;

// Define the StoryObj type based on the component
type Story = StoryObj<typeof Text>;

// === STORIES ===

// Default story - uses the default args defined in meta
export const Default: Story = {
  render: args => <Text {...args} />,
};

// Story showcasing the 'bold' prop
export const Bold: Story = {
  args: {
    bold: true,
    children: 'This text is bold.',
  },
  render: args => <Text {...args} />,
};

// Story showcasing the 'italic' prop
export const Italic: Story = {
  args: {
    italic: true,
    children: 'This text is italic.',
  },
  render: args => <Text {...args} />,
};

// Story showcasing a larger size
export const Large: Story = {
  args: {
    size: '2xl',
    children: 'This text is large (2xl).',
  },
  render: args => <Text {...args} />,
};

// Story showcasing highlight
export const Highlighted: Story = {
  args: {
    highlight: true,
    children: 'This text is highlighted.',
  },
  render: args => <Text {...args} />,
};
