import { motion } from "framer-motion";
import { Calendar, MessageCircle, Heart, TrendingUp, Globe, Smartphone, Sparkles, Moon } from "lucide-react";

const features = [
  {
    icon: Calendar,
    title: "Daily / Weekly / Monthly / Yearly",
    description: "Comprehensive horoscopes for every timeline you need.",
  },
  {
    icon: MessageCircle,
    title: "AI Chat Mode",
    description: "Ask questions about your chart and get instant insights.",
  },
  {
    icon: Heart,
    title: "Love & Relationships",
    description: "Deep compatibility analysis and romantic forecasts.",
  },
  {
    icon: TrendingUp,
    title: "Career & Finance",
    description: "Professional guidance based on planetary transits.",
  },
  {
    icon: Globe,
    title: "Real-Time Planet Positions",
    description: "Accurate astronomical data for precise predictions.",
  },
  {
    icon: Smartphone,
    title: "Installable PWA",
    description: "Add to your home screen for instant access.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 relative">
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium mb-3 text-sm tracking-wide uppercase">Features</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Everything you need for cosmic clarity
          </h2>
        </motion.div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
