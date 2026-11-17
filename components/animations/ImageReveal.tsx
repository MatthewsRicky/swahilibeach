import Image from "next/image";

export default function ImageReveal({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  return (
    <div className="relative h-[400px] w-full">
      <Image src={src} alt={alt} fill className="object-cover" />
    </div>
  );
}
