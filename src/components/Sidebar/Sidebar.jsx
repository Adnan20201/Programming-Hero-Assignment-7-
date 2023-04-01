import React from 'react';
import './Sidebar.css';

const Sidebar = ({ times, infoDetails }) => {

    let time = 0;
    for (const newTime of times) {
        time = time + newTime.read_time;
    }




    return (
        <div>
            <div className="card">
                <div className="card-body">
                    <h4>Spent time on read : {time} min</h4>
                </div>
            </div>
            <div className="card">
                <div className="">
                    <p className='p-3'>Bookmarked Blogs :{infoDetails.length}</p>
                </div>
                <div className="" style={{}}>
                    {

                        infoDetails.map(data => <div className='details card m-3 p-1'>
                            {data.blog_title}
                        </div>)
                    
                    }
                        </div>
            </div>
            </div>
            );
};

            export default Sidebar;