import { ReactGoogleReviews } from "react-google-reviews";
import "react-google-reviews/dist/index.css";

// Widget Featurable seul, chargé à la demande par LedReviews (fichier JS séparé).
export default function ReviewsWidget() {
	return <ReactGoogleReviews layout="carousel" featurableId="07455073-608e-491d-94e1-433314951082" theme="dark" />;
}
