import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import StorySection from "@/components/StorySection";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";
import { prisma } from "@/lib/prisma";

export default async function Home() {
  let stories = [];
  try {
    // Fetch stories from database, ordered by date descending
    stories = await prisma.story.findMany({
      orderBy: { date: 'desc' },
    });
  } catch (error) {
    console.error("Database fetch failed, using empty stories for now:", error);
  }

  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <StorySection stories={stories} />
      <Gallery />
      <Footer />
    </main>
  );
}
