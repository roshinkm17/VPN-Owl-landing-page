import React from 'react';
import {MdMoneyOffCsred} from "react-icons/md"

function FeatureCard({title, icon}) {
  return (
    <div className="col-12 col-sm-6 col-lg-4 col-xl-3 mb-4">
      <div className="card shadow-sm" style={{backgroundColor: "#FFF9E6"}}>
        <div className="card-body">
          <h5 className="card-title fw-bold text-secondary h5">{icon}</h5>
          <h5 className="card-title fw-bold text-warning h2 mb-4">{title}</h5>
          <p className="card-text text-black-75">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
    </div>
  )
}

export default FeatureCard
