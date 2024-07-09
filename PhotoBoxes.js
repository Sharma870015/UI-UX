import React from 'react'
import Grid from '@mui/material/Grid';
import "./PhotoBoxes.css"


const PhotoBoxes = () => {
  return (
    <div className='Group-img'>
      <Grid className='first-img' container spacing={0}>
        <Grid item xs={3}><img className='image1' src='https://img.freepik.com/free-vector/mobile-phone-desktop-app-development_23-2148704867.jpg?size=626&ext=jpg&ga=GA1.1.1755385959.1720200277&semt=ais_user' alt='Analyze-img'></img>
        </Grid>
        <Grid item xs={3}>
          <img className='image1' src='https://img.freepik.com/free-vector/app-development-concept-with-laptop_23-2148699364.jpg?size=626&ext=jpg&ga=GA1.1.1755385959.1720200277&semt=ais_user' alt='Priorities-img'></img>
          </Grid>
        
        <Grid item xs={3}>
          <img className='image1' src='https://img.freepik.com/free-vector/naive-computer-engineer-stickers-collection_23-2150626948.jpg?size=626&ext=jpg&ga=GA1.1.1755385959.1720200277&semt=ais_user' alt='Optimize-img'></img>
          </Grid>
        <Grid item xs={3}>
          <img className='image1' src='https://img.freepik.com/free-vector/app-development-concept-with-desk-desktop_23-2148699345.jpg?size=626&ext=jpg&ga=GA1.1.1755385959.1720200277&semt=ais_user' alt='Validate-img'></img>
          </Grid>
    
      </Grid>
    </div>
  )
}

export default PhotoBoxes