import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { AvatarCircles } from "@/components/ui/avatar-circles";
import { ArrowRight, Star, Moon, Sun } from "lucide-react";

const avatars = [
  { imageUrl: "https://avatars.githubusercontent.com/u/16860528", profileUrl: "https://github.com/dillionverma" },
  { imageUrl: "https://avatars.githubusercontent.com/u/20110627", profileUrl: "https://github.com/tomonarifeehan" },
  { imageUrl: "https://avatars.githubusercontent.com/u/106103625", profileUrl: "https://github.com/BankkRoll" },
  { imageUrl: "https://avatars.githubusercontent.com/u/59228569", profileUrl: "https://github.com/safethecode" },
  { imageUrl: "https://avatars.githubusercontent.com/u/59442788", profileUrl: "https://github.com/sanjay-mali" },
];

const Hero = () => {
  return (
    <section className="min-h-screen pt-24 pb-16 relative overflow-hidden gradient-radial">
      {/* Ambient glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
      
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
                <ArrowRight className="w-5 h-5" />
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
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <span className="text-foreground font-medium">5.0</span>
                <span className="text-muted-foreground text-sm">from 100+ reviews</span>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Right - Horoscope card mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="relative"
          >
            <div className="animate-float">
              <div className="bg-card border border-border rounded-2xl p-6 shadow-2xl glow-primary max-w-md mx-auto">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                      <Moon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Today's Reading</p>
                      <p className="font-semibold text-foreground">November 29, 2025</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <span className="px-3 py-1 text-xs rounded-full bg-secondary text-secondary-foreground">Aries</span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="p-4 bg-secondary/50 rounded-xl">
                    <p className="text-sm text-primary font-medium mb-2">Career Insight</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Mercury's transit through your 10th house brings clarity to professional decisions. Trust your instincts on that proposal.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { label: "Love", value: "85%", icon: "❤️" },
                      { label: "Career", value: "92%", icon: "💼" },
                      { label: "Luck", value: "78%", icon: "🍀" },
                    ].map((item) => (
                      <div key={item.label} className="text-center p-3 bg-secondary/30 rounded-lg">
                        <span className="text-lg">{item.icon}</span>
                        <p className="text-xs text-muted-foreground mt-1">{item.label}</p>
                        <p className="text-sm font-semibold text-foreground">{item.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="mt-6 flex items-center justify-center gap-2 py-3 bg-primary/10 rounded-xl">
                  <Sun className="w-4 h-4 text-primary" />
                  <span className="text-sm text-primary font-medium">View Full Chart</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
