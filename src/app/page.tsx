import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import StorySection, { Story } from "@/components/StorySection";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";
import { prisma } from "@/lib/prisma";

export default async function Home() {
  let stories: Story[] = [];
  try {
    // Fetch stories from database, ordered by date descending
    const data = await prisma.story.findMany({
      orderBy: { date: 'desc' },
    });
    stories = data.map(s => ({
      ...s,
      date: s.date
    })) as Story[];
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
