import { slugifyStr } from "@utils/slugify";
import Datetime from "./Datetime";
import type { CollectionEntry } from "astro:content";

export interface Props {
  href?: string;
  frontmatter: CollectionEntry<"blog">["data"];
  secHeading?: boolean;
}

export default function Card({ href, frontmatter, secHeading = true }: Props) {
  const { title, pubDatetime, modDatetime, description, author, ogImage } = frontmatter;

  const headerProps = {
    style: { viewTransitionName: slugifyStr(title) },
    className: "text-lg font-medium decoration-dashed hover:underline",
  };

  return (
<li className="relative my-6 p-4 rounded-lg border border-skin-accent/20 bg-skin-card shadow-md group">
  <a
    href={href}
    className="absolute inset-0 z-10 rounded-lg focus-visible:ring-2 focus-visible:ring-skin-accent"
    tabIndex={-1}
    aria-label={title}
  />
  <a
    href={href}
    className="relative z-20 inline-block text-lg font-medium text-skin-accent decoration-dashed underline-offset-4 focus-visible:no-underline focus-visible:underline-offset-0"
  >
    {secHeading ? (
      <h2 {...headerProps}>{title}</h2>
    ) : (
      <h3 {...headerProps}>{title}</h3>
    )}
  </a>
  <Datetime pubDatetime={pubDatetime} modDatetime={modDatetime} author={author} />
  <p>{description}</p>
  {ogImage && (
    <div className="mt-4">
      <img
        src={typeof ogImage === "string" ? ogImage : ogImage.src}
        alt={`Image for ${title}`}
        className="rounded-lg shadow-lg bg-white"
        loading="lazy"
      />
    </div>
  )}
</li>
  );
}
