import { useState } from "react";
import { Switch } from "@headlessui/react";
import { useTheme } from "next-themes";

export function ThemaButton() {
  const { theme, setTheme } = useTheme();
  const [enabled, setEnabled] = useState(false);

  return (
    <>
      <div className="bg-pink-200">
        {/* The current theme is: {theme} */}
        <br />
        <button className="bg-gray-100" onClick={() => setTheme("light")}>
          Light Mode
        </button>
        <br />
        <button className="bg-gray-100" onClick={() => setTheme("dark")}>
          Dark Mode
        </button>
      </div>

      <Switch
        checked={enabled}
        onChange={setEnabled}
        className={`${
          enabled ? "bg-gray-400" : "bg-gray-200"
        } relative inline-flex items-center h-6 rounded-full w-11`}
      >
        <span className="sr-only">Enable notifications</span>
        <span
          className={`${
            enabled ? "translate-x-6" : "translate-x-1"
          } inline-block w-4 h-4 transform bg-white rounded-full`}
        />
      </Switch>
    </>
  );
}
