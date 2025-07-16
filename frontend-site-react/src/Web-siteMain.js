import Header from "./Header"
import './Header.css';
import WayToText from "./components/WayToText"
import {ways} from "./data"
import './Web-siteMain.css';

function WSHeader() {
  return (
    <div className="Site">
     <Header/>

    <section class="frame">
                <ul class="horizontal-menu">
    {ways.map((item, index) => (
        <WayToText key={index} {...item} />
    ))}
                </ul>
    </section>
    </div>
  );
}

export default WSHeader;

