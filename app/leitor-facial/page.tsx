'use client';

import React, { useState } from 'react';



import FeaturesSection from '@/components/LeitorFacial_Components/FeaturesSection';
import CallToAction from '@/components/LeitorFacial_Components/CallToAction';
import DemoWebcamArea from '@/components/LeitorFacial_Components/DemoWebcamArea';
import HeroAndDetailsSection from '@/components/LeitorFacial_Components/HeroAndDetailsSection';
import ProductSection from '@/components/LeitorFacial_Components/ProductSection';

export default function LeitorFacialPage() {
  const [isDemoActive, setIsDemoActive] = useState(false);
  const [isRecognized] = useState(false);


  return (
    <main className="bg-white text-gray-900">
      <HeroAndDetailsSection />
      <FeaturesSection />
      <ProductSection />
      <DemoWebcamArea
        isDemoActive={isDemoActive}
        isRecognized={isRecognized}
        onStartDemo={() => setIsDemoActive(true)}
        onStopDemo={() => setIsDemoActive(false)}
      />
      <CallToAction />
    </main>
  );
}

