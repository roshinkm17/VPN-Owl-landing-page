import React from 'react'

function ReviewCard() {
  return (
    <div  className="col-12 col-md-6 col-xl-4 mb-4">
      <div>
        <div className="">
          <div className="card">
              <div className="card-header bg-transparent border-0 pt-3">
                  <h5 className="card-title h4 fw-bold">Andrew Tye</h5>
                  <p className="card-text h6 text-black-50">CEO, The best company</p>
              </div>
            <div className="card-body">
              <p className="card-text">
                ❝ Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pulvinar aliquet fermentum. MorLorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pulvinar aliquet fermentum. Mor ❞
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReviewCard
