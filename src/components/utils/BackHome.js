import React from 'react';

const BackHome = (props) => {
	const handleBack = () => {
		props.history.push('/');
	};

	return (
		<div className='back-home'>
			<button onClick={handleBack}>
				<ion-icon name='arrow-back-outline'></ion-icon> Back
			</button>
		</div>
	);
};

export default BackHome;
