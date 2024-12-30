import './App.css'
import { Stack } from '@mui/material'
import Header from './components/header'
import HowToUse from './sections/how-to-use'
import Feature from './sections/feature'
import Head from './sections/head'
import DescriptionSection from './sections/description'

function App() {

  return (
    <Stack alignItems={'center'}>
      <Header />
      <Head />
      <DescriptionSection />
      <HowToUse />
      <Feature feature='Real-Time Data Collection' description='Capture live game statistics as they happen, effortlessly track and store data in real-time for easy analysis and reporting. Perfect for monitoring 1xBet Crash Game trends and making data-driven decisions.' demo={'real_time.mp4'} type='landscape' />
      <Feature feature='Multiple Output Formats' description="With multiple output formats (CSV, XLSX, TXT), our app offers flexibility in how you store and analyze collected data. Whether you're working with spreadsheets, simple text files, or robust data sets, you can choose the format that best suits your needs for easy access and further analysis." demo={'types.mp4'} type='landscape' />
    </Stack>
  )
}

export default App
