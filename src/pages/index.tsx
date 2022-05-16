import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>3QTS</title>
        <meta name="description" content="3QTS created with NextJS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
      
    </div>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to 3QTS
        </h1>

        <p className={styles.description}>
        We have the best fitting 3/4 length shirts on the market
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>
    <div>
      <p className="text-center text-xl">This will be an everlasting love, this wil be</p>
    </div>
      <footer className={styles.footer}>
        <a
          href="https://www.github.com/ncradtke00"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered with{' '}
          <span className={styles.logo}>
            Love and Coffee
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
