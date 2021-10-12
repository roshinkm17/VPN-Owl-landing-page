import React from 'react'

function Contact() {
  return (
    <div id="contact" className="mt-5 mx-auto">
      <h1 className="text-primary display-5 fw-bold">Contact Us</h1>
      <div className="row mt-5">
        <form>
          <div className="mb-3">
            <input
              type="email"
              placeholder="Email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <textarea
                rows="10"
              className="form-control"
              placeholder="Your Message"
              id="floatingTextarea2"
            ></textarea>
          </div>
          <button type="submit" className="btn btn-dark w-100 btn-lg">
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact
