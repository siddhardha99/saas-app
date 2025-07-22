import CompanionCard from "@/components/CompanionCard";
import CompanionsList from "@/components/CompanionsList";
import CTA from "@/components/CTA";
import {recentSessions} from "@/constants";
import {getAllCompanions, getRecentSessions} from "@/lib/actions/companion.actions";
import {getSubjectColor} from "@/lib/utils";

const Page = async () => {
    const companions = await getAllCompanions({ limit: 3 });
    const recentSessionsCompanions = await getRecentSessions(10);

  return (
    <main>
        {/* Hero Section for YIPI BEAR */}
        <section className="hero-section bg-gradient-to-r from-blue-100 to-purple-100 p-8 rounded-xl mb-8">
            <h1 className="text-4xl font-bold text-center mb-4">YIPI BEAR</h1>
            <div className="prototype-badge text-sm bg-yellow-300 text-yellow-800 px-3 py-1 rounded-full w-fit mx-auto mb-4">
                This is a Software Prototype for Physical Toy Testing
            </div>

            <div className="product-overview max-w-3xl mx-auto text-center mb-6">
                <p className="text-lg mb-4">
                    A smart, interactive plush toy that helps children navigate life's challenges through therapeutic storytelling and mental health monitoring.
                </p>
                <p>
                    Unlike traditional toys, YIPI BEAR uses AI-powered conversational capabilities to engage children in meaningful, age-appropriate conversations while providing parents and health experts with insights into the child's emotional well-being.
                </p>
            </div>

            {/* You can add an image of the bear here if available */}
            {/* <Image src="/images/yipi-bear.png" alt="YIPI BEAR" width={300} height={300} className="mx-auto" /> */}
        </section>
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
    </main>
  )
}

export default Page