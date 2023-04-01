import { Toast } from 'bootstrap';
import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Card from '../Card/Card';
import Sidebar from '../Sidebar/Sidebar';
import "./Blog.css";

const Blog = () => {
    const [showData, setShowData] = useState([]);
    const [times, setTimes] = useState([]);
    const [infoDetails, setInfoDetails] = useState([]);

    useEffect(() => {
        fetch('blog.json')
            .then(res => res.json())
            .then(data => setShowData(data))
    }, [])

    const showTime = (time) => {
        const newTime = [...times, time];
        setTimes(newTime);
    }

    const cardDetails = (details) => {
        let newDetails = [];
        const existInfoDetails = infoDetails.find(data => data.id === details.id);

        if (existInfoDetails) {
            alert('You already add This');
        } else {
            newDetails = [...infoDetails, details];
            setInfoDetails(newDetails);
        }
    }

    return (
        <main>
            <div className='container'>
                <div className='row'>
                    <div className='col-12 col-md-8'>
                        {
                            showData.map(data => <Card
                                key={data.id}
                                card={data}
                                showTime={showTime}
                                cardDetails={cardDetails}

                            >
                            </Card>)

                        }
                    </div>
                    <div className='col-12 col-md-4'>
                        <Sidebar times={times} infoDetails={infoDetails} >

                        </Sidebar>
                    </div>
                </div>

            </div>
        </main>
    );
};

export default Blog;