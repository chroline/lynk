import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";

import _components from "data/components";
import { Button } from "src/components/Button";
import createHeadingComponent from "src/components/Heading";
import Image from "src/components/Image";

const components = {
  Button,

  img: Image,
  h1: createHeadingComponent(1),
  h2: createHeadingComponent(2),
  h3: createHeadingComponent(3),

  ..._components,
};

export default function Renderer({ children: source }: { children: MDXRemoteSerializeResult }) {
  return <MDXRemote {...source} components={components} />;
}
