import { motion } from 'framer-motion'
import { FaCalendarAlt, FaUser, FaTag } from 'react-icons/fa'

const BlogCard = ({ post }) => {
  return (
    <motion.article
      whileHover={{ y: -8 }}
      className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 h-full flex flex-col"
    >
      <div className="h-48 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center text-6xl">
        {post.image}
      </div>
      
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex items-center space-x-4 mb-3 text-sm text-gray-600">
          <span className="flex items-center space-x-1">
            <FaTag className="text-primary" />
            <span className="font-metropolis">{post.category}</span>
          </span>
        </div>
        
        <h2 className="text-2xl font-enigma text-secondary mb-3">
          {post.title}
        </h2>
        
        <p className="text-gray-700 font-metropolis mb-4 flex-1 leading-relaxed">
          {post.excerpt}
        </p>
        
        <div className="flex items-center justify-between text-sm text-gray-600 pt-4 border-t border-gray-200">
          <span className="flex items-center space-x-1">
            <FaUser className="text-primary" />
            <span className="font-metropolis">{post.author}</span>
          </span>
          <span className="flex items-center space-x-1">
            <FaCalendarAlt className="text-primary" />
            <span className="font-metropolis">{post.date}</span>
          </span>
        </div>
      </div>
    </motion.article>
  )
}

export default BlogCard

