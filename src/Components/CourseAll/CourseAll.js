import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'


const CourseAll = (props) => {
    const { course, price, img, details, profile } = props.course;
    return (

        <div className="card card-custom bg-white border-white border-0 my-3 mx-3">
            <div className="card-custom-img" >
                <img src={img} alt="" className="img-size" />
            </div>
            <div className="card-custom-avatar">
                <img className="img-fluid" src={profile} alt="Avatar" />
            </div>
            <div className="card-body" style={{ oberFlow: 'auto' }}>
                <h4 className="card-title">{course}</h4>
                <p className="card-text">{details.slice(0, 120)}</p>
            </div>
            <div>
                <h4 className='fee'>Course Fee: {price}</h4>
            </div>
            <div className="card-footer" style={{ background: 'inherit' }}>
                <a href="/hello" className="btn btn-outline-primary"> <FontAwesomeIcon icon={faShoppingCart} /> add to card</a>
            </div>
        </div>

    );
};

export default CourseAll;