import React from 'react'

import discord from '../../../assets/images/join-discord.jpg'
import like from '../../../assets/images/like.jpg'

import '../styles/Widget.css'

const Widget = () => {
  return(
    <aside>
      <a class="image" href="https://discord.gg/PuSgAPhHtQ">
        <img src={discord} alt="" />
      </a>
      <a class="image" href="https://facebook.com/fm387">
        <img src={like} alt="" />
      </a>
    </aside>
  )
}

export default Widget