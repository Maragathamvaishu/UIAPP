import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

// Helper to get first array from object like { users: [...] } or { products: [...] }
const getArrayFromObject = (obj: any): any[] | null => {
  if (typeof obj === "object" && obj !== null) {
    for (const key in obj) {
      if (Array.isArray(obj[key])) {
        return obj[key];
      }
    }
  }
  return null;
};

export default function JsonPage() {
  const location = useLocation();
  const { api } = location.state || {};
  const category = location.pathname.split("/")[1];
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (api) {
      fetch(api)
        .then((res) => res.json())
        .then((json) => setData(json))
        .catch(() => setError("Failed to fetch data."));
    }
  }, [api]);

  const items = Array.isArray(data) ? data : getArrayFromObject(data);

  const renderItem = (item: any, index: number) => (
    <div
      key={index}
      className="bg-white border border-gray-300 rounded-xl shadow-md p-6 hover:shadow-lg transition-all space-y-2"
    >
      {Object.entries(item).map(([key, value]) => (
        <div key={key} className="border-b border-gray-200 py-1">
          <span className="font-semibold text-blue-700">{key}:</span>{" "}
          <span className="text-gray-800 text-sm">
            {typeof value === "object"
              ? JSON.stringify(value, null, 2)
              : String(value)}
          </span>
        </div>
      ))}
    </div>
  );

  return (
    <div className="w-full max-w-6xl mx-auto p-6 mt-10 bg-gray-50 rounded-xl">
      <h1 className="text-4xl font-extrabold text-blue-600 mb-8 border-b pb-2 border-gray-300">
        {category?.toUpperCase()} Data
      </h1>

      {error && (
        <p className="text-red-700 bg-red-100 p-3 rounded mb-4 border border-red-300">
          {error}
        </p>
      )}

      {!data ? (
        <p className="text-gray-500">Loading...</p>
      ) : items ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(renderItem)}
        </div>
      ) : (
        <pre className="bg-gray-100 text-sm p-4 rounded border border-gray-300 text-gray-800 overflow-auto">
          {JSON.stringify(data, null, 2)}
        </pre>
      )}
    </div>
  );
}
