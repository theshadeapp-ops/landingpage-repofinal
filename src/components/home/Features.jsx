import { motion } from 'framer-motion'
import { FaRoute, FaMoneyBillWave, FaBrain, FaShieldAlt } from 'react-icons/fa'
import ChromaGrid from '../ChromaGrid/ChromaGrid'

const Features = () => {
  const features = [
    {
      icon: <FaRoute className="text-6xl" />,
      title: 'Share the Ride',
      subtitle: 'Connect with fellow students heading to the same destination and share your bike ride.',
      borderColor: '#A855F7',
      gradient: 'linear-gradient(135deg, #A855F7 0%, #A855F7 50%, #A855F7 100%)',
    },
    {
      icon: <FaMoneyBillWave className="text-6xl" />,
      title: 'Split the Cost',
      subtitle: 'Divide transportation expenses among riders, making commuting more affordable for everyone.',
      borderColor: '#A855F7',
      gradient: 'linear-gradient(135deg, #A855F7 0%, #A855F7 50%, #A855F7 100%)',
    },
    {
      icon: <FaBrain className="text-6xl" />,
      title: 'Smart Commuting',
      subtitle: 'AI-powered route matching ensures you find the perfect ride companions quickly.',
      borderColor: '#A855F7',
      gradient: 'linear-gradient(135deg, #A855F7 0%, #A855F7 50%, #A855F7100%)',
    },
    {
      icon: <FaShieldAlt className="text-6xl" />,
      title: 'Safe Rides',
      subtitle: 'Verified student profiles and safety features ensure secure and trustworthy rides.',
      borderColor: '#A855F7',
      gradient: 'linear-gradient(135deg, #A855F7 0%, #A855F7 50%, #A855F7 100%)',
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-white via-white to-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-enigma text-secondary mb-6">
            Key <span className="text-primary">Features</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto"></div>
        </motion.div>

        <div className="min-h-[600px]">
          <ChromaGrid
            items={features}
            columns={4}
            rows={1}
            radius={350}
            damping={0.5}
            fadeOut={0.7}
          />
        </div>
      </div>
    </section>
  )
}

export default Features

