import React from 'react';
import styles from './Intro.module.css';
import Divider from '@mui/material/Divider';

export default function Intro() {
  return (
    <>
    <div className={styles.IntroContainer}>
        <div className={styles.IntroSection}>
          <div className={styles.leftSection}>
            <h1>Let's Introduce</h1>
            <h1>Ourself</h1>
          </div>
          <Divider orientation="vertical" variant="middle" flexItem className={styles.divider} style={{ borderRight: '1px solid #6A6A6A', height: 200 }} />
          <div className={styles.rightSection}>
            <h2>Criminal Lawyer</h2>
            <p>Amet minim mollit non deserunt ullamco est
                sit aliqua dolor do amet sint. Velit officia consequatduis
                enim velit mollit Exercitation.
            </p>
        </div>
        </div>
      </div>
    </>
    
  )
}
