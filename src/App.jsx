import useColorMode, { colorModes } from "./useColorMode";
function App() {
  const { setColorMode } = useColorMode();
  return (
    <main>
      <div
        className="text-white"
        red="bg-red-500"
        orange="bg-orange-500"
        yellow="bg-yellow-500"
        green="bg-green-500"
        blue="bg-blue-500"
        indigo="bg-indigo-500"
        purple="bg-purple-500"
      >
        Hello, world!
      </div>
      <div className="flex items-center gap-4">
        {colorModes.map((mode) => (
          <button
            key={mode}
            onClick={() => setColorMode(mode)}
            className="inline-block"
          >
            {mode}
          </button>
        ))}
      </div>
    </main>
  );
}

export default App;
