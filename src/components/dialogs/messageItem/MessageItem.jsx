import  React from 'react'
import styles from './../Dialogs.module.css'

const MessageItem = (props) => {
  return (

      <div className={styles.message}> {props.text} </div>
  )
};

export default  MessageItem