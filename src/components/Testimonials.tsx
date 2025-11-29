import { motion } from "framer-motion";
import React from "react";

const testimonials = [
  {
    text: "Finally, an astrology app that feels intelligent. The AI chat feature is like having a personal astrologer.",
    name: "Sarah M.",
    role: "Marketing Director",
    image: "https://avatars.githubusercontent.com/u/16860528",
  },
  {
    text: "I was skeptical, but the accuracy of the transit predictions has been remarkable. Highly recommend.",
    name: "James K.",
    role: "Software Engineer",
    image: "https://avatars.githubusercontent.com/u/20110627",
  },
  {
    text: "The career insights helped me time my product launch perfectly. Best astrology app I've used.",
    name: "Elena R.",
    role: "Entrepreneur",
    image: "https://avatars.githubusercontent.com/u/106103625",
  },
  {
    text: "AstroAI has completely changed how I plan my week. The insights are spot on!",
    name: "Michael T.",
    role: "Product Manager",
    image: "https://avatars.githubusercontent.com/u/59228569",
  },
  {
    text: "The interface is beautiful and the readings are surprisingly deep. Love it.",
    name: "Jessica L.",
    role: "Designer",
    image: "https://avatars.githubusercontent.com/u/59442788",
  },
  {
    text: "I check this app every morning. It's become a part of my daily routine.",
    name: "David W.",
    role: "Writer",
    image: "https://avatars.githubusercontent.com/u/1",
  },
];

const TestimonialsColumn = (props: {
  className?: string;
  testimonials: typeof testimonials;
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[...new Array(2)].fill(0).map((_, index) => (
          <React.Fragment key={index}>
            {props.testimonials.map(({ text, image, name, role }, i) => (
              <div className="p-6 rounded-3xl border border-border/50 bg-card/50 backdrop-blur-sm shadow-lg shadow-primary/5 w-full max-w-sm" key={i}>
                <div className="text-foreground/80 leading-relaxed">{text}</div>
                <div className="flex items-center gap-3 mt-5">
                  <img
                    width={40}
                    height={40}
                    src={image}
                    alt={name}
                    className="h-10 w-10 rounded-full border border-border"
                  />
                  <div className="flex flex-col">
                    <div className="font-medium tracking-tight leading-5 text-foreground">{name}</div>
                    <div className="leading-5 text-muted-foreground text-sm tracking-tight">{role}</div>
                  </div>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};

const Testimonials = () => {
  const firstColumn = testimonials.slice(0, 3);
  const secondColumn = testimonials.slice(3, 6);
  const thirdColumn = testimonials.slice(0, 3);

  return (
    <section className="py-24 relative overflow-hidden bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-3 text-sm tracking-wide uppercase">Testimonials</p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Loved by thousands
          </h2>
          <p className="text-muted-foreground mt-4 text-lg max-w-2xl mx-auto">
            See what our community has to say about their journey with AstroAI.
          </p>
        </div>
        
        <div className="flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
            <TestimonialsColumn testimonials={firstColumn} duration={15} className="hidden md:block" />
            <TestimonialsColumn testimonials={secondColumn} duration={19} className="" />
            <TestimonialsColumn testimonials={thirdColumn} duration={17} className="hidden lg:block" />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
