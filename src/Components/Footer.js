import React from 'react'

function Footer() {
    return (
        <div className="bg-warning p-4 mt-5">
            <h4 className="fw-bold">VPN Owl</h4>
            <div className="d-flex justify-content-between flex-column">
                <nav className="d-flex flex-column mb-4">
                    <a href="" className="text-decoration-none text-black me-4">About Us</a>
                    <a href="" className="text-decoration-none text-black me-4">Features</a>
                    <a href="" className="text-decoration-none text-black me-4">Reviews</a>
                    <a href="" className="text-decoration-none text-black me-4">Gallery</a>
                </nav>
                <p className="p-0 small text-light">Copyright © 2012–2021 NordVPN.com</p>
            </div>
        </div>
    )
}

export default Footer
