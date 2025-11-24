import Layout from "../components/Layout";
import ProfileCard from "../components/ProfileCard";
import ProjectCard from "../components/ProjectCard";
import ExperienceCard from "../components/ExperienceCard";

export default function Home() {
  return (
    <Layout>
      <div className="md:w-1/3">
        <ProfileCard />
      </div>
      <div className="md:w-2/3 flex flex-col gap-4">
        <h2 className="text-xl font-bold">Projects</h2>
        <ProjectCard title="Portfolio Website" description="Next.js + Tailwind portfolio with dark mode" link="#" />
        <ProjectCard title="Linux Deployment Script" description="Automated DevOps deployment scripts" link="#" />
        <h2 className="text-xl font-bold mt-6">Experience</h2>
        <ExperienceCard title="Geek Squad ARA" description="Senior IT Support Specialist handling Tier 1 & 2" />
        <ExperienceCard title="Independent Contractor" description="Network and system administration projects" />
      </div>
    </Layout>
  );
}
