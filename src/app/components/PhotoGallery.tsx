'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"

interface Photo {
  src: string
  width: number
  height: number
}

interface PhotoGalleryProps {
  photos: Photo[]
}

export default function PhotoGallery({ photos }: PhotoGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextPhoto = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length)
  }

  const prevPhoto = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + photos.length) % photos.length)
  }

  return (
    <div className="relative w-full max-w-2xl aspect-[4/3] mb-8">
      <AnimatePresence mode="wait">
        <motion.div
          key={photos[currentIndex].src}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="relative w-full h-full"
        >
          <Image
            src={photos[currentIndex].src}
            alt={`Photo souvenir ${currentIndex + 1}`}
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-lg"
          />
        </motion.div>
      </AnimatePresence>
      <Button
        variant="secondary"
        size="icon"
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white/80 hover:bg-white"
        onClick={prevPhoto}
        aria-label="Photo précédente"
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      <Button
        variant="secondary"
        size="icon"
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white/80 hover:bg-white"
        onClick={nextPhoto}
        aria-label="Photo suivante"
      >
        <ChevronRight className="h-6 w-6" />
      </Button>
    </div>
  )
}

