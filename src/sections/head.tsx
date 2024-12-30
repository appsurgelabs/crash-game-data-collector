import { Box, Button, Stack, Typography } from "@mui/material"
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

const Head = () =>{
  const handleButtonClick = () => {
    const url = "https://thanilkastartup.gumroad.com/l/1xbet-crash-game-data-collector"; // Replace with your desired URL
    window.open(url, "_blank", "noopener,noreferrer");
  };
  
    return (
        <Stack alignItems={'center'} sx = {{height : '80vh', width : '100%', position : 'relative', backgroundColor : '#0f0f0f'}}>
            <Stack spacing={2} alignItems={'center'} sx = {{zIndex : 10, position : 'absolute', top : '60%', left : '50%', transform: "translate(-50%, -50%)"}}>
            
            <Stack spacing={1} alignItems={'center'}>
            {/* <Box><img src="/logo.svg" /></Box> */}
              <Stack direction={'row'}>
                <Typography sx = {{color : '#0071E3',  lineHeight: '3rem', fontSize : '4rem', textAlign : 'center', fontWeight : 800,}}>1x</Typography>
                <Typography sx = {{color : 'white',  lineHeight: '3rem', fontSize : '4rem', textAlign : 'center', fontWeight : 600,}}>Bet</Typography>
              </Stack>
                <Typography sx = {{color : 'white', fontFamily : "'Roboto Condensed' !important", lineHeight: '3rem', fontSize : '3rem', textAlign : 'center', fontWeight : 600, width : '80vw'}}>Crash Game Data Collector</Typography>
                <Typography sx = {{color : 'white', textAlign : 'center'}}>Effortlessly collect and analyze 1xBet Crash Game data<br></br> in real-time with multiple export formats.</Typography>
            </Stack>
            <Button onClick={handleButtonClick} startIcon = {<ShoppingBagIcon />} variant="contained" sx= {{display : 'flex', alignItems : 'center', borderRadius : '1rem', fontWeight : 600, padding : '0.5rem 2rem', backgroundColor : '#0071E3', color : 'white', textTransform : 'none'}}>Buy Now</Button>
            
            </Stack>
            <Box sx = {{opacity : 0.8, backgroundImage: "linear-gradient(to top, rgba(15,15,15, 1), rgba(15,15,15, 0.8))", padding : 0, margin : 0, height : '80vh', width : '100%', top : 0, left : 0, position : 'absolute', zIndex : 2}}>
            </Box>
                 {/* Background Video */}
      
      <Box sx = {{width : '50vw'}} >
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: 'absolute',
          top: '60%',
          left: '50%',
          width: '80%',
          height: '80%',
          transform : 'translate(-50%, -50%)',
          objectFit: 'cover',
          zIndex: 1,
          borderRadius : '1rem'
        }}
      >
        <source src="/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      </Box>
           
        </Stack>
    )
}

export default Head;