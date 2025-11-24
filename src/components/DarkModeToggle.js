import { useState, useEffect } from "react";

export default function DarkModeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="px-3 py-1 border rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition"
    >
      {dark ? "Light Mode" : "Dark Mode"}
    </button>
  );
}
