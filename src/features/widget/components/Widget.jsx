import React from 'react'
import AdSense from 'react-adsense'

import discord from '../../../assets/images/join-discord.jpg'
import like from '../../../assets/images/like.jpg'

import '../styles/Widget.css'

const Widget = () => {
  return(
    <aside>
      <AdSense.Google
        client='ca-pub-8850691955309244'
        slot='1823064665'
        style={{ display: 'block' }}
        layout='in-article'
        format='fluid'
      />
      <a class="image" href="https://discord.gg/PuSgAPhHtQ">
        <img src={discord} alt="" />
      </a>
      <AdSense.Google
        client='ca-pub-8850691955309244'
        slot='1823064665'
        style={{ display: 'block' }}
        layout='in-article'
        format='fluid'
      />
      <a class="image" href="https://facebook.com/fm387">
        <img src={like} alt="" />
      </a>
    </aside>
  )
}

export default Widget