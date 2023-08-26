import React from 'react'
import '../components/Footer.css'

const Footer = () => {
  return (
    <div className="Footer">
      <div className="frame-wrapper">
        <div className="frame">
          <div className="h-1-wrapper">
            <h1 className="text-wrapper">LOGO</h1>
          </div>
          <div className="group">
            <div className="group-wrapper">
              <div className="div">
                <p className="p">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <div className="overlap">
                  <div className="overlap-group">
                    <div className="zeux-portfolio">
                      Zeux
                      <br />
                      Portfolio <br />
                      Careers <br />
                      Contact us
                    </div>
                    <div className="group-2">
                      <p className="text-wrapper-2">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                      </p>
                      <div className="text-wrapper-3">+908 89097 890</div>
                      <div className="text-wrapper-4">Contact us</div>
                    </div>
                  </div>
                  <div className="text-wrapper-4">About us</div>
                </div>
                <div className="text-wrapper-5">@Lorem</div>
                <div className="group-3">
                  <div className="facebook-wrapper">
                    <img className="facebook" alt="Facebook" src="" />
                  </div>
                  <div className="instagram-wrapper">
                    <img className="instagram" alt="Instagram" src="instagram-1.svg" />
                  </div>
                  <div className="twitter-wrapper">
                    <img className="twitter" alt="Twitter" src="twitter-1.svg" />
                  </div>
                  <div className="linkedin-wrapper">
                    <img className="linkedin" alt="Linkedin" src="linkedin-1.svg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img className="line" alt="Line" src="line-1.svg" />
          <p className="text-wrapper-6">Copyright ® 2022 prodesigner All rights Rcerved</p>
        </div>
      </div>
    </div>
  )
}

export default Footer