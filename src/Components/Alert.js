import React from 'react'

function Alert({greeting}) {
  return (
    <div style={{marginTop:"5rem"}}>
      <div
        className="alert alert-primary alert-dismissible fade show"
        role="alert"
      >
        <strong>Hey There!</strong> Good {greeting} to a safe internet
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
    </div>
  )
}

export default Alert
