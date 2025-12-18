import { motion } from 'framer-motion'
import HeroSection from '../components/home/HeroSection'
import AboutShade from '../components/home/AboutShade'
import StatsSection from '../components/home/StatsSection'
import Features from '../components/home/Features'
import HowItWorks from '../components/home/HowItWorks'
import CityRides from '../components/home/CityRides'

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <HeroSection />
      <AboutShade />
      <StatsSection />
      <Features />
      <HowItWorks />
      <CityRides />
    </motion.div>
  )
}

export default Home

