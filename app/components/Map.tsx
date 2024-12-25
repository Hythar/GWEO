import { useState, useEffect, lazy, Suspense } from 'react';

interface MapProps {
  center: [number, number];
  zoom: number;
  markers?: Array<{
    position: [number, number];
    popup?: string;
  }>;
  className?: string;
}

const MapClient = lazy(() => import('./Map.client').then(mod => ({ 
  default: mod.MapClient 
})));

export function Map(props: MapProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <div className={`h-full w-full ${props.className} bg-gray-100`} />;
  }

  return (
    <Suspense fallback={<div className={`h-full w-full ${props.className} bg-gray-100`} />}>
      <MapClient {...props} />
    </Suspense>
  );
}