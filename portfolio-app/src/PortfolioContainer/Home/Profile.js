import React from 'react'
import Typical from 'react-typical'

export default function Profile() {
  return (
        <div className="profile-container">
            <div className="profile-parent">
                 <div className="profile-details">
                    <div className="colz">
                        <div className="colz- icon">
                            </div>
                            <a href="#">
                            <i className="fa fa-facebook-square"></i>
                            </a>
                            <a href="#">
                            <i className="fa fa-google-plus-square"></i>
                            </a>
                            <a href="#">
                            <i className="fa fa-instagram"></i>
                            </a>
                            <a href="#">
                            <i className="fa fa-twitter"></i>
                            </a>
                            <a href="#">
                            <i className="fa fa-youtube-square"></i>
                        </a>
                    </div>
                    <div className="profile-details-name">
                        <span className="primary text">
                            {" "}
                                Hello, I´m <span className="highlighted-text">Ivan</span>
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
                                                 "Enthusiastic Dev",
                                                1000,
                                                 "Frontend Developer",
                                                 1000,
                                                "React and Next.js Stack Dev",
                                                1000,
                                                "Crypto Enthusiast",
                                                1000,
                                                   "Especialiced in React",
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
                           Hire me {""}
                            <a href='#' download='#'></a>
                                    <button className='btn highlighted-btn'>Get resume</button>
                       </button>
                   </div>
                </div>
                <div className="profile-picture">
                    <div className="profile-picture-background"></div>
                </div>                            
            </div>
        </div>
 
 
 
 
 
    )

}
