"use client";
import { useState } from "react";

export default function DesignPage() {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function run(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResult(null);
    try {
      const res = await fetch("/api/design", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      setResult(data);
    } catch (err: any) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-2xl">
      <h2 className="text-xl font-semibold mb-3">Design</h2>
      <form onSubmit={run} className="flex gap-2">
        <input
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Describe the room / style..."
          className="flex-1 border rounded-lg px-3 py-2"
        />
        <button
          type="submit"
          className="px-4 py-2 rounded-lg border"
          disabled={loading}
        >
          {loading ? "Working..." : "Run"}
        </button>
      </form>
      {error && <p className="mt-4 text-red-600">Error: {error}</p>}
      {result && (
        <pre className="mt-4 p-3 rounded-lg border overflow-auto text-sm">
          {JSON.stringify(result, null, 2)}
        </pre>
      )}
    </div>
  );
}
