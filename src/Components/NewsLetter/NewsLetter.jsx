import React from 'react'
import styles from './NewsLetter.module.css';

export default function NewsLetter() {
  return (
    <div className= {styles.NewsLetterCont}>
        <div className = {styles.NewsLetterSection}>
            <div className={styles.heading}>
            <h1>Subscribe Our Newsletter</h1>
            </div>
            <div className={styles.inputsContainer}>
                <input type="text" placeholder="Name :" className={styles.roundedInput}></input>
                <input type="text" placeholder="Enter your email address" ></input>
                <button> SEND </button>
            </div>
        </div>
    </div>
  )
}
