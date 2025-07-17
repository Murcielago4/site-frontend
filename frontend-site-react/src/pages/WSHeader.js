import React from 'react';
import WayToText from "../components/WayToText";
import { ways } from "../data";
import '../Header.css';

function WSHeader() {
  return (
    <div className="Site">
      <section className="frame">
        <ul className="horizontal-menu">
          {ways.map((item, index) => (
            <WayToText key={index} {...item} />
          ))}
        </ul>
      </section>
    </div>
  );
}
export default WSHeader;