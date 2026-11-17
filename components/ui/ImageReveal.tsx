import Image from "next/image";

type ImageRevealProps = {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  aspectRatio?: string;
  priority?: boolean;
  sizes?: string;
  objectPosition?: string;
};

export default function ImageReveal({
  src,
  alt,
  className = "",
  imageClassName = "",
  aspectRatio = "4 / 5",
  priority = false,
  sizes = "(max-width: 768px) 100vw, 50vw",
  objectPosition = "center",
}: ImageRevealProps) {
  return (
    <div
      className={`relative w-full overflow-hidden ${className}`}
      style={{ aspectRatio }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className={`object-cover ${imageClassName}`}
        style={{ objectPosition }}
      />
    </div>
  );
}
