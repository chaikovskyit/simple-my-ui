import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';
import { TextWrapper, PasswordWrapper, NumberWrapper } from './InputWrappers';

const meta: Meta<typeof Input> = {
	title: 'Input',
	component: Input,
	parameters: { layout: 'centered' },
	args: { placeholder: 'Type…', clearable: true },
	argTypes: { onChange: { action: 'changed' } },
};
export default meta;

type Story = StoryObj<typeof Input>;

export const Text: Story = { render: (args) => <TextWrapper {...args} /> };
export const Password: Story = { render: (args) => <PasswordWrapper {...args} /> };
export const NumberType: Story = { render: (args) => <NumberWrapper {...args} /> };

export const WithError: Story = {
	render: (args) => <TextWrapper {...args} />,
	args: { error: 'Required field' },
};

export const NoClearButton: Story = {
	render: (args) => <TextWrapper {...args} />,
	args: { clearable: false },
};
