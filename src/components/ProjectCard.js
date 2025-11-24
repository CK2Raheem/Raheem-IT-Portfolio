export default function ProjectCard({ title, description, link }) {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md hover:scale-105 transition-transform fade-in">
      <h3 className="font-bold text-lg">{title}</h3>
      <p className="mt-2">{description}</p>
      {link && <a href={link} target="_blank" className="text-blue-500 mt-2 block hover:underline">View Project</a>}
    </div>
  );
}
