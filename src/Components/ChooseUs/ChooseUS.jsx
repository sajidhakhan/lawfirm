import React from 'react';
import styles from './ChooseUs.module.css'
import Card from '@mui/material/Card';
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { cards } from "../../constants";
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

export default function ChooseUS() {
  return (
    <>
    <div className={styles.chooseContainer}>
        <div>
          <h1>Why Choose us?</h1>
        </div>
      <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={0} className={styles.cardSection} > 
        {cards.map((card, index) => (
          <Grid item key={index}>
            <Card className={styles.card} sx={{ width: 359, height: 377 }}>
              <CardMedia component="img"  image={card.image} alt={card.title} sx={{
                  width: 101,
                  padding : '10px'
                }} />
              <CardContent>
                <h5 className={styles.title}>
                  {card.title}
                </h5>
                <p className={styles.description}>
                  {card.description}
                </p>
              </CardContent>
              <Button className={styles.button}  href={card.readMoreLink}>
                Read More
              </Button>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box> 
    </div>  
    </>
   
  )
}
