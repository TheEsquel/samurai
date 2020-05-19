import React from 'react';
import styles from './Header.module.css';
import {NavLink } from 'react-router-dom'
import logo from '../../assets/img/nasa.png'


const Header = (props) => {
    return (
        <header className={styles.header}>
                <img
                    src={logo}
                    alt="nasa logo"
                    className={styles["header-logo"]}
                />
            <div className={styles["login-block"]}>
                {props.isAuthorized ?
                    <div className={styles.authorized}>
                        <span>
                           {props.profile.data.login}
                        </span><br/>
                        <span>
                            {props.profile.data.email}
                        </span><br/>
                        <span>
                            {props.profile.data.id}
                        </span>
                    </div>

                    :
                    <NavLink to="/login" >
                        Login
                    </NavLink>
                }

            </div>
        </header>
    )

};

export default Header