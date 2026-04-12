import { useState } from 'react';
import HeroTabs from '../components/HeroTabs';
import PresentationSection from '../components/PresentationSection';
import homeData from '../data/homeData';

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = homeData[activeIndex];

  return (
    <div>
      <HeroTabs data={homeData} activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
      <PresentationSection data={active.presentation} theme={active.theme} />
    </div>
  );
}
