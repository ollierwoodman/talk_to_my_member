import Head from "next/head"

export default function HeadTag({title}) {
  return (
    <>
      <Head>
        <title>{`${title} | Talk to your member`}</title>
        <meta name="description" content="A website to help you talk to your electorate representative MP about issues that matter to you" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </>
  )
}