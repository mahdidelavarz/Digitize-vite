import { useEffect } from "react";
import { useState } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const ThemeButton = () => {
  const savedTheme = JSON.parse(localStorage.getItem("theme") || `[]`);
  const [theme, setTheme] = useState(
    savedTheme.length !== 0 ? savedTheme : "light"
  );

  useEffect(() => {
    if (savedTheme.length === 0) {
      localStorage.setItem("theme", JSON.stringify("light"));
      setTheme("light");
    }
    console.log(theme);
    theme === "light"
      ? document.documentElement.classList.remove("dark")
      : document.documentElement.classList.add("dark");
  }, []);

  const darkModeHandler = () => {
    const theme = JSON.parse(localStorage.getItem("theme") || `{}`);
    if (theme === "light") {
      setTheme("dark");
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", JSON.stringify("dark"));
    } else {
      setTheme("light");
      localStorage.setItem("theme", JSON.stringify("light"));
      document.documentElement.classList.remove("dark");
    }
  };
  return (
    <div
      className="MdDarkMode  rounded-lg border border-slate-400 px-4 py-2 text-lg shadow-lg dark:border-2 dark:border-slate-400 lg:cursor-pointer bg-slate-200 dark:bg-gradient-to-r dark:from-slate-700 dark:to-slate-400"
      onClick={darkModeHandler}
    >
      {theme === "dark" ? (
        <MdDarkMode className="text-xl text-white/80" />
      ) : (
        <MdLightMode className="text-xl text-yellow-500" />
      )}
    </div>
  );
};

export default ThemeButton;
