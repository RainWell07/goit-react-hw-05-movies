import { MovieReviews } from "components/API/API";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { StyledReviews } from "./StyledReviews";

export default function Reviews() {
  const { movieID } = useParams();
  const [reviewsArr, setReviewsArr] = useState([]);
  const [doesHaveReviews, setDoesHaveReviews] = useState(true);
  const [hasShownToast, setHasShownToast] = useState(false);

  useEffect(() => {
    MovieReviews(movieID).then((resp) => {
      if (resp.data.total_results === 0) {
        setDoesHaveReviews(false);
        if (!hasShownToast) {
        toast.info("Sorry, but there are no reviews about this movie");
        setHasShownToast(true);
        }
        return;
      }
      setReviewsArr([...resp.data.results]);
    });
  }, [movieID, hasShownToast]);

  useEffect(() => {
    document.getElementById("scroll").scrollIntoView({ behavior: "smooth" });
  }, [reviewsArr]);

  return doesHaveReviews ? (
    <StyledReviews>
      {reviewsArr.map(({ author, id, content }) => (
        <li key={id}>
          <h4 style={{ color: "#067937" }}>Author: {author}</h4>
          <p>{content}</p>
        </li>
      ))}
    </StyledReviews>
  ) : (
    <ToastContainer />
  );
}
