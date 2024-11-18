"use client";
import React from "react";
import Link from "next/link";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export const Header = () => {
  return (
    <header className="w-full border-b shadow-sm">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-16">
          {/* Logo and Company Name */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-[#6c63ff]">
              Taleem Zaroor
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              href="/courses"
              className="text-gray-600 hover:text-[#6c63ff]"
            >
              Courses
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-[#6c63ff]">
              About
            </Link>
            <Link
              href="/contact"
              className="text-gray-600 hover:text-[#6c63ff]"
            >
              Contact
            </Link>
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-4">
            <SignedOut>
              <Link
                href={"/sign-in"}
                className="px-4 py-2 rounded-lg bg-[#6c63ff] text-white hover:bg-[#5b52ff] transition-colors"
              >
                Sign In
              </Link>
            </SignedOut>
            <SignedIn>
              <UserButton
                appearance={{
                  elements: {
                    avatarBox: "w-10 h-10",
                  },
                }}
              />
            </SignedIn>
          </div>
        </nav>
      </div>
    </header>
  );
};
