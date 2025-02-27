"use client";

import React from 'react';
import Link from 'next/link';
import { NavBar } from './NavBar';

export const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          MyMiamiDoctor
        </Link>
        <NavBar />
      </div>
    </header>
  );
}; 