import { slugifyStr } from "@utils/slugify";
import Datetime from "./Datetime";
import type { CollectionEntry } from "astro:content";

export interface Props {
  href?: string;
  frontmatter: CollectionEntry<"blog">["data"];
  secHeading?: boolean;
}

export default function Card({ href, frontmatter, secHeading = true }: Props) {
  const { title, pubDatetime, modDatetime, description, author, ogImage } =
    frontmatter;

  const headerProps = {
    style: { viewTransitionName: slugifyStr(title) },
    className: "text-lg font-medium decoration-dashed hover:underline",
  };

  return (
    <li className="group relative my-6 rounded-lg border border-skin-accent/20 bg-skin-card p-4 shadow-md">
      <a
        href={href}
        className="block focus-visible:ring-skin-accent rounded-lg focus-visible:ring-2"
        aria-label={title}
      >
        <div className="relative flex flex-col items-start gap-4 sm:flex-row">
          <div className="min-w-0 flex-1">
            <span
              className="inline-block text-lg font-medium text-skin-accent decoration-dashed underline-offset-4 focus-visible:no-underline focus-visible:underline-offset-0"
            >
              {secHeading ? (
                <h2 {...headerProps}>{title}</h2>
              ) : (
                <h3 {...headerProps}>{title}</h3>
              )}
            </span>
            <Datetime
              pubDatetime={pubDatetime}
              modDatetime={modDatetime}
              author={author}
            />
            <p>{description}</p>
          </div>
          {ogImage && (
            <div className="mt-4 aspect-square w-full flex-shrink-0 sm:ml-2 sm:mt-0 sm:aspect-square sm:h-80 sm:w-80">
              <div className="aspect-square h-full w-full overflow-hidden rounded-lg bg-white shadow-lg">
                <img
                  src={typeof ogImage === "string" ? ogImage : ogImage.src}
                  alt={`Image for ${title}`}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          )}
        </div>
      </a>
    </li>
  );
}
