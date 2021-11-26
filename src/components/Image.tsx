import NextImage from "next/image";

export default function Image({ src, alt }: { src: string; alt: string }) {
  return (
    <div className={"img"}>
      <NextImage src={src} layout={"fill"} alt={alt} />
    </div>
  );
}
