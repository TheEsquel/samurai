import  React from 'react'
import styles from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return  (
        <div className={`${styles.dialog_item} ${styles.active}`}>
            <NavLink to={`/dialogs/${props.name}`}> {props.name} </NavLink>
        </div>
    )
};

export default  DialogItem