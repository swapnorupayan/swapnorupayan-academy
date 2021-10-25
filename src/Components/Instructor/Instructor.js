import React from 'react';
import './Instructor.css';

const Instructor = (props) => {
    const { profile, name, title } = props.instructor;
    return (

        <div className=" mt-1 d-flex justify-content-center">
            <div className="card3 p-4">
                <div className="d-flex align-items-center">
                    <div className="image"> <img src={profile}
                        className="rounded" width="155" alt="" /> </div>
                    <div className="ml-3 w-100">
                        <h4 className="mb-0 mt-0">{name}</h4> <span>{title}</span>
                        <div className="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
                            <div className="d-flex flex-column"> <span className="articles">Articles</span> <span className="number1">38</span> </div>
                            <div className="d-flex flex-column"> <span className="followers">Followers</span> <span className="number2">980</span> </div>
                            <div className="d-flex flex-column"> <span className="rating">Rating</span> <span className="number3">8.9</span> </div>
                        </div>
                        <div className="button mt-2 d-flex flex-row align-items-center"> <button className="btn btn-sm btn-outline-primary w-100">Chat</button> <button className="btn btn-sm btn-primary w-100 ml-2">Follow</button> </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Instructor;