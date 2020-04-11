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

	let onChangeNewMessageValue = () => {
		let value = newMessageElement.current.value;
		props.changeNewMessageValue(value)
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
					<textarea placeholder="your message" ref={newMessageElement} onChange={onChangeNewMessageValue}/>
				</div>
				<div><button onClick={onAddMessage}>Add artist</button></div>
			</div>

		</div>
	)

}

export default Dialogs