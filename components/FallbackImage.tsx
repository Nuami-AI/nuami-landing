"use client";

import Image, { type ImageProps } from "next/image";
import { useState, type ReactNode } from "react";

type FallbackImageProps = ImageProps & {
  fallback?: ReactNode;
};

export default function FallbackImage({ fallback = null, alt, ...props }: FallbackImageProps) {
  const [failed, setFailed] = useState(false);
  if (failed) return <>{fallback}</>;
  return <Image {...props} alt={alt} onError={() => setFailed(true)} />;
}
