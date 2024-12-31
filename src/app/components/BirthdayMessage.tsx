import { motion } from 'framer-motion'

export default function BirthdayMessage() {
  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="text-center"
    >
      <motion.h1 
        className="text-4xl font-bold text-primary mb-4"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        Joyeux Anniversaire, Ange Maguimwe !
      </motion.h1>
      <motion.p 
        className="text-xl text-muted-foreground"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        Ange, tu es une amie extraordinaire et je suis si heureux de célébrer cette journée spéciale avec toi. Que cette nouvelle année t&apos;apporte tout le bonheur que tu mérites !
      </motion.p>
    </motion.div>
  )
}

