import Head from 'next/head'
import styles from '../styles/Home.module.css'
import InfoPanel from '../components/InfoPanel'
import Item from '../components/Item'
import items from '../items.json'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Дождь</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <img src="/logo.svg" className={styles.logo} />
      </header>
      
      <main className={styles.content}>
        <div className={styles.infoPanel}>
          <InfoPanel />
        </div>
        
        <div className={styles.items}>
          {items.map((item, index) => (
            <div key={index} className={styles.item}>
              <Item
                date={item.date}
                image={item.image}
                title={item.title}
                url={item.url}>
              </Item>
            </div>
          ))}
        </div>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
