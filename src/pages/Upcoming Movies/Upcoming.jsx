import React from 'react'
import styles from './Upcoming.module.css'
import Card from './../../components/movie card/Card';

function UpcomingMovies() {
  return (
    <section className={styles.section}>
        <div className={styles.container}>
        <div className={styles.upcomingTitle}>
          <h3>Upcoming YIFY Movies</h3>
          <a href="#"><p>Request a Movie</p></a>
        </div>
        <div className={styles.upcoming_row}>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </div>
      </div>
    </section>
  )
}

export default UpcomingMovies