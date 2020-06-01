import * as React from "react";


class ProfileStatus extends React.Component {

	state = {
		status: this.props.status,
		editMode: false
	};

	onShowEdit = () => {
		this.setState({
			editMode: true
		})
	}

	onHideEdit = (e) => {
		// console.log(e.currentTarget.value)
		this.setState({
			editMode: false
		})
		this.props.updateStatus(this.state.status)
	}

	onStatusChange = (e) => {
		// console.log(e.currentTarget.value)
		this.setState({
			status: e.currentTarget.value
		})
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		// if (this.props.status !== this.state.status){
		// 	debugger;
		// 	this.setState({
		// 		status: this.props.status
		// 	})
		// }
	}

	render() {
		return (
			<>
				<div>
					{this.state.editMode &&
						<input
							onChange={this.onStatusChange}
							autoFocus={true}
							onBlur={this.onHideEdit}
							value={this.state.status}
						/>}
					{!this.state.editMode &&
						<span
							onDoubleClick={this.onShowEdit}
						>
							{this.state.status || "[...]"}
						</span>}

				</div>
			</>
		)
	}

}

export  default ProfileStatus