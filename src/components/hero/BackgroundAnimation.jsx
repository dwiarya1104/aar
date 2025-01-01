import { faCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function BackgroundAnimation() {
  return (
    <div className="area">
      <ul className="circles">
        <li>{";"}</li>
        <li className="text-3xl opacity-55"></li>
        <li></li>
        <li></li>
        <li></li>
        <li className="text-3xl opacity-55"></li>
        <li className="text-3xl opacity-55">{"Code"}</li>
        <li></li>
        <li></li>
        <li>
          <FontAwesomeIcon icon={faCode} />
        </li>
      </ul>
    </div>
  );
}
