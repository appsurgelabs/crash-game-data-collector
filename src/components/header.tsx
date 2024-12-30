import {Stack, Button, Typography } from "@mui/material";
import { ShoppingBag } from "@mui/icons-material";
const Header = () =>{
    const handleButtonClick = () => {
        const url = "https://thanilkastartup.gumroad.com/l/1xbet-crash-game-data-collector"; // Replace with your desired URL
        window.open(url, "_blank", "noopener,noreferrer");
      };
    return(
        <Stack direction={'row'} sx ={{
            position : 'fixed',
            zIndex : 15,
            top : 0,
            padding : '1rem 2rem',
            marginTop : '1rem',
            backgroundColor : '#1E1E1E',
            width : '80%',
            alignItems : 'center',
            display : 'flex',
            justifyContent : 'space-between',
            borderRadius : '10rem'

        }}>
            <Stack direction={'row'} sx={{color : 'white'}} textAlign={'center'} justifyContent={'space-between'} spacing={0.8}>
            <Stack direction={'row'}>
                <Typography sx = {{color : '#0071E3',  textAlign : 'center', fontWeight : 800, marginRight : '0.3rem'}}>1x</Typography>
                <Typography sx = {{color : 'white',   textAlign : 'center', fontWeight : 400,}}>Bet Crash Game Data Collector</Typography>
                
              </Stack>
           
            </Stack>

            
            <Button onClick={handleButtonClick} variant="contained" startIcon = {<ShoppingBag sx = {{height : '1rem'}} />} sx = {{fontSize : '0.7rem', fontWeight : 600, paddingX : '1rem', paddingY : '0.3rem', borderRadius : '1rem', textTransform : 'none', color : 'white', backgroundColor : '#0071E3'}}>Buy</Button>
           

        </Stack>
    )
}

export default Header;