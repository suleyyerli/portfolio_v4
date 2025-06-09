import Image from "next/image";
import React from "react";

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  fill?: boolean;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className,
  fill = false,
}) => {
  if (fill) {
    return (
      <div
        className="relative"
        style={{ width: width || "100%", height: height || "100%" }}
      >
        <Image src={src} alt={alt} fill className={className} />
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
    />
  );
};

export default OptimizedImage;
