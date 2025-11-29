import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Icons } from "@/components/ui/icons"
import { ReactNode } from 'react'

export default function HowItWorks() {
    return (
        <section id="how-it-works" className="py-16 md:py-32 bg-background">
            <div className="container mx-auto max-w-5xl px-6">
                <div className="text-center mb-16">
                    <p className="text-primary font-medium mb-3 text-sm tracking-wide uppercase">How It Works</p>
                    <h2 className="text-balance text-3xl md:text-5xl font-bold text-foreground">Three simple steps to clarity</h2>
                    <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">Discover your cosmic path with our advanced AI astrology engine.</p>
                </div>
                
                <div className="mx-auto mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:mt-16">
                    <Card className="group border-border/50 bg-card/50 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-300">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <Icons.zap className="size-6 text-primary" strokeWidth={1.5} aria-hidden />
                            </CardDecorator>

                            <h3 className="mt-6 font-medium text-xl text-foreground">Enter Your Details</h3>
                        </CardHeader>

                        <CardContent>
                            <p className="text-sm text-muted-foreground leading-relaxed">Simply enter your birth date, time, and location. We generate your full natal chart using accurate ephemeris data.</p>
                        </CardContent>
                    </Card>

                    <Card className="group border-border/50 bg-card/50 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-300">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <Icons.settings2 className="size-6 text-primary" strokeWidth={1.5} aria-hidden />
                            </CardDecorator>

                            <h3 className="mt-6 font-medium text-xl text-foreground">AI Analysis</h3>
                        </CardHeader>

                        <CardContent>
                            <p className="text-sm text-muted-foreground leading-relaxed">Our advanced AI engine analyzes your chart, comparing it with live planetary positions to find unique patterns.</p>
                        </CardContent>
                    </Card>

                    <Card className="group border-border/50 bg-card/50 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-300">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <Icons.sparkles className="size-6 text-primary" strokeWidth={1.5} aria-hidden />
                            </CardDecorator>

                            <h3 className="mt-6 font-medium text-xl text-foreground">Get Insights</h3>
                        </CardHeader>

                        <CardContent>
                            <p className="text-sm text-muted-foreground leading-relaxed">Receive personalized daily, weekly, and monthly predictions, along with a chat assistant to answer your questions.</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}

const CardDecorator = ({ children }: { children: ReactNode }) => (
    <div aria-hidden className="relative mx-auto size-36 [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]">
        <div className="absolute inset-0 [--border:black] dark:[--border:white] bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:24px_24px] opacity-10"/>
        <div className="bg-background absolute inset-0 m-auto flex size-12 items-center justify-center border-t border-l border-border rounded-xl shadow-sm">{children}</div>
    </div>
)
