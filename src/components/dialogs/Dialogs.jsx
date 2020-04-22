import React from 'react'
import styles from './Dialogs.module.css'
import DialogItem from "./dialogItem/DialogItem";
import MessageItem from "./messageItem/MessageItem";

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

	let onUpdateNewMessageValue = () => {
		let value = newMessageElement.current.value;
		props.updateNewMessageValue(value)
	};

	let onAddMessage = () => {
		props.addMessage()
	};


	return (
		<div className={styles.dialogs}>
			<div className={styles.dialog_items}>
				{usersElements}
			</div>

			<div className={styles.messages}>
				<div>{messageElements}</div>
				<div>
					<textarea value={props.state.newMessageValue} ref={newMessageElement} onChange={onUpdateNewMessageValue}/>
				</div>
				<div><button onClick={onAddMessage}>Add message</button></div>
			</div>

		</div>
	)

}

export default Dialogs