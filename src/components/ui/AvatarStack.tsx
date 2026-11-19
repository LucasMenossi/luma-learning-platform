import Image from "next/image";

type AvatarStackProps = {
  images: string[];
  size: number;
  className?: string;
  imageClassName?: string;
  sizes?: string;
  borderClassName?: string;
};

export function AvatarStack({
  images,
  size,
  className = "",
  imageClassName = "",
  sizes,
  borderClassName = "",
}: AvatarStackProps) {
  return (
    <div className={`flex items-center ${className}`.trim()} aria-hidden="true">
      {images.map((src, index) => (
        <Image
          key={src}
          src={src}
          alt=""
          width={size}
          height={size}
          sizes={sizes ?? `${size}px`}
          className={`${index > 0 ? "-ml-2 " : ""}${imageClassName} ${borderClassName}`.trim()}
          style={{ zIndex: images.length - index }}
        />
      ))}
    </div>
  );
}
