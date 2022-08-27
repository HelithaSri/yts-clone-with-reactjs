import React from 'react'
import Card from './../../components/common/movie card/Card'
import styles from './Hero.module.css'

function HeroSection() {
  return (
    <section style={{ backgroundColor: '#171717' }} className={styles.section}>
      <div className={styles.container}>
        <div>
          <h1>Download YTS YIFY movies: HD smallest size</h1>
          <p>Welcome to the official YTS.MX (.LT) website. Here you can browse and download YIFY movies in excellent 720p, 1080p, 2160p 4K and 3D quality, all at the smallest file size. YTS Movies Torrents</p>
        </div>
        <div className={styles.line}>
          <span>Popular Downloads</span>
          <hr/>
        </div>
        <div className={styles.popular_row}>
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </section>
  )
}

export default HeroSection
