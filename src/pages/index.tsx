import matter from "gray-matter";
import { GetStaticProps } from "next";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import { NextSeo } from "next-seo";

import _components from "data/components";
import seo from "data/seo.json";
import { Button } from "src/components/Button";
import Credits from "src/components/Credits";
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

interface _Props {
  source: MDXRemoteSerializeResult;
}

export const getStaticProps: GetStaticProps = async ({}) => {
  // @ts-ignore
  const _content = (await import("data/content.mdx")).default;

  const { content, data } = matter(_content);

  const source = await serialize(content, {
    scope: data,
  });

  return {
    props: {
      source,
    } as _Props,
  };
};

export default function Home({ source }: _Props) {
  return (
    <>
      <NextSeo {...seo} />
      <div className={"wrapper"}>
        <div className={"content"}>
          <div className={"lynk-instance"}>
            <MDXRemote {...source} components={components} />
          </div>
          <Credits />
        </div>
        <style jsx global>{``}</style>
      </div>
    </>
  );
}
