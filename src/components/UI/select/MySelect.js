import React from 'react'

function MySelect({ options, dafaultValue }) {
	return (
		<select>
			<option disabled value="">{dafaultValue}</option>
			{options.map(option => 
				<option value={option.value}>{option.name}</option>
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
