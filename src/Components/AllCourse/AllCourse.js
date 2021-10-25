import React, { useEffect, useState } from 'react';
import CourseAll from '../CourseAll/CourseAll';
import './AllCourse.css'

const AllCourse = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('./courses.JSON')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <div>
            <div className='container'>
                <div className="row">
                    <h1 className='all'>Our All Course</h1>
                    <div className="col-sm-12 gridDesign2">
                        {
                            courses.map(course => <CourseAll
                                key={course.id}
                                course={course}
                            ></CourseAll>)
                        }
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AllCourse;