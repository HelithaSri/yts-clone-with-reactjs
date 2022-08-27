import React from 'react'
import styles from './Card.module.css'
import coverImg from '../../../assets/img/posters/dc.jpg'

function Card() {
  return (
    <a href='#'>
      <div className={styles.cardWraper}>
        <div
          className={styles.card}
          style={{ backgroundImage: `url(${coverImg})` }}
        >
          {/* <img src="../../../assets/img/posters/dc.jpg" alt="" /> */}
          {/* <img src={c} alt="" /> */}

          <div className={styles.card2}>
            <div className={styles.content}>
              <h4>Star</h4>
              <h4>6/10</h4>
              <h4>Action</h4>
              <h4>Drama</h4>
            </div>
            <a href='#'>
              <div className={styles.viewBtn}>View Details</div>
            </a>
          </div>
        </div>
      </div>
    </a>
  )
}

export default Card
