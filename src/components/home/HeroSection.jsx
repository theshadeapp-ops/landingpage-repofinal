import { motion } from 'framer-motion'
import { FaArrowRight } from 'react-icons/fa'

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section className="group relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#f7f2ff] via-white to-[#eef0ff]">
      {/* Gradient blobs */}
      <div className="absolute inset-0">
        <div className="absolute -left-32 top-10 w-96 h-96 bg-primary/15 blur-3xl rounded-full animate-pulse group-hover:bg-primary/25 group-hover:scale-105 transition-all duration-700"></div>
        <div className="absolute right-0 -bottom-10 w-[30rem] h-[30rem] bg-primary/10 blur-3xl rounded-full animate-[pulse_6s_ease-in-out_infinite] group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-700"></div>
        <div className="absolute left-1/2 top-1/3 w-72 h-72 bg-white/60 blur-2xl rounded-full group-hover:bg-white/80 group-hover:scale-105 transition-all duration-700"></div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%235D18EC' fill-opacity='0.45'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center space-y-6 px-4 md:px-8"
        >
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-enigma leading-tight text-transparent bg-clip-text bg-gradient-to-br from-secondary via-primary to-secondary"
          >
            Why ride alone,
            <br />
            <span className="text-primary">Why ride alone?  </span>
            <br />
            Just SHADE!?
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-800 font-metropolis mb-4 max-w-3xl mx-auto"
          >
            Connecting People, One Ride at a Time!
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-700 font-metropolis mb-10 max-w-2xl mx-auto"
          >
            Share the Ride, Split the Cost!
          </motion.p>

          <motion.div variants={itemVariants}>
            <a href="https://play.google.com/store/apps/details?id=com.shade.app&pcampaignid=web_share" target="_blank" rel="noopener noreferrer">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(93, 24, 236, 0.4)' }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary text-white px-10 py-4 rounded-full text-lg font-medium flex items-center justify-center space-x-2 mx-auto hover:bg-[#4a12c0] transition-all duration-300 shadow-lg"
              >
                <span>Get Started</span>
                <FaArrowRight className="inline" />
              </motion.button>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection

