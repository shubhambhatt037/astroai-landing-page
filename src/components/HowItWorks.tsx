import { motion } from "framer-motion";
import { UserCircle, Cpu, Sparkles } from "lucide-react";

const steps = [
  {
    icon: UserCircle,
    title: "Enter Your Birth Details",
    description: "We generate your full natal chart using accurate ephemeris data.",
    step: "01",
  },
  {
    icon: Cpu,
    title: "AI Analyzes Your Chart",
    description: "Our engine compares your chart with live planetary positions.",
    step: "02",
  },
  {
    icon: Sparkles,
    title: "Get Personalized Insights",
    description: "Daily, weekly, monthly, yearly predictions — and a chat assistant.",
    step: "03",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 relative">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium mb-3 text-sm tracking-wide uppercase">How It Works</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Three simple steps to clarity
          </h2>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative group"
            >
              <div className="p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-500">
                <span className="text-6xl font-bold text-secondary/80 absolute top-6 right-6">
                  {step.step}
                </span>
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <step.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
