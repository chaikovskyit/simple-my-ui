import React, { forwardRef, useId, useState } from 'react';
import styles from './Input.module.css';
import { clsx } from 'clsx';

type BaseProps = {
	label?: string;
	helperText?: string;
	error?: string;
	clearable?: boolean;
	className?: string;
	leftIcon?: React.ReactNode;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef<HTMLInputElement, BaseProps>(function Input(
	{ type = 'text', label, helperText, error, clearable, className, leftIcon, ...rest },
	ref,
) {
	const id = useId();
	const [isPasswordVisible, setVisible] = useState(false);

	const isPassword = type === 'password';
	const inputType = isPassword ? (isPasswordVisible ? 'text' : 'password') : type;

	return (
		<div className={clsx(styles.wrapper, className)}>
			{label && (
				<label htmlFor={id} className={styles.label}>
					{label}
				</label>
			)}
			<div className={clsx(styles.field, error && styles.error)}>
				{leftIcon && <span className={styles.leftIcon}>{leftIcon}</span>}

				<input
					id={id}
					ref={ref}
					type={inputType}
					aria-invalid={!!error}
					aria-describedby={helperText ? `${id}-help` : undefined}
					className={styles.input}
					{...rest}
				/>
				{clearable && rest.value && String(rest.value).length > 0 && (
					<button
						type='button'
						aria-label='Clear input'
						className={styles.iconBtn}
						onClick={() => {
							if (rest.onChange) {
								const event = {
									target: { value: '' },
								} as unknown as React.ChangeEvent<HTMLInputElement>;
								rest.onChange(event);
							}
						}}
					>
						×
					</button>
				)}

				{isPassword && (
					<button
						type='button'
						aria-label={isPasswordVisible ? 'Hide password' : 'Show password'}
						className={styles.iconBtn}
						onClick={() => setVisible((v) => !v)}
					>
						{isPasswordVisible ? '🙈' : '👁️'}
					</button>
				)}
			</div>

			{(helperText || error) && (
				<div id={`${id}-help`} className={clsx(styles.help, error && styles.helpError)}>
					{error ?? helperText}
				</div>
			)}
		</div>
	);
});
