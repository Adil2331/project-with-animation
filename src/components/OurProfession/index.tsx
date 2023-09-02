import React from 'react'
import './style.css'

const OurProfession = () => {
  return (
    <div className="OurProfession">
      <img
        className="profession_img"
        src="https://cherchesusan.com/wp-content/uploads/fly-images/489/f22-1-0x1200.png"
        alt=""
      />
      <div className="profession_inner">
        <h3 className="profession_subtitle">
          Our<span>Profession.</span>
        </h3>
        <h1 className="profession_title">Headhunters</h1>
        <p className="profession_text">
          Cherche Susan (Seeking Susan) recruits executives and senior
          executives in France and Europe upon strategic function related to
          brand, products, services, data and consumers.
        </p>
        <a href="#" className="profession_link" style={{ marginTop: '100px' }}>
          MORE ABOUT OUR JOB
        </a>
      </div>
    </div>
  )
}

export default OurProfession
