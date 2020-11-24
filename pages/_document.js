import Document, { Html, Head, Main, NextScript } from "next/document";

/**
 * Overwriting the default documen to be able to set the "lang" attribute (recommended for accessibility)
 */
class EnglishDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default EnglishDocument;
