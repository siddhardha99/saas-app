import CompanionCard from "@/components/CompanionCard";
import CompanionsList from "@/components/CompanionsList";
import CTA from "@/components/CTA";
import {recentSessions} from "@/constants";
import {getAllCompanions, getRecentSessions} from "@/lib/actions/companion.actions";
import {getSubjectColor} from "@/lib/utils";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";

const Page = async () => {
    const { userId } = await auth();
    const companions = userId ? await getAllCompanions({ limit: 3 }) : [];
    const recentSessionsCompanions = userId ? await getRecentSessions(10) : [];

  return (
    <main>
        {userId ? (
            // Signed in - show companions dashboard
            <>
                <h1>Popular Companions</h1>

                <section className="home-section">
                    {companions.map((companion) => (
                        <CompanionCard
                            key={companion.id}
                            {...companion}
                            color={getSubjectColor(companion.subject)}
                        />
                    ))}
                </section>

                <section className="home-section">
                    <CompanionsList
                        title="Recently completed sessions"
                        companions={recentSessionsCompanions}
                        classNames="w-2/3 max-lg:w-full"
                    />
                    <CTA />
                </section>
            </>
        ) : (
            // Signed out - show landing page
            <>
                {/* Hero Section */}
                <section className="bg-white border border-black rounded-4xl p-12 mb-8 text-center">
                    <h1 className="text-5xl font-bold text-black mb-4">AI Learning Companions</h1>
                    <div className="subject-badge text-sm w-fit mx-auto mb-4">
                        🧸 Software Prototype for Testing Hardware Plush Toy Concept
                    </div>
                    <p className="text-xl text-black mb-6 max-w-2xl mx-auto">
                        Interactive voice tutoring sessions with AI companions across math, science, coding, language, history, and economics
                    </p>
                    <div className="flex gap-4 justify-center max-sm:flex-col max-sm:items-center">
                        <Link href="/sign-in">
                            <button className="btn-primary">
                                Browse Companions
                            </button>
                        </Link>
                        <Link href="/sign-in">
                            <button className="btn-signin">
                                Start Session
                            </button>
                        </Link>
                    </div>
                </section>

                {/* Features Section */}
                <section className="mb-8">
                    <h2 className="text-3xl font-bold text-center mb-4">Why Choose AI Companions?</h2>
                    <p className="text-center text-black mb-8">Personalized learning through interactive voice sessions</p>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <div className="companion-card" style={{backgroundColor: "#BDE7FF"}}>
                            <div className="subject-badge">Voice Learning</div>
                            <h3 className="font-bold text-2xl">🎙️ Interactive</h3>
                            <p className="text-sm">Real-time voice conversations with AI tutors for natural learning</p>
                        </div>
                        
                        <div className="companion-card" style={{backgroundColor: "#C8FFDF"}}>
                            <div className="subject-badge">Multiple Subjects</div>
                            <h3 className="font-bold text-2xl">📚 Comprehensive</h3>
                            <p className="text-sm">Math, Science, Coding, Language, History, and Economics tutors</p>
                        </div>
                        
                        <div className="companion-card" style={{backgroundColor: "#E5D0FF"}}>
                            <div className="subject-badge">AI-Powered</div>
                            <h3 className="font-bold text-2xl">🤖 Smart</h3>
                            <p className="text-sm">GPT-4 powered tutors with personalized teaching styles</p>
                        </div>
                        
                        <div className="companion-card" style={{backgroundColor: "#FFC8E4"}}>
                            <div className="subject-badge">Customizable</div>
                            <h3 className="font-bold text-2xl">⚙️ Personal</h3>
                            <p className="text-sm">Choose voice style (casual/formal) and gender preferences</p>
                        </div>
                    </div>
                </section>

                {/* How It Works */}
                <section className="mb-8 bg-white border border-black rounded-4xl p-8">
                    <h2 className="text-3xl font-bold text-center mb-8">How It Works</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
                        <div className="bg-background border border-black rounded-4xl p-4">
                            <h4 className="font-bold text-lg mb-2">1. Choose Companion</h4>
                            <p className="text-black text-sm">Select from subject-specific AI tutors</p>
                        </div>
                        <div className="bg-background border border-black rounded-4xl p-4">
                            <h4 className="font-bold text-lg mb-2">2. Start Voice Session</h4>
                            <p className="text-black text-sm">Begin real-time conversation</p>
                        </div>
                        <div className="bg-background border border-black rounded-4xl p-4">
                            <h4 className="font-bold text-lg mb-2">3. Interactive Learning</h4>
                            <p className="text-black text-sm">Speak naturally with your tutor</p>
                        </div>
                        <div className="bg-background border border-black rounded-4xl p-4">
                            <h4 className="font-bold text-lg mb-2">4. Track Progress</h4>
                            <p className="text-black text-sm">View session history and transcripts</p>
                        </div>
                    </div>
                </section>

                {/* About Section */}
                <section className="mb-8">
                    <h2 className="text-3xl font-bold text-center mb-8">What we offer</h2>
                    <div className="bg-white border border-black rounded-4xl p-8 mb-8 text-center">
                        <p className="text-lg text-black mb-6">
                            This software prototype demonstrates the AI tutoring capabilities we plan to integrate into physical plush toys. Experience how natural voice conversations with AI companions could revolutionize educational toys and interactive learning.
                        </p>
                        <div className="grid md:grid-cols-3 gap-4 text-center">
                            <div className="subject-badge">Real-time voice tutoring</div>
                            <div className="subject-badge">Hardware prototype testing</div>
                            <div className="subject-badge">Interactive plush toy concept</div>
                        </div>
                    </div>

                    <h3 className="text-2xl font-bold text-center mb-6">Available Subjects</h3>
                    <div className="grid md:grid-cols-3 gap-4">
                        <div className="companion-card" style={{backgroundColor: "#FFDA6E"}}>
                            <div className="subject-badge">📊 Mathematics</div>
                            <p className="text-sm">Algebra, calculus, statistics, and more</p>
                        </div>
                        <div className="companion-card" style={{backgroundColor: "#E5D0FF"}}>
                            <div className="subject-badge">🔬 Science</div>
                            <p className="text-sm">Physics, chemistry, biology concepts</p>
                        </div>
                        <div className="companion-card" style={{backgroundColor: "#FFC8E4"}}>
                            <div className="subject-badge">💻 Coding</div>
                            <p className="text-sm">Programming concepts and logic</p>
                        </div>
                        <div className="companion-card" style={{backgroundColor: "#BDE7FF"}}>
                            <div className="subject-badge">📖 Language</div>
                            <p className="text-sm">Literature, writing, and communication</p>
                        </div>
                        <div className="companion-card" style={{backgroundColor: "#FFECC8"}}>
                            <div className="subject-badge">🏛️ History</div>
                            <p className="text-sm">World events and historical analysis</p>
                        </div>
                        <div className="companion-card" style={{backgroundColor: "#C8FFDF"}}>
                            <div className="subject-badge">💰 Economics</div>
                            <p className="text-sm">Market principles and economic theory</p>
                        </div>
                    </div>
                </section>

                {/* Team Section */}
                <section className="mb-8">
                    <h2 className="text-3xl font-bold text-center mb-4">Meet the Co-Founders</h2>
                    <p className="text-center text-black mb-8">Combining expertise in technology, mental health, and artificial intelligence to create meaningful emotional learning experiences</p>
                    
                    
                    <div className="grid md:grid-cols-3 gap-4">
                         <div className="companion-card" style={{backgroundColor: "#E5D0FF"}}>
                            <div className="subject-badge">AI Engineer</div>
                           
                            <h3 className="font-bold text-2xl mb-2">Krishna Mudunuri</h3>
                            <p className="text-sm mb-4">MS in Artificial Intelligence student at University of North Texas</p>
                            <div className="text-xs">
                                <div className="subject-badge mb-1">Software Developer</div>
                                <div className="subject-badge mb-1">AI Systems</div>
                                <div className="subject-badge">Product Design</div>
                            </div>
                        </div>
                        
                        <div className="companion-card" style={{backgroundColor: "#BDE7FF"}}>
                            <div className="subject-badge">Software Engineer</div>
                            
                            <h3 className="font-bold text-2xl mb-2">Yashwanth Nadella</h3>
                            <p className="text-sm mb-4">MS in Computer Science student at Johns Hopkins</p>
                            <div className="text-xs">
                                <div className="subject-badge mb-1">System Architecture</div>
                                <div className="subject-badge mb-1">Full Stack Development</div>
                                <div className="subject-badge">Product Design</div>
                            </div>
                        </div>

                        <div className="companion-card" style={{backgroundColor: "#C8FFDF"}}>
                            <div className="subject-badge">Mental Health Expert</div>
                            
                            <h3 className="font-bold text-2xl mb-2">Stephen Cheng</h3>
                            <p className="text-sm mb-4">Resident Psychiatrist at University of Maryland / Sheppard Pratt</p>
                            <div className="text-xs">
                                <div className="subject-badge mb-1">Child Psychology</div>
                                <div className="subject-badge mb-1">Therapeutic Design</div>
                                <div className="subject-badge">Healthcare Innovation</div>
                            </div>
                        </div>

                    
                    </div>
                </section>

                {/* CTA Section */}
                <section className="cta-section mx-auto">
                    <div className="cta-badge">Ready to Start Learning?</div>
                    <h2 className="text-3xl font-bold mb-4">Get Started Today</h2>
                    <p className="text-lg mb-6">Sign in to create your first AI companion and begin interactive voice tutoring sessions</p>
                    <Link href="/sign-in">
                        <button className="btn-primary">
                            Get Started
                        </button>
                    </Link>
                </section>

                {/* Footer */}
                <footer className="border-t border-black pt-8 pb-4 bg-white">
                    <div className="grid md:grid-cols-4 gap-4 mb-8">
                        <div>
                            <h4 className="font-bold mb-4">Platform</h4>
                            <div className="space-y-2 text-sm">
                                <p>Companions</p>
                                <p>Sessions</p>
                                <p>Subjects</p>
                            </div>
                        </div>
                        <div>
                            <h4 className="font-bold mb-4">Features</h4>
                            <div className="space-y-2 text-sm">
                                <p>Voice Tutoring</p>
                                <p>AI Companions</p>
                                <p>Session History</p>
                            </div>
                        </div>
                        <div>
                            <h4 className="font-bold mb-4">Support</h4>
                            <div className="space-y-2 text-sm">
                                <p>Help Center</p>
                                <p>Tutorials</p>
                                <p>Contact</p>
                            </div>
                        </div>
                        <div>
                            <h4 className="font-bold mb-4">Legal</h4>
                            <div className="space-y-2 text-sm">
                                <p>Privacy</p>
                                <p>Terms</p>
                                <p>Security</p>
                            </div>
                        </div>
                    </div>
                    <div className="text-center text-sm border-t border-black pt-4">
                        © 2025 AI Learning Companions. All rights reserved.
                    </div>
                </footer>
            </>
        )}
    </main>
  )
}

export default Page