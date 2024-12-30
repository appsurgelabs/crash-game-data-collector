import { Stack, Typography } from "@mui/material"
const DescriptionSection = () =>{
    return (
        <Stack spacing={4} justifyContent={'center'} alignItems={'center'} sx = {{paddingY : '4rem',backgroundColor : '#0f0f0f', width : '100%'}}>
            <Typography sx = {{color : 'white', paddingX : '10vw', textAlign : 'center'}}>The 1xBet Crash Game Data Collector is a powerful tool designed for players, analysts, and enthusiasts of the 1xBet crash game. This intuitive software collects crucial game data in real-time and outputs it in multiple formats, including XLSX, CSV, and TXT. Whether you're tracking performance, analyzing trends, or just curious about the game’s data, this tool provides seamless access to the information you need.</Typography>
        </Stack>
    )
}

export default DescriptionSection;