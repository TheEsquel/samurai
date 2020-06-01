import React from 'react';
import styles from './Header.module.css';
import {NavLink } from 'react-router-dom'
import logo from '../../assets/img/nasa.png'


const Header = (props) => {
    console.log(props);
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
                           {props.profile.login}
                        </span><br/>
                        <span>
                            {props.profile.email}
                        </span><br/>
                        <span>
                            {props.profile.id}
                        </span>
                        <span>
                            <button onClick={props.logout}>
                                Logout
                            </button>
                        </span>

                    </div>

                    :
                    <NavLink to="/login" >
                        <button> Login</button>
                    </NavLink>
                }

            </div>
        </header>
    )

};

export default Header