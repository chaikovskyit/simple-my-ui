import { createContext } from 'react';

export type ToastType = 'info' | 'success' | 'warning' | 'error';

export type ToastItem = {
	id: string;
	type?: ToastType;
	title?: string;
	message: string;
	duration?: number;
};

export type ToastContextType = {
	toasts: ToastItem[];
	show: (t: Omit<ToastItem, 'id'>) => string;
	dismiss: (id: string) => void;
};

export const ToastContext = createContext<ToastContextType | null>(null);
