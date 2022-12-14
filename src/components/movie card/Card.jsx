import React from 'react'
import styles from './Card.module.css'
import coverImg from '../../assets/img/posters/dc.jpg'
import bannerImg from '../../assets/img/banner/banner1080p.png'
import { StarFill } from 'react-bootstrap-icons'

function Card() {
  return (
    <a href="#" className={styles.links}>
      <div className={styles.cardWraper}>
        <div
          className={styles.card}
          style={{ backgroundImage: `url(${coverImg})` }}
        >
          <img src={bannerImg} alt="hello" className={styles.banner} />
          <div className={styles.card2}>
            <div className={styles.content}>
              <StarFill style={{ color: '#5da93c' }} />
              <h4 style={{ paddingBottom: '20px' }}>6/10</h4>
              <h4>Action</h4>
              <h4>Drama</h4>
            </div>
            <a href="#" className={styles.links}>
              <div className={styles.viewBtn}>View Details</div>
            </a>
          </div>
        </div>
        <div className={styles.title}>
          <span>DC League of Super-Pets</span>
          <span>2022</span>
        </div>
      </div>
    </a>
  )
}

export default Card
