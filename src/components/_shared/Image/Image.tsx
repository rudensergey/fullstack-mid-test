// absoule
import React from "react";
import NextImage from "next/image";

interface IImageProps {
  src: any;
  alt?: string;
  className?: string;
  width: number;
  height: number;
}

const Image: React.FC<IImageProps> = ({ src, alt, width = 500, height = 500 }) => {
  return <NextImage objectFit="cover" src={src} alt={alt} width={width} height={height} />;
};

export default Image;
