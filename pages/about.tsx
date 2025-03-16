import type { NextPage } from 'next';
import Features from '../components/Features';
import SkillSet from '../components/SkillSet';

const About: NextPage = () => {
  return (
    <div className="min-h-screen bg-gray-800 text-white">
      <section className="container mx-auto py-16">
        {/* About Sections */}
        <Features />

        {/* About Me Section */}
        <SkillSet />
      </section>
    </div>
  );
};

export default About;