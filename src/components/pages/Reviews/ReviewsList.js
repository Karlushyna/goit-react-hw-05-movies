const ReviewsList = ({ reviews }) => {
  return reviews.map(({ author, content, id }) => (
    <li key={id}>
      <h3>Author: {author}</h3>
      <p>{content}</p>
    </li>
  ));
};

export default ReviewsList;
