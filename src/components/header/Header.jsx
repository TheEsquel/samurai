import React from 'react';
import styles from './Header.module.css';
import {NavLink } from 'react-router-dom'


const Header = (props) => {
    console.log(props);
    if(!props.profile)
        return <></>
    return (
        <header className={styles.header}>
            <img
                src="https://st2.depositphotos.com/5142301/7567/v/950/depositphotos_75677235-stock-illustration-lion-head-logo.jpg"
                alt=""/>
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