import { Routes, Route } from "react-router-dom";
import Header from "./header";
import JsonPage from "./jsonPage";

export default function App() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-red-500">TOP RESOURCES</h1>
      <p className="text-gray-600">Access real-life data, fully organized and ready to use, all in one place.

</p>
    <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/:category" element={<JsonPage />} />
      </Routes>
    </div>
  );
}

