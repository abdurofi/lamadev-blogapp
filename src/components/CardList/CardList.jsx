
import React from 'react'
import Card from '../Card/Card'
import Pagination from '../Pagination/Pagination'
import styles from './cardList.module.css'

const CardList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      <div className={styles.posts}>
        <Card />
        <Card />
        <Card />
        <Card />

      </div>
      <Pagination />
    </div>
  )
}

export default CardList