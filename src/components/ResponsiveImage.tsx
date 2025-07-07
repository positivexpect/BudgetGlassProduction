'use client';

import React from 'react';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

interface ResponsiveImageProps {
  src: string;
  alt: string;
  fill?: boolean;
  width?: number;
  height?: number;
  priority?: boolean;
  className?: string;
  containerClassName?: string;
  sizes?: string;
}

const ResponsiveImage = ({
  src,
  alt,
  fill = false,
  width,
  height,
  priority = false,
  className = '',
  containerClassName = '',
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
}: ResponsiveImageProps) => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setError(true);
    setIsLoading(false);
  };

  // Error fallback with proper dimensions
  const ErrorFallback = () => (
    <div 
      className={twMerge(
        'bg-neutral-lightest rounded-lg flex items-center justify-center',
        containerClassName
      )}
      style={!fill ? { width: width || '100%', height: height || '100%' } : undefined}
    >
      <div className="text-center p-4">
        <svg
          className="mx-auto h-12 w-12 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
        <p className="mt-2 text-sm text-gray-500">Image not available</p>
      </div>
    </div>
  );

  if (error) {
    return <ErrorFallback />;
  }

  const imageProps = {
    src,
    alt,
    priority,
    sizes,
    quality: 85,
    className: twMerge(
      'transition-opacity duration-300 rounded-lg',
      isLoading ? 'opacity-0' : 'opacity-100',
      className
    ),
    onLoad: handleLoad,
    onError: handleError,
  };

  const LoadingPlaceholder = () => (
    <div 
      className="absolute inset-0 bg-neutral-lightest animate-pulse rounded-lg"
      style={!fill ? { width: width || '100%', height: height || '100%' } : undefined}
    />
  );

  if (fill) {
    return (
      <div className={twMerge('relative', containerClassName)}>
        <Image
          {...imageProps}
          fill
          style={{ objectFit: 'cover' }}
        />
        {isLoading && <LoadingPlaceholder />}
      </div>
    );
  }

  return (
    <div className={twMerge('relative', containerClassName)}>
      <Image
        {...imageProps}
        width={width}
        height={height}
      />
      {isLoading && <LoadingPlaceholder />}
    </div>
  );
};

export default ResponsiveImage; 