import React from 'react';
import styles from  './Navbar.module.css';
import {NavLink } from 'react-router-dom'
import {connect} from "react-redux";



class Navbar extends React.Component {

    state = {
        userId: null,
    }

    componentDidMount() {
        console.log(this.props)
        if(this.props.profile){
            this.setState({
                userId: this.props.profile.data.id
            })
        }
    }

    render() {

        return (
            <nav className={styles.nav}>
                <div className={styles.item}>
                    <NavLink to={`/profile`} activeClassName={styles.activeLink}>Profile</NavLink>
                </div>
                <div className={styles.item}>
                    <NavLink to="/dialogs" activeClassName={styles.activeLink}>Dialogs</NavLink>
                </div>
                <div className={styles.item}>
                    <NavLink to="/news" activeClassName={styles.activeLink} >New</NavLink>
                </div>
                <div className={styles.item}>
                    <NavLink to="/users" activeClassName={styles.activeLink}  >Users</NavLink>
                </div>
                <div className={styles.item}>
                    <NavLink to="/settings" activeClassName={styles.activeLink}  >Settings</NavLink>
                </div>
            </nav>
        )
    }
};

const mapStateToProps = (state) => ({
    profile: state.authorization.profile
})

export default connect(mapStateToProps)(Navbar)