import React from 'react';
import styles from './ChooseUs.module.css'
import Card from '@mui/material/Card';
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { cards } from "../../constants";
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';

export default function ChooseUS() {
  return (
    <>
      <div className={styles.ChooseUSsection}>
        <h1>Why Choose us?</h1>
      </div>
      <div className={styles.cardSection}>
      <Grid container spacing={1}> {/* Add spacing between cards */}
        {cards.map((card, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}> {/* Adjust grid sizes as needed */}
            <Card className={styles.card} sx={{ width: 359, height: 377  }}>
              <CardMedia component="img"  image={card.image} alt={card.title} sx={{
                  width: 101,
                  height: 101,
                 
                }} />
              <CardContent>
                <h5 className={styles.title}>
                  {card.title}
                </h5>
                <p className={styles.description}>
                  {card.description}
                </p>
              </CardContent>
              <Button size="small" href={card.readMoreLink}>
                Read More
              </Button>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
      
    </>
   
  )
}
