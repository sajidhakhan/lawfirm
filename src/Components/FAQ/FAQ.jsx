import React from 'react'
import styles from './FQA.module.css';
import { questions } from '../../constants';
import accordion from '../../assests/accordion.png';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';

const FAQ = () => {
    const [isActive, setActive] = React.useState(null); 
  
    const handleClick = (index) => {
      setActive(index === isActive ? null : index);
    }
  return (
    <> 
       
        <div className={styles.FAQContainer}>
        
                <div className={styles.leftSection}>
                    <h1>
                        FAQ
                    </h1>
                    <p>
                        Amet minim mollit non deserunt ullamco est sit <br></br>
                        aliqua dolor do amet sint. 
                    </p>
                </div>
          
            <Stack spacing={2}>
            {questions.map((question, index) => (
            <div className={styles.questionWrapper} key={question.id}>
                <div className={styles.question} id={question.id}>
                <h3>{question.question}</h3>
                <button onClick={() => handleClick(index)}>
                    <img src={accordion} alt="accordion" className={isActive === index ? 'active' : ''} />
                </button> 
                </div>
                
                {/* <div className={isActive === index ? 'answer active' : 'answer'}>{question.answer}</div> */}
                <div className={styles.answer + (isActive === index ? ` ${styles.active}` : '')}>{question.answer}
                
                </div>
                <Divider  orientation="horizontal" variant="middle" flexItem className={styles.divider} style={{ border: '1px solid #FFFFFF',opacity: '0.05'  }} />
            </div>
            ))}
            </Stack>
         
        </div>
       

    </>
  )
}
export default FAQ