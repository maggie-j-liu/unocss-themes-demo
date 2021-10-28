import useColorMode, { colorModes } from "./useColorMode";
import { RadioGroup } from "@headlessui/react";
const buttonColors = [
  "bg-red-200",
  "bg-orange-200",
  "bg-yellow-200",
  "bg-green-200",
  "bg-blue-200",
  "bg-indigo-200",
  "bg-purple-200",
  "bg-gray-200",
];
function App() {
  const { colorMode, setColorMode } = useColorMode();
  return (
    <main className="h-screen flex font-sans text-center">
      <div className="m-auto font-sans">
        <h1 className="text-5xl font-thin mb-1">unocss themes</h1>
        <p className="text-lg text-gray-500 font-light">
          an{" "}
          <a
            href="https://github.com/antfu/unocss"
            rel="noreferrer"
            target="_blank"
            className="border-b border-dashed hover:text-gray-600"
            red="text-red-500 hover:text-red-600"
            orange="text-orange-500 hover:text-orange-600"
            yellow="text-yellow-500 hover:text-yellow-600"
            green="text-green-500 hover:text-green-600"
            blue="text-blue-500 hover:text-blue-600"
            indigo="text-indigo-500 hover:text-indigo-600"
            purple="text-purple-500 hover:text-purple-600"
          >
            unocss
          </a>{" "}
          variant generator that generates variants for{" "}
          <span
            className="font-normal bg-gradient-to-r text-transparent bg-clip-text from-pink-600 via-orange-500 to-yellow-400"
            red="text-red-600"
            orange="text-orange-600"
            yellow="text-yellow-600"
            green="text-green-600"
            blue="text-blue-600"
            indigo="text-indigo-600"
            purple="text-purple-600"
          >
            multiple color themes
          </span>
          .
        </p>
        <div className="mt-8">
          <h2 className="text-xl font-light">Try it out!</h2>
          <RadioGroup
            value={colorMode}
            onChange={(c) => {
              console.log("change", c);
              setColorMode(c);
            }}
            className="flex gap-4 justify-center mt-3"
          >
            {colorModes.map((color, i) => (
              <RadioGroup.Option
                value={color}
                key={color}
                className={({ checked }) =>
                  `${
                    checked ? "ring-2 ring-offset-1" : ""
                  } rounded-full w-8 h-8 focus:outline-none focus:ring-blue-500 ${
                    buttonColors[i]
                  }`
                }
              />
            ))}
          </RadioGroup>
        </div>
      </div>
    </main>
  );
}

export default App;
