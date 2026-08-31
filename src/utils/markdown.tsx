import { MarkdownToJSX } from 'markdown-to-jsx';
import Link from 'next/link';

interface ExternalLinkProps {
  href: string;
  className?: string;
  children: React.ReactNode;
}
const ExternalLink: React.FC<ExternalLinkProps> = ({
  href,
  className,
  children,
}) => {
  return (
    <a
      onClick={(e) => {
        e.stopPropagation();
      }}
      href={href}
      target="_blank"
      rel="nofollow noreferrer"
      className={className}
    >
      {children}
    </a>
  );
};

const Ol = ({ children }: { children: React.ReactNode }) => {
  return (
    <ol className="list-decimal ml-8 leading-8 text-sm sm:text-[16px] py-2">
      {children}
    </ol>
  );
};
const Ul = ({ children }: { children: React.ReactNode }) => {
  return (
    <ul className="list-disc ml-8 leading-8 text-sm sm:text-[16px] py-2">
      {children}
    </ul>
  );
};
const Li = ({ children }: { children: React.ReactNode }) => {
  return <li className="">{children}</li>;
};

const A = ({ children, href }: { children: React.ReactNode; href: string }) => {
  const isLinkExternal = isExternal(href);
  const className =
    'text-black-500 underline transition-all hover:no-underline hover:text-black-700';
  if (isLinkExternal) {
    return (
      <ExternalLink href={href} className={className}>
        {children}
      </ExternalLink>
    );
  } else {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }
};

const MyMdImage = ({
  src,
  alt,
}: {
  children: React.ReactNode;
  src: string;
  className: string;
  alt: string;
}) => {
  const path = /^https?:\/\//i;
  if (path.test(src)) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={src} className="rounded-lg mt-2" alt={alt} />;
  } else {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img src={src} className="rounded-lg mt-2" alt={alt} />
    );
  }
};

const Paragraph = ({ children }: { children: React.ReactNode }) => {
  return <p className="leading-8 text-sm sm:text-[16px] pb-3">{children}</p>;
};

const H1 = ({ children }: { children: React.ReactNode }) => {
  return (
    <h1 className="py-2 mt-2 text-primary-900 dark:text-white font-extrabold text-2xl">
      {children}
    </h1>
  );
};

const H2 = ({ children, id }: { children: React.ReactNode; id: string }) => {
  return (
    <h2
      id={id}
      className="py-2 mt-2 text-primary-900 dark:text-white font-extrabold text-xl"
    >
      {children}
    </h2>
  );
};
const H3 = ({ children }: { children: React.ReactNode }) => {
  return (
    <h3 className="py-2 mt-2 text-primary-900 dark:text-white font-extrabold text-lg">
      {children}
    </h3>
  );
};

const H4 = ({ children }: { children: React.ReactNode }) => {
  return (
    <h4 className="py-2 text-primary-900 dark:text-white font-extrabold text-md">
      {children}
    </h4>
  );
};

const H5 = ({ children }: { children: React.ReactNode }) => {
  return (
    <h5 className="py-2 text-primary- dark:text-white900 font-extrabold text-base">
      {children}
    </h5>
  );
};

const H6 = ({ children }: { children: React.ReactNode }) => {
  return (
    <h6 className="py-2 text-primary-900 dark:text-white font-extrabold">
      {children}
    </h6>
  );
};

const Iframe = ({ src }: { src: string }) => {
  return (
    <iframe src={src} className="mx-auto my-2 w-full h-[200px] sm:h-[400px]" />
  );
};

const Pre = ({ children }: { children: React.ReactNode }) => {
  return (
    <pre className="my-3 overflow-x-auto rounded-lg bg-primary-100 p-4 text-sm leading-6 dark:bg-primary-950">
      {children}
    </pre>
  );
};

const Code = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  if (!className) {
    return (
      <code className="rounded bg-primary-100 px-1.5 py-0.5 text-[0.85em] dark:bg-primary-800">
        {children}
      </code>
    );
  }

  return (
    <code className={className.replace('lang-', 'language-')}>
      {children}
    </code>
  );
};

export const overridesObj: MarkdownToJSX.Options['overrides'] = {
  p: Paragraph,
  iframe: Iframe,
  ul: Ul,
  ol: Ol,
  li: Li,
  a: A,
  img: MyMdImage,
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6,
  pre: Pre,
  code: Code,
};

// check if link is extenral
const isExternal = (url: string) => {
  if (typeof window !== 'undefined') {
    const host = window.location.host;

    const linkHost = (function (url) {
      if (/^https?:\/\//.test(url)) {
        // Absolute URL.
        // The easy way to parse an URL, is to create <a> element.
        // @see: https://gist.github.com/jlong/2428561
        const parser = document.createElement('a');
        parser.href = url;

        return parser.hostname;
      } else {
        // Relative URL.
        return window.location.hostname;
      }
    })(url);

    return host !== linkHost;
  }
};
