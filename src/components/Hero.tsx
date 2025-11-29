import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { AvatarCircles } from "@/components/ui/avatar-circles";
import { Icons } from "@/components/ui/icons";
import { Globe } from "@/components/ui/globe";
import { BeamsBackground } from "@/components/ui/beams-background";

const avatars = [
  { imageUrl: "https://avatars.githubusercontent.com/u/16860528", profileUrl: "https://github.com/dillionverma" },
  { imageUrl: "https://avatars.githubusercontent.com/u/20110627", profileUrl: "https://github.com/tomonarifeehan" },
  { imageUrl: "https://avatars.githubusercontent.com/u/106103625", profileUrl: "https://github.com/BankkRoll" },
  { imageUrl: "https://avatars.githubusercontent.com/u/59228569", profileUrl: "https://github.com/safethecode" },
  { imageUrl: "https://avatars.githubusercontent.com/u/59442788", profileUrl: "https://github.com/sanjay-mali" },
];

const Hero = () => {
  return (
    <BeamsBackground className="pt-24 pb-16">
      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-8rem)]">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
              Your Astrology,{" "}
              <span className="text-primary">Reimagined</span> with AI.
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
              Accurate horoscopes based on your real planetary positions — not generic zodiac text.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero">
                Get Started
                <Icons.arrowRight className="w-5 h-5" strokeWidth={1.5} />
              </Button>
              <Button variant="heroOutline">
                Try Demo
              </Button>
            </div>
            
            {/* Social proof */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex items-center gap-4 pt-4"
            >
              <AvatarCircles numPeople={99} avatarUrls={avatars} />
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Icons.star key={i} className="w-4 h-4 fill-primary text-primary" strokeWidth={1.5} />
                  ))}
                </div>
                <span className="text-foreground font-medium">5.0</span>
                <span className="text-muted-foreground text-sm">from 100+ reviews</span>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Right - Globe Visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="relative flex items-center justify-center"
          >
             <div className="relative w-full max-w-[600px] aspect-square">
                <Globe className="w-full h-full" />
                <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))]" />
             </div>
          </motion.div>
        </div>
      </div>
    </BeamsBackground>
  );
};

export default Hero;
