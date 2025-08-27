import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI Interior Design Platform",
  description: "Enhance, stage, and design rooms with AI (scaffold).",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="min-h-screen p-6">
          <header className="mb-8">
            <h1 className="text-2xl font-bold">AI Interior Design Platform</h1>
            <p className="text-sm opacity-70">Demo scaffold — swap mock APIs for your own.</p>
            <nav className="mt-4 flex gap-4">
              <a href="/" className="underline">Home</a>
              <a href="/enhance" className="underline">Enhance</a>
              <a href="/stage" className="underline">Stage</a>
              <a href="/design" className="underline">Design</a>
            </nav>
          </header>
          <section className="grid gap-6">{children}</section>
          <footer className="mt-16 text-xs opacity-60">Built with Next.js + Tailwind</footer>
        </main>
      </body>
    </html>
  );
}
