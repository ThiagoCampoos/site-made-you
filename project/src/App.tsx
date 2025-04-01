import React, { useRef } from 'react';
import Banner from './components/Banner';
import Description from './components/Description';
import Gallery from './components/Gallery';

function App() {
  const descriptionRef = useRef<HTMLDivElement>(null);

  const scrollToDescription = () => {
    descriptionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      <Banner onLearnMore={scrollToDescription} />
      <div ref={descriptionRef}>
        <Description />
      </div>
      <Gallery />
    </div>
  );
}

export default App;