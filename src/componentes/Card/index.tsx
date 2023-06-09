import React from 'react'
import styles from './Card.module.scss';

interface ICard{  
  children: React.ReactNode

}

export default function Card({children}:ICard) {
  return (
    <section className={styles.card}>      
      {children}
    </section>
  )
}
