import React from 'react'
import styles from './Latest.module.css'
import Card from './../../components/movie card/Card';

function LatestMovies() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.latestTitle}>
          <h3>Latest YIFY Movies Torrents</h3>
          <a href="#"><p>Browse All</p></a>
        </div>
        <div className={styles.latest_row}>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </div>
        <div className={styles.latest_row}>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </div>
      </div>
    </section>
  )
}

export default LatestMovies