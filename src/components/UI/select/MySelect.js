import React from 'react'

function MySelect({ options, dafaultValue, value, onChange }) {
	return (
		<select className='select'
			value={value}
			onChange={event => onChange(event.target.value)}
		>
			<option disabled value="">{dafaultValue}</option>
			{options.map(option => 
				<option key={option.value} value={option.value}>{option.name}</option>
			)}
			{/* {options.map((option) => {
				return (
					<option value={option.value}>{option.name}</option>
				)
			}
			)} */}
		</select>
	)
}

export default MySelect
