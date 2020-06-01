import {sendNewMessage, setNewMessageValueActionCreator} from "../../redux/actions/dialogsActions";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {addMessage} from "../../redux/thunk/dialogsThunk";
import {compose} from "redux";
import withAuthRedirect from "../hoc/withAuthRedirect";

const mapStateToProps = (state) => {
	return {
		state: state.dialogsPage,
		messages: state.form
	}
};

const DialogsContainer = compose(
	connect(mapStateToProps, {addMessage}),
	withAuthRedirect,
)(Dialogs);

export default DialogsContainer