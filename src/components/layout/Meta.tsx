import Head from "next/head";
import { useRouter } from "next/router";

export const Meta: Components.Meta = ({ title, description, image, children }) => {
  const { asPath } = useRouter();

  const appUrl = process.env.APP_URL;
  const currentUrl = `${appUrl}${asPath}`;
  const siteName = "Next Auth";

  const sliceDescription = (description: string, limit: number) => {
    return `${description.slice(0, limit)}...`;
  };

  return (
    <>
      <Head>
        <title>{`${title} | ${siteName}`}</title>
        <link rel="canonical" href={currentUrl} />
        <meta property="description" content={sliceDescription(description, 197)} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta property="og:title" content={`${title} | ${siteName}`} />
        <meta property="og:description" content={sliceDescription(description, 197)} />
        <meta property="og:image" content={`${appUrl}${image}`} />
        <meta property="og:image:width" content="1280" />
        <meta property="og:image:height" content="720" />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:site_name" content={siteName} />
      </Head>
      {children}
    </>
  );
};
