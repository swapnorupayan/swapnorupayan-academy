import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';
import Instructor from '../Instructor/Instructor';
import './Home.css';
import img from './digital-marketing_featured-image.png';
import img2 from './web-development-guideline-for-2020-t0-2030.jpeg';
import img3 from './1071218_Graphic-Design.jpg';

const Home = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('./profile.JSON')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <div className='container'>
            <div className="row">

                <div id="carouselExampleCaptions" className="carousel slide mt-2" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item">
                            <img src={img2} className="d-block w-100" alt="..." style={{ maxHeight: '350px' }} />
                            <div className="carousel-caption d-none d-md-block">
                                <h2 className='all3'>BUILD YOUR CAREER IN</h2>
                                <p>Web development is the work involved in developing a Web site for the Internet (World Wide Web) or an intranet (a private network).[1] Web development can range from developing a simple single static page of plain text to complex web applications, electronic businesses, and social network services. A more comprehensive list of tasks to which Web development commonly refers, may include Web engineering, Web design, Web content development, client liaison, client-side/server-side scripting, Web server and network security configuration, and e-commerce development.</p>
                            </div>
                        </div>
                        <div className="carousel-item active">
                            <img src={img} className="d-block w-100" alt="..." style={{ maxHeight: '400px' }} />
                            <div className="carousel-caption d-none d-md-block">
                                <h2 style={{ color: "rgb(252, 120, 59)" }}>BUILD YOUR CAREER IN</h2>
                                <p>Digital marketing, also called online marketing, is the promotion of brands to connect with potential customers using the internet and other forms of digital communication. This includes not only email, social media, and web-based advertising, but also text and multimedia messages as a marketing channel</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={img3} className="d-block w-100" alt="..." style={{ maxHeight: '400px' }} />
                            <div className="carousel-caption d-none d-md-block">
                                <h2 >BUILD YOUR CAREER IN</h2>
                                <p style={{ color: "black" }}>Graphic design is a craft where professionals create visual content to communicate messages. By applying visual hierarchy and page layout techniques, designers use typography and pictures to meet users' specific needs and focus on the logic of displaying elements in interactive designs, to optimize the user experience.</p>
                            </div>
                        </div>

                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
                <div className="col-sm-8 gridDesign">
                    {
                        courses.map(course => <Course
                            key={course.id}
                            course={course}
                        ></Course>)
                    }
                </div>
                <div className="col-sm-4">
                    <h1 className="instructor">Our Instructor</h1>
                    {
                        courses.map(instructor => <Instructor
                            instructor={instructor}
                        ></Instructor>)
                    }
                </div>
            </div>
        </div >
    );
};

export default Home;