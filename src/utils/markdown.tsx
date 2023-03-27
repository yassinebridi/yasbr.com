import { MarkdownToJSX } from 'markdown-to-jsx';
import { ImageProps } from 'next/image';
import Image from 'next/image';
import Link from 'next/link';

export interface ExternalLinkProps {
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

export default ExternalLink;
export const Table = ({ children, ...rest }: { children: React.ReactNode }) => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg  max-w-[350px] sm:max-w-full">
      <table className="w-full" {...rest} style={undefined}>
        {children}
      </table>
    </div>
  );
};

export const Ol = ({ children }: { children: React.ReactNode }) => {
  return (
    <ol className="list-decimal ml-8 leading-8 text-md sm:text-lg py-2">
      {children}
    </ol>
  );
};
export const Ul = ({ children }: { children: React.ReactNode }) => {
  return (
    <ul className="list-disc ml-8 leading-8 text-md sm:text-lg py-2">
      {children}
    </ul>
  );
};
export const Li = ({ children }: { children: React.ReactNode }) => {
  return <li className="">{children}</li>;
};

export const A = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) => {
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

export const MyMdImage = ({
  src,
}: {
  children: React.ReactNode;
  src: string;
  className: string;
}) => {
  const path = /^https?:\/\//i;
  if (path.test(src)) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={src} className="rounded-lg mt-2" />;
  } else {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img src={src} className="rounded-lg mt-2" />
    );
  }
};

export const Paragraph = ({ children }: { children: React.ReactNode }) => {
  return <p className="leading-8 text-md sm:text-lg pb-3">{children}</p>;
};
export const NormalParagraph = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <p className="leading-7 pb-3">{children}</p>;
};

export const BgParagraph = ({ children }: { children: React.ReactNode }) => {
  return (
    <p className="text-[18px] pb-1 leading-8  sm:text-[18px]">{children}</p>
  );
};
export const Blockquote = ({ children }: { children: React.ReactNode }) => {
  return (
    <blockquote className=" text-white text-left pl-4 leading-8">
      {children}
    </blockquote>
  );
};

export const MdImage = ({
  url,
  name,
}: {
  props: ImageProps;
  url: string;
  name: string;
}) => {
  return (
    <div className="py-2">
      <Image
        src={url}
        alt={name}
        className="rounded-md object-cover w-full"
        height={250}
        width={430}
      />
    </div>
  );
};

export const H1 = ({ children }: { children: React.ReactNode }) => {
  return (
    <h1 className="py-2 mt-2 text-primary-900 font-extrabold text-5xl">
      {children}
    </h1>
  );
};

export const H2 = ({
  children,
  id,
}: {
  children: React.ReactNode;
  id: string;
}) => {
  return (
    <h2 id={id} className="py-2 mt-2 text-primary-900 font-extrabold text-2xl">
      {children}
    </h2>
  );
};
export const H3 = ({ children }: { children: React.ReactNode }) => {
  return (
    <h3 className="py-2 mt-2 text-primary-900 font-extrabold text-xl">
      {children}
    </h3>
  );
};

export const H4 = ({ children }: { children: React.ReactNode }) => {
  return (
    <h4 className="py-2 text-primary-900 font-extrabold text-lg">{children}</h4>
  );
};

export const H5 = ({ children }: { children: React.ReactNode }) => {
  return (
    <h5 className="py-2 text-primary-900 font-extrabold text-md">{children}</h5>
  );
};

export const H6 = ({ children }: { children: React.ReactNode }) => {
  return <h6 className="py-2 text-primary-900 font-extrabold">{children}</h6>;
};

export const Iframe = ({ src }: { src: string }) => {
  return (
    <iframe src={src} className="mx-auto my-2 w-full h-[200px] sm:h-[400px]" />
  );
};

export const overridesObj: MarkdownToJSX.Options['overrides'] = {
  p: Paragraph,
  blockquote: Blockquote,
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
};

// check if link is extenral
export const isExternal = (url: string) => {
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
