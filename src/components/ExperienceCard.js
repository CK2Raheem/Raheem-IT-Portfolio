export default function ExperienceCard({ title, description }) {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md hover:scale-105 transition-transform fade-in">
      <h3 className="font-bold text-lg">{title}</h3>
      <p className="mt-2">{description}</p>
    </div>
  );
}
