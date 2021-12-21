import {
  Links,
  LinksFunction,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLocation,
} from 'remix'
import type { MetaFunction } from 'remix'
import styles from './tailwind.css'

export const meta: MetaFunction = () => {
  return {
    title:
      'HockeyStick.dev | How to Remix.run with Cloudflare Workers',
  }
}

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: styles },
]

export default function App() {
  const location = useLocation()

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
        <link
          rel="canonical"
          href={`https://hockeystick.dev${location.pathname}`}
        />
      </head>
      <body>
        <div className="container mx-auto max-w-screen-md mt-16">
          <Outlet />
        </div>
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === 'development' && <LiveReload />}
      </body>
    </html>
  )
}
