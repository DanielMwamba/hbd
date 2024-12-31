import { motion } from "framer-motion";
import { Play, Pause } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";

interface AudioPlayerProps {
  isPlaying: boolean;
  onPlayPause: () => void;
  showMusicPrompt: boolean;
  setShowMusicPrompt: (show: boolean) => void;
}

export default function AudioPlayer({
  isPlaying,
  onPlayPause,
  showMusicPrompt,
  setShowMusicPrompt,
}: AudioPlayerProps) {
  const handlePlay = () => {
    onPlayPause();
    setShowMusicPrompt(false);
  };

  return (
    <>
      <motion.div
        className="fixed bottom-4 right-4"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Button
          onClick={onPlayPause}
          variant="secondary"
          size="icon"
          className="rounded-full shadow-lg bg-white text-primary hover:bg-primary hover:text-white"
        >
          {isPlaying ? (
            <Pause className="h-6 w-6" />
          ) : (
            <Play className="h-6 w-6" />
          )}
        </Button>
      </motion.div>
      <Dialog open={showMusicPrompt} onOpenChange={setShowMusicPrompt}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Voulez-vous mettre de la musique ?</DialogTitle>
            <DialogDescription>
              Nous avons préparé une chanson spéciale pour l&apos;occasion !
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button onClick={() => setShowMusicPrompt(false)} variant="outline">
              Non merci
            </Button>
            <Button onClick={handlePlay}>Oui, jouez la musique !</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
