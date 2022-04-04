import './Title.css';
import { Link } from 'react-router-dom';

function Title() {
  return (
      <h1 className="mainTitle">
        <Link className="mainTitleLink" to={`/`}>
          <span className="mainTitleLinkText">La perdición</span>
        </Link>
      </h1>				
  );
}

export default Title;
