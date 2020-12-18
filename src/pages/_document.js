import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import * as fs from 'fs'
import * as path from 'path'

class InlineStylesHead extends Head {
  getCssLinks() {
    return this.__getInlineStyles()
  }

  __getInlineStyles() {
    const { assetPrefix, files } = this.context._documentProps
    if (!files || files.length === 0) return null

    return files
      .filter((file) => /\.css$/.test(file))
      .map((file) => (
        <style
          key={file}
          nonce={this.props.nonce}
          data-href={`${assetPrefix}/_next/${file}`}
          dangerouslySetInnerHTML={{
            __html: fs.readFileSync(path.join(process.cwd(), '.next', file), 'utf-8'),
          }}
        />
      ))
  }
}

export default class Document extends NextDocument {
  static async getInitialProps(ctx) {
    const initialProps = await NextDocument.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
        <InlineStylesHead>
          <link
            rel="preload"
            href="/fonts/Poppins-Regular.ttf"
            as="font"
            type="font/woff2"
            crossOrigin="true"
          />
        </InlineStylesHead>
        <body >
          <Main />
          <NextScript />
          <script async defer src="https://scripts.simpleanalyticscdn.com/latest.js"></script>
          <noscript><img src="https://queue.simpleanalyticscdn.com/noscript.gif" alt=""/></noscript>
        </body>
      </Html>
    )
  }
}
