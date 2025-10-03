import React, { useState } from 'react';
import { SidebarMenu, type MenuItem } from './SidebarMenu';

const demoItems: MenuItem[] = [
	{ id: '1', label: 'Dashboard', href: '#' },
	{
		id: '2',
		label: 'Projects',
		items: [
			{ id: '2-1', label: 'Alpha', href: '#' },
			{
				id: '2-2',
				label: 'Beta',
				items: [
					{ id: '2-2-1', label: 'Roadmap', href: '#' },
					{ id: '2-2-2', label: 'Backlog', href: '#' },
				],
			},
		],
	},
	{ id: '3', label: 'Settings', href: '#' },
];

export const SidebarControlledWrapper: React.FC<{
	title?: string;
	items?: MenuItem[];
	initialOpen?: boolean;
}> = ({ title = 'Menu', items = demoItems, initialOpen = false }) => {
	const [open, setOpen] = useState(initialOpen);
	return (
		<div style={{ height: '100vh' }}>
			{!open && (
				<button style={{ margin: 16 }} onClick={() => setOpen(true)}>
					Open menu
				</button>
			)}
			<SidebarMenu open={open} onClose={() => setOpen(false)} items={items} title={title} />
		</div>
	);
};
