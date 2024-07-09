import React from 'react'
import Grid from '@mui/material/Grid';
import "./ImageBoxes.css"


const ImageBoxes = () => {
  return (
    <div className='Group-img'>
      <Grid className='first-img' container spacing={0}>
        <Grid item xs={6}><img className='img1' src='https://img.freepik.com/free-vector/ui-ux-designers-isometric-background_1284-71566.jpg?semt=ais_user' alt='Analyze-img'></img>
        <h4 className='for-points'>1. Analyze</h4> <p className='for-deep-dive'>Deep dive into your customers behavior using session <br></br> recordings and feedback.</p></Grid>
        <Grid item xs={6}>
          <img className='img2' src='https://img.freepik.com/free-vector/isometric-ui-ux-background_23-2149047261.jpg?t=st=1720200386~exp=1720203986~hmac=a27ae768c289f4b5bbb5bec876fe92c44425e1b77d578cdddffd57309b8de9ca&w=1380' alt='Priorities-img'></img>
          <h4 className='for-points'>2. Prioritise</h4><p className='for-deep-dive'>Prioritize the opportunities that are having the biggest <br></br> impact on your customers.</p>
          </Grid>
        
        <Grid item xs={6}>
          <img className='third-img' src='https://img.freepik.com/free-vector/ui-ux-female-designer_1284-70205.jpg?semt=ais_user' alt='Optimize-img'></img>
          <h4 className='for-points'>3. Optimize</h4><p className='for-deep-dive'>We'll propose soltions that require small efforts <br></br> and have a big impact.</p>
          </Grid>
        <Grid item xs={6}>
          <img className='fourth-img' src='https://img.freepik.com/free-vector/cms-concept-landing-page-illustrated_23-2148794332.jpg?t=st=1720247118~exp=1720250718~hmac=2b6d98b0adf1d0e79f5159fdb85e98067e6e2a0578042c91c2da3f06910aca29&w=1380' alt='Validate-img'></img>
          <h4 className='for-points'>4. Validate</h4><p className='for-deep-dive'>Using prototypes, we run tests to ensure each<br></br> optimization will drive results.</p>
          </Grid>
    
      </Grid>
    </div>
  )
}

export default ImageBoxes