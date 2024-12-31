import { motion } from 'framer-motion'
import { Cake } from 'lucide-react'

export default function BirthdayCake() {
  return (
    <motion.div
      className="absolute top-4 left-4 bg-white rounded-full p-3 shadow-lg"
      initial={{ rotate: -10 }}
      animate={{ rotate: 10 }}
      transition={{ repeat: Infinity, duration: 2, repeatType: 'reverse' }}
    >
      <Cake size={48} className="text-primary" />
    </motion.div>
  )
}

