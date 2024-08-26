import Image from 'next/image'
import React from 'react'
import styles from './featured.module.css'

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey, GoBlog here!</b> discover my stories and my creative ideas.</h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
          <p className={styles.postDesc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis maiores architecto nihil voluptates ea veniam. Omnis architecto quas unde maiores dolores enim temporibus adipisci velit voluptates, voluptate suscipit, veritatis nam!</p>
        <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  )
}

export default Featured