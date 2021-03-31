import Layout from '../components/Layout/Layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  //todo:here all pages are rendered
  //* then can make layout component that wrapped all pages inside it
  return (
    <Layout>
      {/* passed ...pageProps as prop of contain pages */}
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
