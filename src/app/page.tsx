"use client"

import { useEffect, useState } from 'react'
import styles from './page.module.scss'
import LoadingImage from './components/top/LoadingImage'
import HeaderTest from './components/others/Header'
import FooterTest from './components/others/Footer'
import LotteryTop from './components/lottery/LotteryTop'


export default function Home() {
  const [pageLoaded, setPageLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (document.readyState === 'complete') {
        setPageLoaded(true);
      } else {
        timer;
      }
    }, 1500);
    return () => clearTimeout(timer);
  }, [])

  return (
    <main className={`${styles.main} ${!pageLoaded && styles.loading}`}>
      {!pageLoaded && <LoadingImage />}
      {pageLoaded &&
        <>
        <HeaderTest />
        <LotteryTop />
        <FooterTest />
        </>}
    </main>
  )
}
