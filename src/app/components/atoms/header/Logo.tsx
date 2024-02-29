import { scrollTop } from "../../../utils/scrollTop";
import { Link } from "react-router-dom";
function Logo() {
  return (
    <Link to="/" onClick={scrollTop}>
      <img
        src={"images/shared/desktop/logo.svg"}
        alt="logo"
        className="cursor-pointer lg:absolute lg:left-0 lg:top-[50%] lg:translate-y-[-50%] "
      />
    </Link>
  );
}

export default Logo;
