import React, { useState } from 'react';
import onClickOutside from 'react-onclickoutside';

const FilterDropdown = ({ title, items = [], multiSelect = false, onSelectRegion, onSelectTitle }) => {
	const [open, setOpen] = useState(false);
	const [selection, setSelection] = useState([]);
	const toggle = () => setOpen(!open);

	const handleOnClick = (item) => {
		onSelectRegion(item.value);
		onSelectTitle(item.value);

		if (!selection.some((current) => current.id === item.id)) {
			if (!multiSelect) {
				setSelection([item]);
			} else if (multiSelect) {
				setSelection([...selection, item]);
			}
		} else {
			let selectionAfterRemoval = selection;
			selectionAfterRemoval = selectionAfterRemoval.filter(
				(current) => current.id !== item.id
			);
			setSelection([...selectionAfterRemoval]);
		}
	};

	const isItemInSelection = (item) => {
		if (selection.some((current) => current.id === item.id)) {
			return true;
		}
		return false;
	};

	
	return (
		<div className='dd-wrapper'>
			<div
				tabIndex={0}
				className='dd-header'
				role='button'
				onKeyPress={() => toggle(!open)}
				onClick={() => toggle(!open)}
			>
				<div className='dd-header__title'>
					<p className='dd-header__title--bold'>{title}</p>
				</div>
				<div className='dd-header__action' onClick={() => toggle(!open)}>
					<p>
						{open ? (
							
							<ion-icon name="chevron-down-outline"></ion-icon>

						) : (
							
							<ion-icon name="chevron-up-outline"></ion-icon>
						)}
					</p>
				</div>
			</div>
			{open && (
				<ul className='dd-list'>
					{items.map((item) => (
						<li className='dd-list-item' key={item.id}>
							<button type='button' onClick={() => handleOnClick(item)}>
								<span>{item.value}</span>
								<span>{isItemInSelection(item) && 'Selected'}</span>
							</button>
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

  export default FilterDropdown;
