"use client"

import React from "react"
import { Warp } from "@paper-design/shaders-react"
import React from "react"
import { Warp } from "@paper-design/shaders-react"
import { Icons } from "@/components/ui/icons"
import { ArrowRight } from "lucide-react"

interface Feature {
  title: string
  description: string
  icon: React.ReactNode
}

const features: Feature[] = [
  {
    title: "Daily / Weekly / Monthly / Yearly",
    description: "Comprehensive horoscopes for every timeline you need. Get insights for today, this week, this month, or the entire year ahead.",
    icon: <Icons.calendar className="w-12 h-12 text-white" strokeWidth={1.5} />,
  },
  {
    title: "AI Chat Mode",
    description: "Ask questions about your chart and get instant insights. Our AI astrologer is ready to answer your deepest queries 24/7.",
    icon: <Icons.messageCircle className="w-12 h-12 text-white" strokeWidth={1.5} />,
  },
  {
    title: "Love & Relationships",
    description: "Deep compatibility analysis and romantic forecasts. Understand your connection with partners through synastry readings.",
    icon: <Icons.heart className="w-12 h-12 text-white" strokeWidth={1.5} />,
  },
  {
    title: "Career & Finance",
    description: "Professional guidance based on planetary transits. Time your career moves and financial decisions with cosmic support.",
    icon: <Icons.trendingUp className="w-12 h-12 text-white" strokeWidth={1.5} />,
  },
  {
    title: "Real-Time Planet Positions",
    description: "Accurate astronomical data for precise predictions. We track the actual movement of planets to give you real-time insights.",
    icon: <Icons.globe className="w-12 h-12 text-white" strokeWidth={1.5} />,
  },
  {
    title: "Installable PWA",
    description: "Add to your home screen for instant access. Enjoy a native app-like experience without the hassle of app store downloads.",
    icon: <Icons.smartphone className="w-12 h-12 text-white" strokeWidth={1.5} />,
  },
]

export default function Features() {
  const getShaderConfig = (index: number) => {
    const configs = [
      {
        proportion: 0.3,
        softness: 0.8,
        distortion: 0.15,
        swirl: 0.6,
        swirlIterations: 8,
        shape: "checks" as const,
        shapeScale: 0.08,
        colors: ["hsl(280, 100%, 30%)", "hsl(320, 100%, 60%)", "hsl(340, 90%, 40%)", "hsl(300, 100%, 70%)"],
      },
      {
        proportion: 0.4,
        softness: 1.2,
        distortion: 0.2,
        swirl: 0.9,
        swirlIterations: 12,
        shape: "dots" as const,
        shapeScale: 0.12,
        colors: ["hsl(200, 100%, 25%)", "hsl(180, 100%, 65%)", "hsl(160, 90%, 35%)", "hsl(190, 100%, 75%)"],
      },
      {
        proportion: 0.35,
        softness: 0.9,
        distortion: 0.18,
        swirl: 0.7,
        swirlIterations: 10,
        shape: "checks" as const,
        shapeScale: 0.1,
        colors: ["hsl(120, 100%, 25%)", "hsl(140, 100%, 60%)", "hsl(100, 90%, 30%)", "hsl(130, 100%, 70%)"],
      },
      {
        proportion: 0.45,
        softness: 1.1,
        distortion: 0.22,
        swirl: 0.8,
        swirlIterations: 15,
        shape: "dots" as const,
        shapeScale: 0.09,
        colors: ["hsl(30, 100%, 35%)", "hsl(50, 100%, 65%)", "hsl(40, 90%, 40%)", "hsl(45, 100%, 75%)"],
      },
      {
        proportion: 0.38,
        softness: 0.95,
        distortion: 0.16,
        swirl: 0.85,
        swirlIterations: 11,
        shape: "checks" as const,
        shapeScale: 0.11,
        colors: ["hsl(250, 100%, 30%)", "hsl(270, 100%, 65%)", "hsl(260, 90%, 35%)", "hsl(265, 100%, 70%)"],
      },
      {
        proportion: 0.42,
        softness: 1.0,
        distortion: 0.19,
        swirl: 0.75,
        swirlIterations: 9,
        shape: "dots" as const,
        shapeScale: 0.13,
        colors: ["hsl(330, 100%, 30%)", "hsl(350, 100%, 60%)", "hsl(340, 90%, 35%)", "hsl(345, 100%, 75%)"],
      },
    ]
    return configs[index % configs.length]
  }

  return (
    <section id="features" className="min-h-screen py-24 px-4 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-3 text-sm tracking-wide uppercase">Features</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Powerful Features</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Everything you need for cosmic clarity, powered by advanced AI and accurate astronomical data.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const shaderConfig = getShaderConfig(index)
            return (
              <div key={index} className="relative h-96 group">
                <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
                  <Warp
                    style={{ height: "100%", width: "100%" }}
                    proportion={shaderConfig.proportion}
                    softness={shaderConfig.softness}
                    distortion={shaderConfig.distortion}
                    swirl={shaderConfig.swirl}
                    swirlIterations={shaderConfig.swirlIterations}
                    shape={shaderConfig.shape}
                    shapeScale={shaderConfig.shapeScale}
                    scale={1}
                    rotation={0}
                    speed={0.8}
                    colors={shaderConfig.colors}
                  />
                </div>

                <div className="relative z-10 p-8 rounded-3xl h-full flex flex-col bg-black/60 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-colors">
                  <div className="mb-6 filter drop-shadow-lg p-3 bg-white/10 rounded-2xl w-fit backdrop-blur-md border border-white/10">
                    {feature.icon}
                  </div>

                  <h3 className="text-2xl font-bold mb-4 text-white">{feature.title}</h3>

                  <p className="leading-relaxed flex-grow text-gray-200 font-medium text-sm">{feature.description}</p>

                  <div className="mt-6 flex items-center text-sm font-bold text-white/90 group-hover:text-white transition-colors">
                    <span className="mr-2">Learn more</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
