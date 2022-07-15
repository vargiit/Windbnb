import "./Stay.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
function Stay(props) {
  return (
    <div className="stay-container">
      <img src={props.stay.img} alt="" />
      <div className="category-container">
        <p>{props.stay.category}</p>
        <span>
          <FontAwesomeIcon icon={faStar} />
          {props.stay.rating}
        </span>
      </div>

      <p className="stay-title">{props.stay.title}</p>
    </div>
  );
}

export default Stay;
