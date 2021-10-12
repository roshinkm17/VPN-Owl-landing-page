import React from 'react'

function Gallery() {
  return (
    <div id="gallery" className="mt-5 mx-auto">
      <h1 className="text-primary display-5 fw-bold">Gallery</h1>
      <div className="row mt-5">
        <div className="col-6 col-md-4 p-0">
          <div>
            <img
              src="https://images.unsplash.com/photo-1603985529862-9e12198c9a60?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=861&q=80"
              alt="Gallery image"
              className="img-fluid"
            />
          </div>
          <div>
              <img
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aW50ZXJuZXR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt="Gallery image"
              className="img-fluid"
            />
          </div>
        </div>
        <div className="col-6 col-md-4 p-0">
          <div>
            <img
              src="https://images.unsplash.com/photo-1484807352052-23338990c6c6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aW50ZXJuZXR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt="Gallery image"
              className="img-fluid"
            />
          </div>
          <div >
              <img
              src="https://images.unsplash.com/photo-1501250987900-211872d97eaa?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGludGVybmV0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt="Gallery image"
              className="img-fluid"
            />
          </div>
        </div>
        <div className="col-12 col-md-4 p-0">
          <div>
            <img
              src="https://images.unsplash.com/photo-1612442058361-178007e5e498?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fHNtYXJ0cGhvbmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=600"
              alt="Gallery image"
              className="img-fluid w-100"
            />
          </div>
          <div>
              <img
              src="https://images.unsplash.com/photo-1514996550219-62672472d03b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjN8fHNtYXJ0cGhvbmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt="Gallery image"
              className="img-fluid w-100"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gallery
