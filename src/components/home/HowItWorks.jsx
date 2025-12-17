import { motion } from 'framer-motion'
import { FaRoute, FaUserCheck, FaMoneyBillWave, FaSearch, FaCheckCircle, FaCreditCard } from 'react-icons/fa'

const HowItWorks = () => {
  const leadSteps = [
    { icon: FaRoute, text: 'Publish route', number: '1' },
    { icon: FaUserCheck, text: 'Pick fare payer', number: '2' },
    { icon: FaMoneyBillWave, text: 'Receive payment', number: '3' },
  ]

  const farePayerSteps = [
    { icon: FaSearch, text: 'Send request', number: '1' },
    { icon: FaCheckCircle, text: 'Ride after acceptance', number: '2' },
    { icon: FaCreditCard, text: 'Pay fare', number: '3' },
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Lead Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 rounded-2xl shadow-md"
          >
            <h3 className="text-2xl font-enigma text-primary mb-8 text-center">
              LEAD
            </h3>
            <div className="space-y-6">
              {leadSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center space-x-4 bg-white border border-gray-100 p-4 rounded-xl shadow-sm"
                >
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-enigma text-lg flex-shrink-0">
                    {step.number}
                  </div>
                  <step.icon className="text-primary text-2xl flex-shrink-0" />
                  <p className="text-lg font-metropolis text-secondary font-medium">
                    {step.text}
                  </p>
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
            className="bg-white p-8 rounded-2xl shadow-md"
          >
            <h3 className="text-2xl font-enigma text-secondary mb-8 text-center">
              FARE PAYER
            </h3>
            <div className="space-y-6">
              {farePayerSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center space-x-4 bg-white border border-gray-100 p-4 rounded-xl shadow-sm"
                >
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-white font-enigma text-lg flex-shrink-0">
                    {step.number}
                  </div>
                  <step.icon className="text-secondary text-2xl flex-shrink-0" />
                  <p className="text-lg font-metropolis text-secondary font-medium">
                    {step.text}
                  </p>
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

