import React, { useCallback, useMemo, useState } from 'react';
import { ToastContext, type ToastItem, type ToastContextType } from './toastContext';

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const [toasts, setToasts] = useState<ToastItem[]>([]);

	const dismiss = useCallback<ToastContextType['dismiss']>((id) => {
		setToasts((prev) => prev.filter((t) => t.id !== id));
	}, []);

	const show = useCallback<ToastContextType['show']>(
		(t) => {
			const id = Math.random().toString(36).slice(2);
			const item: ToastItem = { id, type: 'info', duration: 3000, ...t };
			setToasts((prev) => [...prev, item]);
			if (item.duration && item.duration > 0) window.setTimeout(() => dismiss(id), item.duration);
			return id;
		},
		[dismiss],
	);

	const value = useMemo<ToastContextType>(
		() => ({ toasts, show, dismiss }),
		[toasts, show, dismiss],
	);

	return <ToastContext.Provider value={value}>{children}</ToastContext.Provider>;
};
