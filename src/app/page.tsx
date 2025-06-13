'use client';

import { BackgroundChart } from '../components/demo/BackgroundChart';
import { HeroSection } from '../components/demo/HeroSection';
import { PackageGrid } from '../components/demo/PackageGrid';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      <BackgroundChart />
      
      <div className="container mx-auto px-4 py-16">
        <HeroSection />
        <PackageGrid />
      </div>
    </div>
  );
}
