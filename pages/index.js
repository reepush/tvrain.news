import { useState, useEffect } from 'react'
import Head from 'next/head'
import axios from 'axios'
import styles from '../styles/Home.module.css'
import InfoPanel from '../components/InfoPanel'
import Item from '../components/Item'

export default function Home() {
  let news = {}
  const [items, setItems] = useState([])
  
  useEffect(() => {
    axios('/api/news').then(response => {
      news = response.data
      console.log(response.data)
      setItems(news.popular)
    })
  }, [])
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Дождь</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
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
