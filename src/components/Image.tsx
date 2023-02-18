import NextImage from "next/image";

export default function Image({ src, alt }: { src: string; alt: string }) {
  return (
    <span className={"img"}>
      <NextImage src={src} fill alt={alt} />
    </span>
  );
}
