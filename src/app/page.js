import React from 'react';
import dynamic from 'next/dynamic';
// Dynamic import for client-side only components
const RapperAnimation = dynamic(() => import('./component/RapperAnimation'), {
  ssr: false // This ensures it's not included in server-side rendering
});

// Main component remains as is
import Main from './component/Main';

export default function Home() {
  return (
    <div>
      {/* Main component for server-side rendering */}
      <Main />

      {/* RapperAnimation component for client-side rendering */}
      <RapperAnimation />
    </div>
  );
}
