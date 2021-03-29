import React from 'react';
import Logo1 from "./../../images/app-store.png";
import Logo2 from "./../../images/st.jpg";


const Footer = ()=>{
    return (
        <div className="footer text-light bg-dark" >
        <div className="container">
          <div className="row">
            <div className="footer-col-1 ">
              <h3>Download our App</h3>
              <p>Download App for Android and iOS mobile phone </p>
              <div className="app-logo">
                <img src={Logo1} alt="" />
            
              </div>
            </div>
            <div className="footer-col-2">
              <img src={Logo2} center alt="" />
              <p>
                ----------------- &copy; 2021.
                Storebay.com --------------------
              </p>
            </div>
            <div className="footer-col-3">
              <h3>Follow</h3>
              <ul>
                <li>Facebook</li>
                <li>Twitter</li>
                <li>Instagram</li>
                <li>YouTube</li>
              </ul>
            </div>
            <div className="footer-col-4 " >
              <h3>Registered Office</h3>
              <ul>
              <li>
                <p>D-59/127 K-8- Nirala Nagar LANE N0.3</p>
                <p>Shivpurva, Mahamoorganj</p>
                <p>Varanasi</p>
                <p>UttarPradesh, 221010</p>
                </li>
                <li>Phone no: 8448617189 , 6393062954</li>
                <li>Return Policy</li>
                <li>Join Affiliate</li>
              </ul>
            </div>
          </div>
          <hr />
          <p>Designed and Improved by : <a href="https://www.linkedin.com/in/arunabh-tiwari-1106/">Arunabh Tiwari & Co,. Click to visit my LinKedln</a></p>
          <p>All Right Reserve: <a href="https://en.wikipedia.org/wiki/All_rights_reserved">Click Here</a></p>
          <p> &copy; 2021. For Educational purposes only!</p>

        </div>
      </div>
    )
};

export default Footer;