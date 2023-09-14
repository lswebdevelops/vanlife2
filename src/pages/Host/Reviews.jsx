const reviewImage = "/src/assets/images/reviews-graph.png";

const Reviews = () => {
  console.log(reviewImage);
  return (
    <>
      <div>
        <h1>Your reviews</h1>
        <p>
          last <span>30 days</span>
        </p>
      </div>
      <img className="reviewsImage" src={reviewImage} alt="reviews" />
      <div>
        <p>Reviews(2)</p>
        <p>⭐⭐⭐⭐⭐</p>
        <p>
          <span>Eliot</span> December 1,2022
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ex quae
          excepturi illo laudantium voluptatem velit unde neque tenetur autem
          totam deleniti, fugiat ipsa possimus nesciunt repudiandae corporis
          accusamus? Voluptatem.
        </p>
        <p>⭐⭐⭐⭐⭐</p>
        <p>
          <span>Alice</span> December 15,2021
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ex quae
          excepturi illo laudantium voluptatem velit unde neque tenetur autem
          totam deleniti, fugiat ipsa possimus nesciunt repudiandae corporis
          accusamus? Voluptatem.
        </p>
      </div>
    </>
  );
};

export default Reviews;
