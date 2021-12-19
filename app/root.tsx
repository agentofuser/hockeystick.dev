import {
  Links,
  LinksFunction,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from 'remix'
import type { MetaFunction } from 'remix'
import styles from './tailwind.css'

export const meta: MetaFunction = () => {
  return {
    title:
      'Hockeystick Dev | How to Remix.run with Cloudflare Workers',
  }
}

export const links: LinksFunction = () => [
  // FIXME: Uncomment after adding enough tailwind to make things look
  //  good. With the basic styles it looks worse than with no css.
  // { rel: 'stylesheet', href: styles },
]

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1"
        />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === 'development' && <LiveReload />}
      </body>
    </html>
  )
}
