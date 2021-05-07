import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="ja">
        <Head>
          <link rel="icon" href="/img/favicon.ico" />
          <meta
            name="description"
            content="「Cat's Soliloquy」猫の独り言。フロントエンド学習者による気まぐれブログです。プログラミングの学習記録や趣味について書いています。"
          />
        </Head>
        <body className="dark:bg-gray-700">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
