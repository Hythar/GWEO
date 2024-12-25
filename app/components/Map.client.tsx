import { useEffect, useRef } from 'react';
import L from 'leaflet';

interface MapProps {
  center: [number, number];
  zoom: number;
  markers?: Array<{
    position: [number, number];
    popup?: string;
  }>;
  className?: string;
}

export function MapClient({ center, zoom, markers = [], className = '' }: MapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined' || !mapRef.current) return;

    // Initialize map
    const map = L.map(mapRef.current).setView(center, zoom);
    mapInstanceRef.current = map;

    // Add tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Add markers
    markers.forEach(({ position, popup }) => {
      const marker = L.marker(position).addTo(map);
      if (popup) {
        marker.bindPopup(popup);
      }
    });

    // Cleanup
    return () => {
      map.remove();
      mapInstanceRef.current = null;
    };
  }, [center, zoom, markers]);

  return <div ref={mapRef} className={`h-full w-full ${className}`} />;
}