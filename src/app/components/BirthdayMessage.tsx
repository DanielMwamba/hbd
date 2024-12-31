import { motion } from "framer-motion";
import { dancingScript } from "../fonts";

const letterAnimation = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

export default function BirthdayMessage() {
  const title = "Joyeux Anniversaire, Ange Maguimwe!";

  return (
    <motion.div initial="hidden" animate="visible" className="text-center">
      <motion.h1
        className={`text-5xl font-bold text-primary mb-6 ${dancingScript.className}`}
      >
        {title.split("").map((char, index) => (
          <motion.span
            key={`${char}-${index}`}
            variants={letterAnimation}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {char}
          </motion.span>
        ))}
      </motion.h1>
      <motion.p
        className="text-xl text-muted-foreground"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
      >
        Ange, tu es une amie extraordinaire et je suis si heureux de célébrer
        cette journée spéciale avec toi. Que cette nouvelle année t&apos;apporte
        tout le bonheur que tu mérites !
      </motion.p>
    </motion.div>
  );
}
