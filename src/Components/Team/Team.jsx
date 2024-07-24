import React from 'react';
import styles from './Team.module.css';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { team } from '../../constants';
import Card from '@mui/material/Card';
import CardContent from "@mui/material/CardContent";
import CardMedia from '@mui/material/CardMedia';


export default function Team() {
  return (
    <>  

<div className={styles.TeamContainer}>
        <div className={styles.heading}>
          <h1>Our Team</h1>
        </div>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={5} className={styles.teamCardSection}>
            {team.map((card, index) => (
              <Grid item key={index}>
                <Card className={styles.teamCard} sx={{ width: 344, height: 109 , border: 'none' }}>
                  <Grid container spacing={0}> {/* Added nested Grid for alignment */}
                    <Grid item xs={4}> {/* Set width for image container */}
                      <CardMedia component="img"  image={card.image} alt={card.title} sx={{
                            width: 68,
                            marginLeft: 2,
                            marginTop: 2,
                            
                            }} />
                    </Grid>
                    <Grid item xs={8}> {/* Set width for content container */}
                      <CardContent>
                        <h5 className={styles.title}>
                          {card.name}
                        </h5>
                        <h6 className={styles.subtitle}>
                          {card.cases}
                        </h6>
                      </CardContent>
                    </Grid>
                  </Grid>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </div>
    </>

  
  )
}
