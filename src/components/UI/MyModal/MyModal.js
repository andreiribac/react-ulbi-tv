import React from 'react'
import cl from './MyModal.module.css';

function MyModal({ children, visible, setVisible }) {
	
	const rootClasses = [cl.myModal]
	if (visible) {
		rootClasses.push(cl.active);
	}

	return (
		// JavaScript метод join() позволяет преобразовать и объединить все элементы массива в одно строковое значение.
		// По умолчанию, элементы массива будут разделены запятой, это поведение можно изменить передав в качестве параметра метода значение,
		// которое будет использовано в качестве разделителя.
		<div
			className={rootClasses.join(' ')}
			onClick={() => setVisible(false)}
		>
			<div
				className={cl.myModalContent}
				// e.stopPropagation()
				// Прекращает дальнейшую передачу текущего события.
				onClick={(e) => e.stopPropagation()}
			>
				{children}
			</div>
		</div>
	)
}

export default MyModal
