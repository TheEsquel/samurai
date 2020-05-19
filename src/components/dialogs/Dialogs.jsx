import React from 'react'
import styles from './Dialogs.module.css'
import DialogItem from "./dialogItem/DialogItem";
import MessageItem from "./messageItem/MessageItem";
import {compose} from "redux";
import {Field, reduxForm} from "redux-form";

let newMessageElement = React.createRef();

const Dialogs = (props) => {

	console.log(props);

	let usersElements = props.state.dialogs.users.map(user =>
		<DialogItem
			id={user.id}
			name={user.name}
		/>);

	let messageElements = props.state.dialogs.messages.map(message =>
		<MessageItem
			id={message.id}
			text={message.text}
		/>);

	const onSubmit = form => {
		console.log(form);
	}

	return (
		<div className={styles.dialogs}>
			<div className={styles.dialog_items}>
				{usersElements}
			</div>
			<div>{messageElements}</div>
			<AddMessageForm onSubmit={onSubmit} />
		</div>
	)

}

let AddMessageForm = props => {

	return(
		<form name={'addMessage'} className={styles.messages} onSubmit={props.handleSubmit}>
			<div>
				<Field  component={'input'} type={'textarea'} name={'message'}/>
			</div>
			<div>
				<button >Add message</button>
			</div>
		</form>
	)
}

AddMessageForm = compose(
	reduxForm({
		form: 'addMessage'
	})
)(AddMessageForm)


export default Dialogs