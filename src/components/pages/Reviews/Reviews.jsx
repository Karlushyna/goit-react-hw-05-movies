import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import styles from './reviews.module.css'
import { movieReviews } from "components/services/movies-api";
import ReviewsList from './ReviewsList';

const Reviews = () => {
const [reviews, setReviews] = useState();
const {id} = useParams();

useEffect(() => {
  const fetchPosts = async () => {
    try {
      const results = await movieReviews(id);
      setReviews(results);
      
    } catch ({ response }) {
      console.log(response.data.message);
    }
  }
  fetchPosts();
}, [id]);
  
  if(reviews) {
    return (
    <ul className={styles.list}>
      {reviews.length 
      ? <ReviewsList reviews={reviews}/> 
      : <h3>Not available</h3>}
    </ul>
  )
}

}

export default Reviews;