
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import dr from "../data/dr.json";
function Reviews() {
  return (
    <div className="review">
      <Slide
        indicators={false}
        arrows={false}
        pauseOnHover={true}
        easing="cubic"
        infinite={true}
        transitionDuration={800}
      >
        {dr.map((review) => (
          <div key={review} className="review-slide">
            <h1>{review.name}</h1>
            <h2>{review.info}</h2>
            <h3 style={{color: '#403d58'}}>{review.stars} Stars</h3>
          </div>
        ))}
      </Slide>
    </div>
  );
}

export default Reviews;
