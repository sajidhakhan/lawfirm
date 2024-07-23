import React from 'react'
import styles from './Practices.module.css';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import bussinessImg from '../../assests/bussinessImg.jpg';
import partner from '../../assests/partnerShipImg.jpg';
import estate from '../../assests/estateImg.jpg';
import bussinessImg1 from '../../assests/bussinessImg1.jpg';
import land from '../../assests/LandImg.jpg';
import elders from '../../assests/eldersImg.jpg';

export default function Practices() {
  return (
    <div className={styles.practiceContainer}>
        <div className={styles.headingContainer}>
          <h1>Area of Practices</h1>
        </div>
        <div className= {styles.imageContainer}>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={3}>
                    <Grid item xs={8} className={styles.gridItem} >
                      <img  src={ bussinessImg } alt = "bussinessImg" className={styles.largeImg} />
                      <p className= {styles.text1} >BUSINESS LAW</p>
                    </Grid>
                    <Grid item xs={4} className={styles.gridItem} >
                      <img src= { partner } alt = "partner"  className={styles.smallImg}/> 
                      <p className= {styles.text2} >Partnership LAW</p>
                    </Grid>
                    <Grid item xs={4} className={styles.gridItem} >
                       <img src= { estate } alt = "estate" className={styles.smallImg} /> 
                       <p className= {styles.text2} >REAL ESTATE LAW</p>
                    </Grid>
                    <Grid item xs={8} className={styles.gridItem} >
                      <img src= { bussinessImg1 } alt = "" className={styles.largeImg} />
                      <p className={styles.text1}>BUSINESS LAW</p>
                    </Grid>
                    <Grid item xs={8} className={styles.gridItem} >
                      <img src= { land } alt = "" className={styles.largeImg} />
                      <p className={styles.text1}>LANDLORD DISPUTES</p>
                    </Grid>
                    <Grid item xs={4} className={styles.gridItem} >
                      <img src= { elders } alt = "" className={styles.smallImg} /> 
                      <p className={styles.text2}>ELDER ABUSE</p>
                    </Grid>
                </Grid>
            </Box> 
        </div>
    </div>
  )
}


// width: 752px;
// height: 342px;
// top: 2313px;
// left: 145px;
// gap: 0px;
// border-radius: 14px 0px 0px 0px;
// opacity: 0px;
 