'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import BirthdayMessage from './components/BirthdayMessage'
import PhotoGallery from './components/PhotoGallery'
import AudioPlayer from './components/AudioPlayer'
import BirthdayCake from './components/BirthdayCake'
import Balloons from './components/Ballons'
import { Card, CardContent } from "@/components/ui/card"

const photos = [
  { src: '/a.jpg', width: 600, height: 400 },
  { src: '/b.jpg', width: 600, height: 400 },
  { src: '/c.jpg', width: 600, height: 400 },
  { src: '/d.jpg', width: 600, height: 400 },
  { src: '/e.jpg', width: 600, height: 400 },
  { src: '/f.jpg', width: 600, height: 400 },
]

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [showMusicPrompt, setShowMusicPrompt] = useState(true)
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch(error => console.error("Erreur de lecture audio:", error))
      } else {
        audioRef.current.pause()
      }
    }
  }, [isPlaying])

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying)
    setShowMusicPrompt(false)
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="min-h-screen bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 overflow-hidden"
    >
      <Balloons />
      <main className="container mx-auto px-4 py-8 relative flex flex-col items-center justify-center min-h-screen">
        <BirthdayCake />
        <Card className="w-full max-w-2xl mb-8 bg-white/80 backdrop-blur-sm">
          <CardContent className="p-6">
            <BirthdayMessage />
          </CardContent>
        </Card>
        <PhotoGallery photos={photos} />
        <AudioPlayer 
          isPlaying={isPlaying} 
          onPlayPause={handlePlayPause}
          showMusicPrompt={showMusicPrompt}
          setShowMusicPrompt={setShowMusicPrompt}
        />
        <audio ref={audioRef} loop>
          <source src="/Happy.mp3" type="audio/mpeg" />
          Votre navigateur ne supporte pas l&apos;élément audio.
        </audio>
      </main>
    </motion.div>
  )
}

