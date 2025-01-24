"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Heart } from "lucide-react"

export const NotloggedIn: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="my-4 mx-2 rounded-xl overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div
        className="relative p-6 bg-gradient-to-r from-purple-400 to-pink-500 backdrop-blur-md bg-opacity-30"
        style={{
          boxShadow: isHovered
            ? "0 10px 30px -10px rgba(236, 72, 153, 0.3)"
            : "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div
          className="absolute inset-0 bg-white opacity-10 z-0"
          initial={false}
          animate={{
            scale: isHovered ? 1.05 : 1,
          }}
          transition={{ duration: 0.3 }}
        />
        <div className="relative z-10 flex items-center justify-center gap-3">
          <motion.div animate={{ scale: isHovered ? 1.1 : 1 }} transition={{ duration: 0.3 }}>
            <Heart className="w-6 h-6 text-white" />
          </motion.div>
          <span className="text-lg font-semibold text-white">Log in to like posts</span>
        </div>
        <motion.button
          className="mt-4 w-full py-2 px-4 bg-white text-purple-600 rounded-full font-semibold transition-colors duration-300 hover:bg-purple-100"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            // Add your login logic here
            console.log("Redirecting to login page...")
          }}
        >
          Login Now
        </motion.button>
      </div>
    </motion.div>
  )
}

