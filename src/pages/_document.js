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
            content="「Cat's Soliloquy」。意味は猫の独り言。フロントエンド学習者による気まぐれブログです。プログラミングの学習記録や趣味について書いています。"
          />
          <script
            data-ad-client="ca-pub-5921811975278816"
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
          ></script>
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
