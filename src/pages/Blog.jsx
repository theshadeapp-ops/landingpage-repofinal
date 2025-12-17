import { motion } from 'framer-motion'
import BlogCard from '../components/blog/BlogCard'

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'From ₹80 Autos to ₹20 SHADE Rides',
      excerpt:
        'Before SHADE, every morning from Peelamedu to PSG Tech felt like a marathon — waiting for autos, paying ₹80 one way, and still getting late to class. Now with this Coimbatore ride-sharing platform, I just open the SHADE app, find a nearby ride at ₹20, and reach college in 10 minutes. No long waits in traffic, no petrol smell — just a chill ride with friends and the feel of travelling with classmates.',
      author: 'Arun',
      date: 'March 12, 2024',
      category: 'Student Story',
      image: '🚴',
    },
    {
      id: 2,
      title: 'Coimbatore\'s New Smart Mobility Culture',
      excerpt:
        'Bike pooling is slowly becoming Coimbatore\'s new smart mobility culture. SHADE connects college students and IT professionals who travel similar routes — from Gandhipuram to Tidel Park or from Peelamedu to KCT. Instead of spending ₹100+ daily, users now save 60–80% with ₹15–₹30 rides while helping reduce traffic and pollution on Coimbatore\'s busy roads.',
      author: 'Karthik',
      date: 'March 8, 2024',
      category: 'Smart Mobility',
      image: '🛵',
    },
    {
      id: 3,
      title: 'KCT 8 AM Class, Zero Late Mark',
      excerpt:
        '“Naan KCT la 8 AM ku class start aagum. Auto kidaikaama neraya naal late aayiduven.” After using SHADE, mornings became smooth — ride confirmed at 7:30 from Saravanampatti, reaching college in 10 minutes for just ₹25 with a safe ride and helmet. For KCT students, SHADE means attendance safe, money saved, and no traffic stress.',
      author: 'Vignesh',
      date: 'March 3, 2024',
      category: 'Student Story',
      image: '🎓',
    },
    {
      id: 4,
      title: 'Small Rides, Big Impact on Pollution',
      excerpt:
        'Every small ride matters when it comes to reducing pollution. In areas like Gandhipuram, Peelamedu, and Singanallur, thousands of SHADE rides have already reduced fuel usage and traffic jams. For a growing city like Coimbatore, SHADE is more than a convenience app — it is a green movement driven by students and professionals.',
      author: 'Suresh',
      date: 'February 28, 2024',
      category: 'Sustainability',
      image: '🌱',
    },
    {
      id: 5,
      title: 'From RS Puram to CIT Without the Stress',
      excerpt:
        'Before SHADE, the daily commute from RS Puram to CIT was tiring — standing in crowded buses or paying high auto fares. Now, a confirmed SHADE ride gets students to college in 15 minutes for just ₹20–₹25, often sharing with classmates from the same department. Clear features, strong tracking, and a safe ride system make SHADE a trusted companion.',
      author: 'Prakash',
      date: 'February 24, 2024',
      category: 'Student Story',
      image: '🏍️',
    },
    {
      id: 6,
      title: 'IT Professionals Choose SHADE Over Autos',
      excerpt:
        'Coimbatore\'s tech corridor around Peelamedu and Tidel Park sees thousands of daily commuters. Many IT employees now prefer SHADE to avoid parking chaos and high fuel costs. With average rides costing around ₹25 and taking just 10–15 minutes, SHADE connects colleagues living nearby and turns boring commutes into friendly conversations.',
      author: 'Anitha',
      date: 'February 18, 2024',
      category: 'Work Commute',
      image: '💼',
    },
    {
      id: 7,
      title: 'SNS Students Beat Missed Bus Stress',
      excerpt:
        'For SNS students, missing the college bus used to be the biggest headache. Now, riders along the Peelamedu to SNS route can quickly book a SHADE ride for about ₹15, with seat‑belt safety and quick arrival. With easy map features and reliable partners, waiting for buses is no longer necessary.',
      author: 'Divya',
      date: 'February 10, 2024',
      category: 'Student Story',
      image: '🚌',
    },
    {
      id: 8,
      title: 'SHADE: Coimbatore\'s Answer to Travel Chaos',
      excerpt:
        'SHADE is not just an app — it is Coimbatore\'s answer to daily travel chaos. With short‑distance rides between Peelamedu, Gandhipuram, Saravanampatti, and RS Puram, people are saving money, time, and the planet. Designed for students and IT professionals, SHADE\'s mission is simple: share rides, reduce congestion, and connect people.',
      author: 'Kavya',
      date: 'February 5, 2024',
      category: 'City Story',
      image: '📍',
    },
    {
      id: 9,
      title: 'GRD College: From Latecomer to On‑Time',
      excerpt:
        'A GRD College student who always reached late because buses were full now shares a SHADE ride with a friend whose route matches perfectly. They start at 7:50, reach by 8:10, and pay just ₹20. No petrol waste, no traffic stress — SHADE has become a reliable local app especially useful for Coimbatore\'s student community.',
      author: 'Meena',
      date: 'January 30, 2024',
      category: 'Student Story',
      image: '📚',
    },
    {
      id: 10,
      title: 'SHADE: Growing Into Coimbatore\'s Trusted Platform',
      excerpt:
        'Started as a simple bike pooling idea for students, SHADE has grown into Coimbatore\'s most trusted ride‑sharing platform. With thousands of monthly rides across colleges like PSG, CIT, KCT, Hindustan and more, ₹15–₹30 trips have replaced costly autos and long jams. Beyond savings, SHADE builds a social circle of like‑minded commuters — a real example of smart mobility in Coimbatore.',
      author: 'Priya',
      date: 'January 25, 2024',
      category: 'Community',
      image: '🤝',
    },
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-20 min-h-screen bg-gradient-to-b from-white via-white to-primary/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-enigma text-secondary mb-6">
            Blog & <span className="text-primary">Community</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-6"></div>
          <p className="text-xl text-gray-700 font-metropolis max-w-2xl mx-auto">
            Stories, experiences, and insights from our SHADE community
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <BlogCard post={post} />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default Blog

