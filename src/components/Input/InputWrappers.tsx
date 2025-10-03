import { useState } from 'react';
import { Input } from './Input';

export const TextWrapper = (args: React.ComponentProps<typeof Input>) => {
	const [val, setVal] = useState('');
	return <Input {...args} value={val} onChange={(e) => setVal(e.target.value)} label='Text' />;
};

export const PasswordWrapper = (args: React.ComponentProps<typeof Input>) => {
	const [val, setVal] = useState('');
	return (
		<Input
			{...args}
			type='password'
			value={val}
			onChange={(e) => setVal(e.target.value)}
			label='Password'
			placeholder='for Password'
		/>
	);
};

export const NumberWrapper = (args: React.ComponentProps<typeof Input>) => {
	const [val, setVal] = useState<number | ''>('');
	return (
		<Input
			{...args}
			type='number'
			value={val}
			onChange={(e) => setVal(Number(e.target.value) || '')}
			label='Number'
			placeholder='for Numbers'
		/>
	);
};
