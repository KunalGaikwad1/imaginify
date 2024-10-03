import Link from "next/link";
import Image from "next/image";
import React from "react";
export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4">Cognify AI</h1>
        <p className="text-xl text-gray-400">
          All your AI solutions in one place
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full px-8 max-w-6xl">
        {/* Image Transformation */}
        <Link href="/imaginify/" passHref>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:bg-gray-700 transition duration-300 cursor-pointer">
            <Image
              src="/assets/images/ai-landing.png" // Add your image in the public folder
              alt="Image Transformation"
              width={400}
              height={200}
              className="rounded-md mb-4"
            />
            <h2 className="text-2xl font-semibold mb-2">
              Imaginify : AI Image Transformation
            </h2>
            <p className="text-gray-400">
              Enhance, edit, and transform images using AI technology.
            </p>
          </div>
        </Link>

        {/* Trip Planner */}
        <Link href="/ai-trip" passHref>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:bg-gray-700 transition duration-300 cursor-pointer">
            <Image
              src="/assets/images/placeholder.jpg" // Add your image in the public folder
              alt="AI Trip Planner"
              width={400}
              height={400}
              className="rounded-md mb-4"
            />
            <h2 className="text-2xl font-semibold mb-2">AI Trip Planner</h2>
            <p className="text-gray-400">
              Plan your trips smartly with AI-powered recommendations.
              <br />
              <br />
              <br />
              <br />
            </p>
          </div>
        </Link>

        {/* Content Generation */}
        <Link href="/content" passHref>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:bg-gray-700 transition duration-300 cursor-pointer">
            <Image
              src="/assets/images/cover-AIContentCreation.jpg" // Add your image in the public folder
              alt="AI Content Generation"
              width={400}
              height={200}
              className="rounded-md mb-4"
            />
            <h2 className="text-2xl font-semibold mb-2">
              AI Content Generation
            </h2>
            <p className="text-gray-400">
              Generate high-quality content with the help of AI tools.
            </p>
          </div>
        </Link>
      </div>

      <footer className="mt-16">
        <p className="text-gray-500">
          &copy; {new Date().getFullYear()} Kunal Gaikwad. All Rights Reserved.
        </p>
      </footer>
    </main>
  );
}
