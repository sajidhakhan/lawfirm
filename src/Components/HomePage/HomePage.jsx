
import Navbar from "./Navbar";
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import styles from "./HomePage.module.css";
import messageIcon from "../../assests/MessageIcon.png";
import React, { useState } from "react";
import ImageHero from "../../assests/ImageHero.png";

    const HomePage = () => {
        const [emailId, setEmailId] = useState("");
    
        const handleChange = (e) => {
            setEmailId(e.target.value);
        };
    
        const handleClick = () => {
            if (!emailId) {
                alert("Please fill in the required field");
                return;
            } else {
                setEmailId("");
            }
        };

    return(
        <>
        <div className={styles.homeContainer}>
            <Navbar />
            <div className={styles.hero}>
            <Box sx={{ width: '100%' }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid xs={6}>
                    <div className={styles.wrapper}>
                        <h1 className={styles.text1}>
                             You don’t have to 
                             Fight them Alone .
                        </h1>
                        <p className={styles.text2} >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, culpa. Vitae nam illum unde exercitationem quia sit, odit eum veniam. Doloribus, quas ullam maiores consequuntur necessitatibus rem excepturi est delectus.
                        </p>
                    </div>
                    <div className={styles.inputSection}>
                       <img src={messageIcon} className={styles.imgSection} alt="messageBox" width={22} height={18} />
                       <div className={styles.inputCont}>
                       <input
						type="text"
						value={emailId}
						onChange={handleChange}
						placeholder="Enter your email address"></input>
                       </div>
                       <button onClick={handleClick}>Let’s Talk</button>
                    </div>
                    </Grid>
                    <Grid xs={6}>
                    <div>
                    <img src={ImageHero} className={styles.heroImg} alt="hero" />
                    </div>
                    </Grid>
                    
                </Grid>
                </Box>
            </div>   
        </div>
      </>
    );
}


export default HomePage