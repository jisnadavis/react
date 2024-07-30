import React, { useState } from 'react'
import './header.css'

export const Header = ({ H, flexdir, bgcolor, w, r }) => {
  console.log('soy header yo renderizo ')
  const [where, setwhere] = useState('Home')
  const changepath = (text) => {
    setwhere(text)
    console.log(where)
  }
  return (
    <header
      style={{
        height: H,
        backgroundColor: bgcolor,
        width: w,
        position: r === 0 ? 'absolute' : 'relative',
        right: r
      }}
    >
      {console.log('from return the value od where', where)}
      <nav style={{ flexDirection: flexdir }}>
        <ul style={{ flexDirection: flexdir, height: H }}>
          <li>
            <a
              href='#home'
              onClick={() => changepath('Home')}
              className={where === 'Home' ? 'active' : 'disabled'}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href='#login'
              onClick={() => changepath('Login')}
              className={where === 'Login' ? 'active' : 'disabled'}
            >
              Login
            </a>
          </li>
          <li>
            <a
              href='#about'
              onClick={() => changepath('About')}
              className={where === 'About' ? 'active' : 'disabled'}
            >
              About
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
