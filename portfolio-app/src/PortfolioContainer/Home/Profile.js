import React from 'react'
import Typical from 'react-typical'
import './Profile.css'

export default function Profile() {
  return (
        <div className="profile-container">
            <div className="profile-parent">
                 <div className="profile-details">
                    <div className="colz">
                        <div className="colz-icon">
                            <a href="https://es-es.facebook.com/">
                            <i className="fa fa-facebook-square"></i>
                            </a>
                            <a href="https://accounts.google.com/signin/v2/identifier?passive=1209600&osid=1&continue=https%3A%2F%2Fplus.google.com%2F&followup=https%3A%2F%2Fplus.google.com%2F&flowName=GlifWebSignIn&flowEntry=ServiceLogin">
                            <i className="fa fa-google-plus-square"></i>
                            </a>
                            <a href="https://www.instagram.com/">
                            <i className="fa fa-instagram"></i>
                            </a>
                            <a href="https://twitter.com/">
                            <i className="fa fa-twitter"></i>
                            </a>
                            <a href="https://www.youtube.com/">
                            <i className="fa fa-youtube-square"></i>
                        </a>
                     </div>
                    </div>
                    <div className="profile-details-name">
                        <span className="primary text">
                            {" "}
                                Hello, I'm <span className="highlighted-text">IVAN.</span>
                        </span>
                    </div> 
                    <div className='profile-details-role'>
                            <span className='primary-text'>
                                    {" "}
                                    <h1>
                                        {" "}
                                        <Typical
                                            loop={Infinity}
                                            steps={[
                                                 "Frontend Developer",
                                                 1000,
                                                "React and Next.js Stack Dev",
                                                1000,
                                                "Crypto Enthusiast",
                                                1000,
                                                "Specialized in React",
                                                1000,
                                            ]}
                                        />
                            </h1>
                            <span className='profile-role-tagline'>
                                Knack of bulding applications with React and Next.js.
                            </span>
                        </span>               
                    </div>
                   <div className='profile-options'>
                       <button className='btn primary-btn'>
                           {" "}
                           Hire me {" "}
                       </button>
                            <a href='#' download='#'>
                                    <button className='btn highlighted-btn'>Get resume</button>
                     </a>
                   </div>
                </div>
                <div className="profile-picture">
                    <div className="profile-picture-background"></div>
                </div>                            
            </div>
        </div>
    );

}
