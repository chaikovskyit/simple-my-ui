// import React, { useEffect, useRef, useState } from 'react';
// import styles from './SidebarMenu.module.css';
// import { clsx } from 'clsx';

// export type MenuItem = {
// 	id: string;
// 	label: string;
// 	href?: string;
// 	items?: MenuItem[];
// };

// type Props = {
// 	open: boolean;
// 	onClose: () => void;
// 	items: MenuItem[];
// 	title?: string;
// };

// export const SidebarMenu: React.FC<Props> = ({ open, onClose, items, title }) => {
// 	const backdropRef = useRef<HTMLDivElement>(null);
// 	const [expanded, setExpanded] = useState<Record<string, boolean>>({});

// 	useEffect(() => {
// 		const onEsc = (e: KeyboardEvent) => {
// 			if (e.key === 'Escape') onClose();
// 		};
// 		window.addEventListener('keydown', onEsc);
// 		return () => window.removeEventListener('keydown', onEsc);
// 	}, [onClose]);

// 	const toggle = (id: string) => setExpanded((m) => ({ ...m, [id]: !m[id] }));

// 	return (
// 		<div className={clsx(styles.root, open && styles.open)}>
// 			<div ref={backdropRef} className={styles.backdrop} onClick={onClose} />
// 			<aside className={styles.panel} role='dialog' aria-modal='true' aria-label={title ?? 'Menu'}>
// 				<div className={styles.header}>
// 					<strong>{title ?? 'Menu'}</strong>
// 					<button className={styles.close} onClick={onClose} aria-label='Close'>
// 						×
// 					</button>
// 				</div>
// 				<nav className={styles.nav}>
// 					<ul className={styles.list}>
// 						{items.map((it) => (
// 							<Item key={it.id} item={it} expanded={expanded} onToggle={toggle} />
// 						))}
// 					</ul>
// 				</nav>
// 			</aside>
// 		</div>
// 	);
// };

// type ItemProps = {
// 	item: MenuItem;
// 	expanded: Record<string, boolean>;
// 	onToggle: (id: string) => void;
// };

// const Item: React.FC<ItemProps> = ({ item, expanded, onToggle }) => {
// 	const hasChildren = !!item.items?.length;
// 	const isOpen = !!expanded[item.id];

// 	return (
// 		<li>
// 			<div className={styles.row}>
// 				{item.href ? (
// 					<a href={item.href} className={styles.link}>
// 						{item.label}
// 					</a>
// 				) : (
// 					<span className={styles.link}>{item.label}</span>
// 				)}
// 				{hasChildren && (
// 					<button className={styles.chev} aria-expanded={isOpen} onClick={() => onToggle(item.id)}>
// 						{isOpen ? '▾' : '▸'}
// 					</button>
// 				)}
// 			</div>
// 			{hasChildren && isOpen && (
// 				<ul className={styles.sublist}>
// 					{item.items!.map((ch) => (
// 						<Item key={ch.id} item={ch} expanded={expanded} onToggle={onToggle} />
// 					))}
// 				</ul>
// 			)}
// 		</li>
// 	);
// };

import React, { useEffect, useRef, useState } from 'react';
import styles from './SidebarMenu.module.css';
import { clsx } from 'clsx';

export type MenuItem = {
	id: string;
	label: string;
	href?: string;
	items?: MenuItem[];
};

type Props = {
	open: boolean;
	onClose: () => void;
	items: MenuItem[];
	title?: string;
};

export const SidebarMenu: React.FC<Props> = ({ open, onClose, items, title }) => {
	const panelRef = useRef<HTMLElement>(null);
	const [expanded, setExpanded] = useState<Record<string, boolean>>({});

	// Закривати по Esc
	useEffect(() => {
		if (!open) return;
		const onEsc = (e: KeyboardEvent) => {
			if (e.key === 'Escape') onClose();
		};
		window.addEventListener('keydown', onEsc);
		return () => window.removeEventListener('keydown', onEsc);
	}, [open, onClose]);

	const toggle = (id: string) => setExpanded((m) => ({ ...m, [id]: !m[id] }));

	return (
		<div className={clsx(styles.root)} data-state={open ? 'open' : 'closed'}>
			<div className={styles.backdrop} onClick={onClose} />
			<aside
				ref={panelRef}
				className={styles.panel}
				role='dialog'
				aria-modal='true'
				aria-label={title ?? 'Menu'}
			>
				<div className={styles.header}>
					<strong>{title ?? 'Menu'}</strong>
					<button className={styles.close} onClick={onClose} aria-label='Close'>
						×
					</button>
				</div>
				<nav className={styles.nav}>
					<ul className={styles.list}>
						{items.map((it) => (
							<Item key={it.id} item={it} expanded={expanded} onToggle={toggle} />
						))}
					</ul>
				</nav>
			</aside>
		</div>
	);
};

type ItemProps = {
	item: MenuItem;
	expanded: Record<string, boolean>;
	onToggle: (id: string) => void;
};

const Item: React.FC<ItemProps> = ({ item, expanded, onToggle }) => {
	const hasChildren = !!item.items?.length;
	const isOpen = !!expanded[item.id];

	return (
		<li>
			<div className={styles.row}>
				{item.href ? (
					<a href={item.href} className={styles.link}>
						{item.label}
					</a>
				) : (
					<span className={styles.link}>{item.label}</span>
				)}
				{hasChildren && (
					<button
						className={styles.chev}
						aria-expanded={isOpen}
						aria-label={isOpen ? 'Collapse submenu' : 'Expand submenu'}
						onClick={() => onToggle(item.id)}
					>
						{isOpen ? '▾' : '▸'}
					</button>
				)}
			</div>

			{hasChildren && isOpen && (
				<ul className={styles.sublist}>
					{item.items!.map((ch) => (
						<Item key={ch.id} item={ch} expanded={expanded} onToggle={onToggle} />
					))}
				</ul>
			)}
		</li>
	);
};
