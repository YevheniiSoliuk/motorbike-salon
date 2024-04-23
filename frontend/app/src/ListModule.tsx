import { Link } from "react-router-dom";
import "./Sass/ListModule.scss";

import list from "./List";

const ListModule = () => {
  const models = list.map((item) => {
    return (
      <li key={item.id}>
        <Link to={item.model}>
          <img src={item.photo} alt="motorcycle" className="photo" />
          <br />
          {item.model}
        </Link>
      </li>
    );
  });
  return <>{models}</>;
};

export default ListModule;
