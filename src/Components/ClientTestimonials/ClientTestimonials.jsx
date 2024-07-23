import React from 'react'
import styles from './ClientTestimonials.module.css';
import leftArrow from '../../assests/leftArrow.png';
import rightArrow from '../../assests/rightArrow.png';

export default function ClientTestimonials() {
  return (
    <>
     <div className= {styles.ClientContainer}>
        <div className={styles.leftSection}>
                <h1>What says our</h1>
                <h1>happy Clients</h1>       
        </div>
        <div className={styles.rightSection}>
        <button>
            <img src= {leftArrow} alt="Button image" /> 
        </button> 
        <button>
            <img src= {rightArrow} alt="Button image" /> 
        </button>
        </div>
     </div>
    </>
    
  )
}
