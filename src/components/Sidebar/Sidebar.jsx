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
                <div className="card-body" style={{background: 'rgba(96, 71, 236, 0.1)'}}>
                    <h4 className='' style={{color:'#6047EC',}}>Spent time on read : {time} min</h4>
                </div>
            </div>
            <div className="card" style={{background: 'rgba(17, 17, 17, 0.05)'}}>
                <div className="">
                    <p className='p-3' style={{fontSize:'20px',}}>Bookmarked Blogs :{infoDetails.length}</p>
                </div>
                <div className="" style={{}}>
                    {

                        infoDetails.map(data => <div className='details card m-3 p-3' style={{fontSize:'18px'}}>
                            {data.blog_title}
                        </div>)

                    }
                </div>
            </div>
        </div>
    );
};

export default Sidebar;