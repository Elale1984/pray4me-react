import React from 'react';

const PrayerCard = (props) => {

    const handleButtonClick = (event, uri) => {
        console.log('ID clicked is ' + props.prayerRequestId);
        props.onClick(props.prayerRequestId, uri);
    };

    return (
        <div>
            <div className="card text-white bg-secondary mb-3" style={{ width: '20rem' }}>
                <div className="card-header">{props.category}</div>
                <div className="card-body">
                    <p className="card-text">{props.text}</p>
                    <span>Submitted on {props.createdAt} by {props.userName}"</span>
                </div>
                <button onClick={() => handleButtonClick(props.prayerRequestId, '/prayer-request/show/')} className='btn btn-primary'>Details</button>
                <button onClick={() => handleButtonClick(props.prayerRequestId, '/prayer-request/edit/')} className="btn btn-secondary">Edit</button>
            </div>
        </div>
    );
};

export default PrayerCard;