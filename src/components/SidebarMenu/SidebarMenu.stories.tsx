import type { Meta, StoryObj } from '@storybook/react';
import { SidebarMenu } from './SidebarMenu';
import { SidebarControlledWrapper } from './SidebarMenuWrappers';

const meta: Meta<typeof SidebarMenu> = {
	title: 'Navigation/SidebarMenu',
	component: SidebarMenu,
	parameters: { layout: 'fullscreen' },
};
export default meta;

type Story = StoryObj<typeof SidebarMenu>;

export const Closed: Story = { render: () => <SidebarControlledWrapper initialOpen={false} /> };
export const OpenWithNested: Story = { render: () => <SidebarControlledWrapper initialOpen /> };
