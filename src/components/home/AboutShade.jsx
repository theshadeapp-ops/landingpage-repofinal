import { motion } from 'framer-motion'
import { FaUsers, FaDollarSign, FaLeaf, FaHandshake } from 'react-icons/fa'
import ChromaGrid from '../ChromaGrid/ChromaGrid'

const AboutShade = () => {
  const benefits = [
    {
      icon: <FaUsers className="text-5xl" />,
      title: 'Fosters friendships',
      subtitle: 'Building connections through shared journeys',
      borderColor: '#A855F7',
      gradient: 'linear-gradient(135deg, #A855F7 0%, #8B5CF6 50%, #5D18EC 100%)',
    },
    {
      icon: <FaDollarSign className="text-5xl" />,
      title: 'Lowers transportation costs',
      subtitle: 'Split expenses and save money',
      borderColor: '#A855F7',
      gradient: 'linear-gradient(135deg, #A855F7 0%, #A855F7 50%, #A855F7 100%)',
    },
    {
      icon: <FaLeaf className="text-5xl" />,
      title: 'Minimizes carbon emissions',
      subtitle: 'Eco-friendly transportation solution',
      borderColor: '#A855F7',
      gradient: 'linear-gradient(135deg, #A855F7 0%, #A855F7 50%, #A855F7 100%)',
    },
    {
      icon: <FaHandshake className="text-5xl" />,
      title: 'Reduces traffic congestion',
      subtitle: 'Fewer vehicles on campus roads',
      borderColor: '#A855F7',
      gradient: 'linear-gradient(135deg, #A855F7 0%, #A855F7 50%, #1D4ED8 100%)',
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
            About <span className="text-primary">SHADE</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-8"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto rounded-2xl p-8 md:p-10 bg-white shadow-md"
        >
          <p className="text-lg md:text-xl text-gray-800 font-metropolis leading-relaxed mb-8 text-center">
            Shade is a bike ride-sharing app designed specifically for college communities, allowing students to share their daily rides with others heading to similar destinations.
          </p>
          <p className="text-base md:text-lg text-gray-700 font-metropolis leading-relaxed text-center">
            The app reduces traffic congestion, lowers transportation costs, fosters friendships, and minimizes carbon emissions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 min-h-[400px]"
        >
          <ChromaGrid
            items={benefits}
            columns={4}
            rows={1}
            radius={300}
            damping={0.5}
            fadeOut={0.7}
          />
        </motion.div>
      </div>
    </section>
  )
}

export default AboutShade

