import { motion } from "framer-motion";
import { Check } from "lucide-react";

const benefits = [
  {
    title: "Not Generic Astrology",
    description: "Actual astronomical math combined with advanced AI interpretation.",
  },
  {
    title: "Real Planetary Data",
    description: "We use precise ephemeris calculations, not oversimplified sun-sign readings.",
  },
  {
    title: "Clear, Actionable Predictions",
    description: "Get specific guidance you can apply to your daily decisions.",
  },
  {
    title: "Private & Secure",
    description: "Your birth data is encrypted and never shared with third parties.",
  },
];

const WhyAstroAI = () => {
  return (
    <section id="why" className="py-24 relative">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-primary font-medium mb-3 text-sm tracking-wide uppercase">Why AstroAI</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              Astrology backed by science & AI
            </h2>
            
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{benefit.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* UI Preview mockup */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-card border border-border rounded-2xl p-6 shadow-xl">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-destructive/50" />
                <div className="w-3 h-3 rounded-full bg-primary/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
              </div>
              
              <div className="space-y-4">
                <div className="h-8 bg-secondary rounded-lg w-3/4" />
                <div className="h-4 bg-secondary/60 rounded w-full" />
                <div className="h-4 bg-secondary/60 rounded w-5/6" />
                
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="aspect-square bg-secondary/40 rounded-xl flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full border-4 border-primary/30 border-t-primary animate-spin" style={{ animationDuration: '3s' }} />
                  </div>
                  <div className="space-y-3">
                    <div className="h-4 bg-secondary rounded w-full" />
                    <div className="h-4 bg-secondary/70 rounded w-4/5" />
                    <div className="h-4 bg-secondary/50 rounded w-3/5" />
                    <div className="h-8 bg-primary/20 rounded-lg w-full mt-4" />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/10 rounded-2xl blur-xl animate-pulse-glow" />
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-accent/10 rounded-2xl blur-xl animate-pulse-glow" style={{ animationDelay: '1s' }} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyAstroAI;
