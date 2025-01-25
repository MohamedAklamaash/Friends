"use client"

import React from 'react';
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import laxmanpic from "@/public/laxman.jpg"
import paramapic from "@/public/parama.jpg"
const features = [
  {
    title: "Connect",
    description: "Build meaningful relationships with people around the world",
    icon: "👥",
  },
  {
    title: "Share",
    description: "Express yourself through photos, videos, and stories",
    icon: "📸",
  },
  {
    title: "Discover",
    description: "Explore new content tailored to your interests",
    icon: "🔍",
  },
  {
    title: "Engage",
    description: "Interact with your community through likes, comments, and messages",
    icon: "💬",
  },
];

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Influencer",
    content:
      "This app has revolutionized the way I connect with my audience. It's intuitive, fun, and keeps me engaged all day!",
    avatar: laxmanpic,
  },
  {
    name: "Mike Chen",
    role: "Photographer",
    content:
      "As a visual artist, I love how this platform showcases my work. The community here is supportive and inspiring.",
    avatar: paramapic,
  },
];

export const NotloggedIn: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    console.log("NotloggedIn component mounted");
    return () => {
      console.log("NotloggedIn component unmounted");
    };
  }, []);

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-purple-100 to-blue-100">
      <main className="w-full">
        <section className="w-full px-4 py-20 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 animate-fade-in-up">
            Connect, Share, and Thrive
          </h1>
          <p className="text-xl text-gray-600 mb-10 animate-fade-in-up animation-delay-300">
            Join our vibrant community and express yourself like never before
          </p>
          <div className="flex justify-center space-x-4 animate-fade-in-up animation-delay-600">
            <Link
              href="/auth/login"
              className="bg-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-purple-700 transition duration-300"
            >
              Get Started
            </Link>
            <Link
              href="#features"
              className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition duration-300"
            >
              Learn More
            </Link>
          </div>
        </section>

        <section id="features" className="w-full bg-white py-20">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Why Choose SocialApp?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 transform hover:-translate-y-1"
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="testimonials" className="w-full py-20">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">What Our Users Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                  <div className="flex items-center mb-4">
                    <Image
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={80}
                      height={80}
                      className="rounded-full"
                    />
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold text-gray-800">{testimonial.name}</h3>
                      <p className="text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic">"{testimonial.content}"</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-2xl font-bold mb-4 md:mb-0">Friends</div>
            <div className="flex space-x-4">
              {/* GitHub Link */}
              <a
                href="https://github.com/aklamaash" // Replace with your GitHub profile link
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-400 transition duration-300"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.167 6.839 9.49.5.09.682-.217.682-.483 0-.237-.008-.866-.012-1.699-2.782.605-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.621.069-.608.069-.608 1.004.07 1.531 1.031 1.531 1.031.892 1.528 2.341 1.087 2.912.832.091-.646.349-1.087.635-1.337-2.22-.252-4.555-1.11-4.555-4.942 0-1.091.39-1.984 1.029-2.682-.103-.253-.447-1.272.098-2.65 0 0 .84-.269 2.75 1.025A9.577 9.577 0 0112 6.844c.853.004 1.71.115 2.51.336 1.91-1.294 2.75-1.025 2.75-1.025.546 1.378.202 2.397.099 2.65.64.698 1.028 1.591 1.028 2.682 0 3.841-2.338 4.687-4.566 4.935.36.31.682.922.682 1.855 0 1.34-.012 2.422-.012 2.749 0 .268.18.576.688.478A10.016 10.016 0 0022 12c0-5.523-4.477-10-10-10z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              {/* LinkedIn Link */}
              <a
                href="https://www.linkedin.com/in/MohamedAklamaash" // Replace with your LinkedIn profile link
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-400 transition duration-300"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    d="M16.5 8a6.5 6.5 0 00-6.5 6.5v5h2v-5a4.5 4.5 0 019 0v5h2v-5a6.5 6.5 0 00-6.5-6.5zm-13 5.5v5h2v-5h-2zm1-2.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM6 7.5a3.5 3.5 0 01-7 0 3.5 3.5 0 017 0z"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-400 text-sm">
            Made by {"</>"} Mohamed Aklamaash
          </div>
        </div>
      </footer>

    </div>
  );
};