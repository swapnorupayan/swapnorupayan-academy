import React from 'react'
import img from './Swapnorupayan.png';

const About = () => {
    return (
        <div className='container mt-5'>
            <div className="card mb-3" >
                <div className="row g-0">
                    <div className="col-md-5">
                        <img src={img} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-7">
                        <div className="card-body">
                            <h1 className="card-title">About Us</h1>
                            <p className="card-text text-justify">Swapnorupayan Academy is an institution where empowering the community for an excellent standard of learning is what we desire. We endeavor for the continuous improvement of our leaders who will work for constructing a better future. The institute is dedicated to serving the quality training programs under ISO 9001: 2015 certification which remarks us in the IT world. We will continue to share our knowledge for contributing to the success of individuals and to serve society with the best interest.
                                We are committed to providing our students with a platform where superiority is the mantra. We nurture the young talent by sharing knowledge, providing supports in learning techniques, co-operating them for international standard projects, making successful freelancers and driving our youth towards a world of entrepreneurship and thus reducing inequalities. Our culture is important to us and our team of experts drives our culture. The skilled human resource make our deliverables valuable that really helps us to set our standard internationally.</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;