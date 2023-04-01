import React from 'react';
import './Card.css';
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Card = (props) => {
    const { id, author_image, author_name, blog_cover_image, blog_title, publish_data, read_time } = props.card;
    const showTime = props.showTime;
    const cardDetails = props.cardDetails;

    return (

        <div className="card">
            <div className="card-header">
                <img src={blog_cover_image} alt="" />
            </div>
            <div className="card-body">
                <div className="d-flex">
                    <div className="w-75">
                        <ul className='d-flex align-items-center'>
                            <li>
                                <img style={{ width: '80px', hight: '80px', borderRadius: '50%' }} src={author_image} alt="" />
                            </li>
                            <li className='px-3'>
                                <span className=''><b>{author_name}</b></span>
                                <br />
                                <span className=''>{publish_data}(4 Days ago)</span>
                            </li>
                        </ul>
                    </div>
                    <div className="w-25">
                        <span className='px-2'>{read_time} min read  </span>
                        <FontAwesomeIcon onClick={() => cardDetails(props.card)} icon={faBookmark} />
                    </div>
                </div>
                <div className="author-info">
                    <h3>{blog_title}</h3>
                    <p>#beginners #programming</p>

                    <a href="#" onClick={() => showTime(props.card)}>Mark as read</a>
                </div>
            </div>
        </div>
    );
};

export default Card;