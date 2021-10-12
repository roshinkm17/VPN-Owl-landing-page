import React from 'react'
import { BsApple } from 'react-icons/bs'
import { FcAndroidOs } from 'react-icons/fc'
import phoneImage from '../assets/phone.png'

function Main() {
  return (
    <div style={{ paddingTop: '5rem', paddingBottom: '3rem'}} >
      <div className="content mt-4 d-flex align-items-center justify-content-center text-center text-lg-start">
        <div className="w-75 main--content">
          <h1 className="display-3 fw-bold mb-3">
            Keeps you <span className="text-warning">Safe</span>,{' '}
            <span className="text-warning">Secure</span> and <span className="text-warning">Private</span> Online ⚡
          </h1>
          <p className="opacity-75 mx-auto my-5">
            VPN protects your passwords, credit card, and bank accounts from
            hackers. Plus, gives you unrestricted access to global online
            content.
          </p>
          <div>
            <a href="" className="btn btn-dark btn-lg mb-3 mb-lg-0 me-lg-3">
              Get on App Store <BsApple />
            </a>
            <a href="" className="btn btn-outline-success btn-lg">
              Get on Play Store <FcAndroidOs />
            </a>
          </div>
        </div>
        <div>
          <img src={phoneImage} alt="" className="d-none d-md-block"/>
        </div>
      </div>
    </div>
  )
}

export default Main
