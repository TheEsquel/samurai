import React from 'react'
import styles from './formControls.module.css'

export const Textarea = ({input, meta, ...props}) => {
	const hasErrors = meta.error && meta.touched
	return (
		<div className={styles.formControls + ' ' + (hasErrors ? styles.error : '')}>
			<textarea  {...props} {...input} />
			{ hasErrors && <span>  {meta.error}</span> }
		</div>
	)
}


export const InputField = ({input, meta, ...props}) => {
	const hasErrors = meta.error && meta.touched
	return (
		<div className={styles.formControls + ' ' + (hasErrors ? styles.error : '')}>
			<input {...props} {...input}/>
			{ hasErrors && <span>  {meta.error}</span> }
		</div>
	)
}