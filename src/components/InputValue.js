import React, {useState} from 'react'


// Управляемый компонент
function InputValue() {
	const [value, setValue] = useState('текс в инпуте');
	return (
		<>
			<h2>{value}</h2>
			<input
				type="text"
				value={value}
				onChange={event => setValue(event.target.value)}
			/>
		</>
	)
}

export default InputValue
