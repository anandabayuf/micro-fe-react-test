import React from 'react';

const Footer: React.FC = () => {
	return (
		<div
			style={{
				width: '100vw',
				height: '48px',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				padding: '0 16px',
				background: '#004644',
				color: '#ccc',
				fontSize: '12px',
				fontWeight: 400,
			}}
		>
			@ Remote 2023
		</div>
	);
};

export default Footer;
