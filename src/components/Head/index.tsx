import Head from 'next/head'

interface HeadProps {
  description: string;
  title: string;
}

export default function Home({ description, title }: HeadProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Head>
  )
}