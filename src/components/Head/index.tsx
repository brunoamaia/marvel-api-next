import Head from 'next/head'

interface HeadProps {
  title: string;
}

export default function Home({ title }: HeadProps) {
  return (
    <Head>
      <title>{title}</title>
    </Head>
  )
}