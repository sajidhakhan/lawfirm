import React, { useState } from 'react'
import styles from './ClientTestimonials.module.css';
import leftArrow from '../../assests/leftArrow.png';
import rightArrow from '../../assests/rightArrow.png';
import Card from '@mui/material/Card';
import CardContent from "@mui/material/CardContent";
import { testimonials } from "../../constants";
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper';

const ClientTestimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrev = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const handleNext = () => {
    if (currentSlide < testimonials.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  return (
    <>
     <div className= {styles.ClientContainer}>
        <div className={styles.leftSection}>
                <h1>What says our</h1>
                <h1>happy Clients</h1>       
        </div>
        <div className={styles.rightSection}>
        <button onClick={handlePrev}>
            <img src= {leftArrow} alt="Button image"  /> 
        </button> 
        <button onClick={handleNext}>
            <img src= {rightArrow} alt="Button image"  /> 
        </button>
        </div>
     </div>
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

export default ClientTestimonials;