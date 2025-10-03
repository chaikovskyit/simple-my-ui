import React from 'react';
import styles from './Toast.module.css';
import { clsx } from 'clsx';
import { useToast } from '../../hooks/useToast';

export const ToastViewport: React.FC = () => {
	const { toasts, dismiss } = useToast();
	return (
		<div className={styles.viewport}>
			{toasts.map((toast) => (
				<div key={toast.id} className={clsx(styles.toast, styles[toast.type ?? 'info'])}>
					<div className={styles.row}>
						{toast.title && <strong className={styles.title}>{toast.title}</strong>}
						<button className={styles.close} aria-label='Close' onClick={() => dismiss(toast.id)}>
							×
						</button>
					</div>
					<div className={styles.msg}>{toast.message}</div>
				</div>
			))}
		</div>
	);
};
