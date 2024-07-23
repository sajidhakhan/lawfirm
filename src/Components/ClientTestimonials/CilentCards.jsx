import React from 'react'
import Card from '@mui/material/Card';
import CardContent from "@mui/material/CardContent";
import { testimonials } from "../../constants";
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import styles from './ClientTestimonials.module.css';



export default function CilentCards() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={0} className={styles.cilentCardSection} > 
        {testimonials.map((card, index) => (
          <Grid item key={index}>
            <Card className={styles.cilentCard} sx={{ width: 359, height: 368 }}>
              <CardMedia component="img"  image={card.image} alt={card.title} sx={{
                  width: 105,
                  marginLeft: 2,
                  marginTop: 2,
                }} />
              <CardContent>
                <h5 className={styles.title}>
                  {card.title}
                </h5>
                <h6 className={styles.subtitle}>
                 {card.subTitle}
                </h6>
                <p className={styles.description}>
                  {card.description}
                </p>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box> 
    </>
    
  )
}
