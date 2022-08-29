import React from 'react'
import styles from './HomeFooter.module.css'

function HomeFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        
        <div>
          <ul>
            <li>YTS © 2011 - 2022</li>
            <li>-</li>
            <li>
              <a href="https://yts.mx/blog">Blog</a>
            </li>
            <li>-</li>
            <li>
              <a href="https://yts.mx/dmca">DMCA</a>
            </li>
            <li>-</li>
            <li>
              <a href="https://yts.mx/api">API</a>
            </li>
            <li>-</li>
            <li>
              <a href="https://yts.mx/rss-guide">RSS</a>
            </li>
            <li>-</li>
            <li>
              <a href="https://yts.mx/contact">Contact</a>
            </li>
            <li>-</li>
            <li>
              <a href="https://yts.mx/browse-movies">Browse Movies</a>
            </li>
            <li>-</li>
            <li>
              <a href="https://yts.mx/requests">Requests</a>
            </li>
            <li>-</li>
            <li>
              <a href="https://yts.mx/login">Login</a>
            </li>
            <li>-</li>
            <li>
              <a href="https://yts.mx/languages">Language</a>
            </li>
          </ul>
        </div>

        <div>
          <ul>
            <li>
              <a href="https://eztv.re" title="EZTV">
                EZTV
              </a>
            </li>
            <li>-</li>
            <li>
              <a href="https://yifystatus.com" title="YTS YIFY Status">
                YIFY Status
              </a>
            </li>
            <li>-</li>
            <li>
              <a href="https://ytsproxies.com" title="YTS Proxies">
                YTS Proxies
              </a>
            </li>
            <li>-</li>
            <li>
              <a
                href="http://ytsyifyupcmxftncrnqd4bmwxvhlibhdat74w6xnmn33njxts4eeaiqd.onion/"
                title="YTS Proxies (TOR)"
              >
                YTS Proxies (TOR)
              </a>
            </li>
          </ul>
        </div>

        <div>
          <ul>
            <li>
              By using this site you agree to and accept our{' '}
              <a href="/terms">User Agreement</a>, which can be read{' '}
              <a href="/terms">here</a>.
            </li>
          </ul>
        </div>

      </div>
    </footer>
  )
}

export default HomeFooter
