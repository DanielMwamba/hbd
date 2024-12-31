'use client'

import { motion } from 'framer-motion'
import { BombIcon as Balloon } from 'lucide-react'
import { useEffect, useState } from 'react'

const balloonColors = ['text-red-500', 'text-blue-500', 'text-green-500', 'text-yellow-500', 'text-purple-500']

export default function Balloons() {
  const [balloons, setBalloons] = useState<number[]>([])

  useEffect(() => {
    setBalloons(Array.from({ length: 10 }, () => Math.random() * 100))
  }, [])

  return (
    <>
      {balloons.map((position, index) => (
        <motion.div
          key={index}
          className={`absolute ${balloonColors[index % balloonColors.length]}`}
          initial={{ y: '100vh', x: `${position}vw` }}
          animate={{ y: '-20vh' }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'linear',
          }}
        >
          <Balloon size={32} />
        </motion.div>
      ))}
    </>
  )
}

