import React from 'react';
import { getImageKitUrl, type ImageTransformationType } from '../../utils/imagekit';

export interface IKImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  transformation?: ImageTransformationType | string;
  width?: number | string;
  height?: number | string;
  priority?: boolean;
  sizes?: string;
  className?: string;
}

export const IKImage: React.FC<IKImageProps> = ({
  src,
  alt,
  transformation = 'card',
  width,
  height,
  priority = false,
  sizes = '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw',
  className = '',
  loading,
  ...props
}) => {
  const optimizedSrc = getImageKitUrl(src, transformation);

  return (
    <img
      src={optimizedSrc}
      alt={alt || 'LC Fitness Club'}
      width={width}
      height={height}
      loading={priority ? 'eager' : loading || 'lazy'}
      fetchPriority={priority ? 'high' : 'auto'}
      sizes={sizes}
      className={className}
      {...props}
    />
  );
};

export default IKImage;
