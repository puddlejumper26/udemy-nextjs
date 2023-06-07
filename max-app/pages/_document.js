import Document, { Html, Head, Main, NextScript } from "next/document";

// better for the meta data, SEO

class MyDocument extends Document {
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

export default MyDocument;
