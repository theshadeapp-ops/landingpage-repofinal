import { motion } from 'framer-motion'
import { FaRoute, FaUserCheck, FaMoneyBillWave, FaSearch, FaCheckCircle, FaCreditCard } from 'react-icons/fa'

const HowItWorks = () => {
  const leadSteps = [
    { 
      icon: FaRoute, 
      title: 'Post a Ride', 
      description: 'List your route, time, and available seats in seconds.',
      number: '1' 
    },
    { 
      icon: FaUserCheck, 
      title: 'Get Bookings', 
      description: 'Other users heading the same way can instantly book your ride.',
      number: '2' 
    },
    { 
      icon: FaMoneyBillWave, 
      title: 'Ride & Earn', 
      description: 'Pick up, travel together, and receive the fare directly — 100% goes to you.',
      number: '3' 
    },
  ]

  const farePayerSteps = [
    { 
      icon: FaSearch, 
      title: 'Find a Ride', 
      description: 'Enter your pickup and destination to see nearby available rides.',
      number: '1' 
    },
    { 
      icon: FaCheckCircle, 
      title: 'Book Instantly', 
      description: 'Choose a ride that suits your timing — no waiting or requests.',
      number: '2' 
    },
    { 
      icon: FaCreditCard, 
      title: 'Ride & Pay', 
      description: 'Meet your lead, travel safely, and pay directly after the trip.',
      number: '3' 
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
            How It <span className="text-primary">Works</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Lead Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 rounded-2xl shadow-md h-full flex flex-col"
          >
            <div className="mb-8">
              <h3 className="text-2xl font-enigma text-primary mb-2 text-center">
                LEAD
              </h3>
              <p className="text-sm text-gray-600 text-center">
                (Who have vehicle and want to offer rides)
              </p>
            </div>
            <div className="space-y-6 flex-1">
              {leadSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white border border-gray-100 p-5 rounded-xl shadow-sm"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-enigma text-lg flex-shrink-0">
                      {step.number}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-3 mb-2">
                        <step.icon className="text-primary text-xl flex-shrink-0" />
                        <h4 className="text-lg font-metropolis text-secondary font-semibold">
                          {step.title}
                        </h4>
                      </div>
                      <p className="text-sm font-metropolis text-gray-600 pl-8">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Fare Payer Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 rounded-2xl shadow-md h-full flex flex-col"
          >
            <div className="mb-8">
              <h3 className="text-2xl font-enigma text-secondary mb-2 text-center">
                FARE PAYER
              </h3>
              <p className="text-sm text-gray-600 text-center">
                (Who want to find and pay for rides)
              </p>
            </div>
            <div className="space-y-6 flex-1">
              {farePayerSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white border border-gray-100 p-5 rounded-xl shadow-sm"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-white font-enigma text-lg flex-shrink-0">
                      {step.number}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-3 mb-2">
                        <step.icon className="text-secondary text-xl flex-shrink-0" />
                        <h4 className="text-lg font-metropolis text-secondary font-semibold">
                          {step.title}
                        </h4>
                      </div>
                      <p className="text-sm font-metropolis text-gray-600 pl-8">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks

