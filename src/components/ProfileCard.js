export default function ProfileCard() {
  return (
    <div className="md:w-1/3 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg fade-in">
      <img src="/images/profile.jpg" alt="Raheem Roberts" className="rounded-full w-32 mx-auto mb-4"/>
      <h1 className="text-2xl font-bold text-center">Raheem Roberts</h1>
      <p className="text-center mt-2">Technical & Computer Engineer | DevOps & Cybersecurity</p>
      <div className="mt-4">
        <h2 className="font-semibold">Skills</h2>
        <ul className="list-disc list-inside">
          <li>Python, C++, SQL</li>
          <li>Networking & Security</li>
          <li>Web Development: HTML, JS</li>
          <li>OS & System Administration</li>
        </ul>
      </div>
      <a href="/resume.pdf" download className="block mt-6 text-center bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition">
        Download Resume
      </a>
    </div>
  );
}
