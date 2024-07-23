import React from 'react'
import styles from './Practices.module.css';
import Box from '@mui/material/Box';

import Grid from '@mui/material/Grid';

export default function Practices() {
  return (
    <div className={styles.practiceContainer}>
        <h1>Area of Practices</h1>
        <div className="imageContainer">
        <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          
        </Grid>
        <Grid item xs={4}>
          
        </Grid>
        <Grid item xs={4}>
          
        </Grid>
        <Grid item xs={8}>
        
        </Grid>
      </Grid>
    </Box> 
        </div>
    </div>
  )
}
