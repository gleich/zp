import Head from 'next/head'

export function Meta({ title }: { title: string }) {
  return (
    <Head>
      <title>{title}</title>
    </Head>
  )
}
