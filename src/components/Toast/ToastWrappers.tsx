import React from 'react';
import { useToast } from '../../hooks/useToast';
import { ToastProvider } from '../../hooks/ToastProvider';
import { ToastViewport } from './Toast';

export const ToastPlaygroundWrapper: React.FC = () => {
	return (
		<ToastProvider>
			<DemoButtons />
			<ToastViewport />
		</ToastProvider>
	);
};

const DemoButtons: React.FC = () => {
	const { show } = useToast();
	return (
		<div style={{ display: 'flex', gap: 8 }}>
			<button
				onClick={() => show({ type: 'info', title: 'Info', message: 'Hello', duration: 3000 })}
			>
				Info
			</button>
			<button
				onClick={() =>
					show({ type: 'success', title: 'Success', message: 'Saved!', duration: 2000 })
				}
			>
				Success
			</button>
			<button
				onClick={() =>
					show({ type: 'warning', title: 'Warning', message: 'Be careful', duration: 4000 })
				}
			>
				Warning
			</button>
			<button
				onClick={() => show({ type: 'error', title: 'Error', message: 'Oops!', duration: 2500 })}
			>
				Error
			</button>
		</div>
	);
};
