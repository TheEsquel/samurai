import React from 'react'
import {sendNewMessage, setNewMessageValueActionCreator} from "../../redux/actions/dialogsActions";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
	return {
		state: state.dialogsPage
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		updateNewMessageValue: (value) => dispatch(setNewMessageValueActionCreator(value)),
		addMessage: () => dispatch(sendNewMessage())
	}
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer