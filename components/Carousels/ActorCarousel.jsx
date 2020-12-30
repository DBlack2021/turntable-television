import React from 'react'
import ActorCard from '../ActorCard/ActorCard'

import styles from './SearchResults.module.css';
import Carousel from './Carousel';

export default function ActorCarousel({ results }) {
  return (
    <div style={{ padding: '30px' }} className={styles.container}>
      <Carousel itemsPerPage={5}>
        {
          results.filter(result => result.profile_path).map(result => (
            <ActorCard actor={result} />           
          ))
        }
      </Carousel>
    </div>
  )
}
