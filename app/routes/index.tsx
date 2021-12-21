// WAITING for this to be fixed before we can use react-markdown:
// https://github.com/remix-run/remix/issues/109
// import ReactMarkdown from 'react-markdown'
// import remarkGfm from 'remark-gfm'

export default function Index() {
  return (
    <div className="prose dark:prose-invert">
      <h1>HockeyStick.dev</h1>
      <p className="lead">
        Learn how to build full-stack websites on the edge with
        Remix.run and Cloudflare Workers.
      </p>
      <p>
        Hi, my name is <strong>Helder</strong>, aka{' '}
        <a href="https://agentofuser.com">@agentofuser</a>, and this is
        my ubermeta #LearnInPublic devlog about learning Remix and
        Cloudflare Workers (and Pages, KV, etc.) while building out
        this very website and the CMS to edit it, which I plan later on
        to extract into its own product.
      </p>
      <p>
        Things are pretty bare bones at the moment, but feel free to
        reach out on twitter or by email and let me know if there's
        something specific you'd like me to cover in a tutorial.
      </p>
      <p>Thanks for stopping by!</p>
      <p>
        Cheers,
        <br />
        Helder
      </p>
      <h3>Contact</h3>
      <ul>
        <li>
          Twitter:{' '}
          <a
            target="_blank"
            href="https://twitter.com/hockeystickdev"
            rel="noreferrer"
          >
            @hockeystickdev
          </a>
        </li>
        <li>
          Email:{' '}
          <a href="mailto:webmaster@hockeystick.dev">
            webmaster@hockeystick.dev
          </a>
        </li>
      </ul>
    </div>
  )
}
