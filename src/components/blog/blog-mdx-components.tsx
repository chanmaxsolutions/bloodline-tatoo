import Image from "next/image";
import Link from "next/link";
import {
  Children,
  isValidElement,
  type ComponentPropsWithoutRef,
  type ReactElement,
  type ReactNode,
} from "react";
import { cn } from "@/lib/utils";

const proseParagraphClassName =
  "font-sans text-lg leading-relaxed text-muted-foreground md:text-xl md:leading-snug";

const proseHeadingClassName =
  "font-heading text-2xl font-bold uppercase tracking-tight text-foreground md:text-3xl";

const proseSubheadingClassName =
  "font-heading text-xl font-bold uppercase tracking-tight text-foreground md:text-2xl";

const blogArticleFigureClassName =
  "relative aspect-16/10 w-full overflow-hidden rounded-xl bg-surface-elevated";

const blogArticleCaptionClassName =
  "font-sans text-sm italic leading-relaxed text-muted-foreground/55 md:text-base";

const blogMdxLinkClassName = cn(
  "font-medium text-foreground underline decoration-white/25 underline-offset-4",
  "transition-colors motion-fast hover:text-accent hover:decoration-accent/40",
);

function getMeaningfulParagraphChildren(children: ReactNode): ReactNode[] {
  return Children.toArray(children).filter((child) => {
    if (typeof child === "string") {
      return child.trim().length > 0;
    }

    return Boolean(child);
  });
}

function isBlogMdxImageElement(child: ReactElement): boolean {
  if (child.type === BlogMdxImage) {
    return true;
  }

  if (typeof child.type === "function") {
    const component = child.type as { displayName?: string; name?: string };
    return component.displayName === "BlogMdxImage" || component.name === "BlogMdxImage";
  }

  return false;
}

function BlogMdxParagraph({ className, children, ...props }: ComponentPropsWithoutRef<"p">) {
  const meaningful = getMeaningfulParagraphChildren(children);

  if (
    meaningful.length === 1 &&
    isValidElement(meaningful[0]) &&
    isBlogMdxImageElement(meaningful[0])
  ) {
    return meaningful[0];
  }

  return (
    <p className={cn(proseParagraphClassName, className)} {...props}>
      {children}
    </p>
  );
}

function BlogMdxHeading2({ className, ...props }: ComponentPropsWithoutRef<"h2">) {
  return <h2 className={cn(proseHeadingClassName, className)} {...props} />;
}

function BlogMdxHeading3({ className, ...props }: ComponentPropsWithoutRef<"h3">) {
  return <h3 className={cn(proseSubheadingClassName, className)} {...props} />;
}

function BlogMdxUl({ className, ...props }: ComponentPropsWithoutRef<"ul">) {
  return (
    <ul
      className={cn(
        "list-disc space-y-2 pl-6 font-sans text-lg leading-relaxed text-muted-foreground md:text-xl",
        className,
      )}
      {...props}
    />
  );
}

function BlogMdxOl({ className, ...props }: ComponentPropsWithoutRef<"ol">) {
  return (
    <ol
      className={cn(
        "list-decimal space-y-2 pl-6 font-sans text-lg leading-relaxed text-muted-foreground md:text-xl",
        className,
      )}
      {...props}
    />
  );
}

function BlogMdxLi({ className, ...props }: ComponentPropsWithoutRef<"li">) {
  return <li className={cn("text-pretty", className)} {...props} />;
}

function BlogMdxAnchor({ className, href, children, ...props }: ComponentPropsWithoutRef<"a">) {
  const linkClassName = cn(blogMdxLinkClassName, className);

  if (href?.startsWith("/")) {
    return (
      <Link href={href} className={linkClassName} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <a
      href={href}
      className={linkClassName}
      rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
      target={href?.startsWith("http") ? "_blank" : undefined}
      {...props}
    >
      {children}
    </a>
  );
}

function BlogMdxImage({ alt = "", src, title }: { alt?: string; src?: string; title?: string }) {
  if (!src) {
    return null;
  }

  return (
    <figure className="flex flex-col gap-3">
      <div className={blogArticleFigureClassName}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 720px, 100vw"
          quality={75}
          className="object-cover object-center"
        />
      </div>
      {title ? <figcaption className={blogArticleCaptionClassName}>{title}</figcaption> : null}
    </figure>
  );
}

BlogMdxImage.displayName = "BlogMdxImage";

const blogMdxComponents = {
  p: BlogMdxParagraph,
  h2: BlogMdxHeading2,
  h3: BlogMdxHeading3,
  ul: BlogMdxUl,
  ol: BlogMdxOl,
  li: BlogMdxLi,
  a: BlogMdxAnchor,
  img: BlogMdxImage,
};

export { blogMdxComponents };
