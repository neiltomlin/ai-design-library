import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "./Card";

const meta = {
  title: "Components/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: "text",
      description: "The title of the card",
    },
    bodyText: {
      control: "text",
      description: "The main text content of the card",
    },
    buttonText: {
      control: "text",
      description: "Optional text for the button",
    },
    showInfoIcon: {
      control: "boolean",
      description: "Whether to show the info icon",
    },
    onButtonClick: {
      action: "clicked",
      description: "Callback function when button is clicked",
    },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Title",
    bodyText:
      "Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.",
    buttonText: "Button",
    showInfoIcon: true,
  },
};

export const WithoutIcon: Story = {
  args: {
    title: "Card Without Icon",
    bodyText:
      "This variant of the card doesn't show the info icon at the top left.",
    buttonText: "Learn More",
    showInfoIcon: false,
  },
};

export const WithoutButton: Story = {
  args: {
    title: "Card Without Button",
    bodyText:
      "This card doesn't include a button at the bottom. The text continues to fill the available space.",
    showInfoIcon: true,
  },
};

export const LongContent: Story = {
  args: {
    title: "Card With Long Content",
    bodyText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    buttonText: "Read More",
    showInfoIcon: true,
  },
};
