import type { Meta, StoryObj } from '@storybook/react';
import { ToastViewport } from './Toast';
import { ToastPlaygroundWrapper } from './ToastWrappers';

const meta: Meta<typeof ToastViewport> = {
	title: 'Feedback/Toast',
	component: ToastViewport,
	parameters: { layout: 'centered' },
};
export default meta;

type Story = StoryObj<typeof ToastViewport>;

export const Playground: Story = { render: () => <ToastPlaygroundWrapper /> };
