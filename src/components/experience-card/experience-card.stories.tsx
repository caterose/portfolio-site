import type { Meta, StoryObj } from '@storybook/react';

import { ExperienceCard } from './experience-card';

const meta = {
  component: ExperienceCard,
} satisfies Meta<typeof ExperienceCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "title",
    tags: ["tag1", "tag2", "tag3"],
    image: "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
    alt: "alt",
    description: "this is a description muah ha ha ha",

  }
};