import React, {useState} from 'react';

const OnePrayerRequest = (props) => {
    console.log('props', props);

    const [daysAgoPrayer, setDaysAgoPrayer] = useState(-1);
    const [daysAgoComment, setDaysAgoComment] = useState(-1);

    const currentDate = new Date();
    const timeDiff = currentDate.getTime() - props.prayerRequest.createdAt.getTime();

    setDaysAgoPrayer(Math.floor(timeDiff / (1000 * 3600 * 24)));

    return (
        <div className='container'>
            <h1 align='center' className='mt-5'>Prayer Request For {props.prayerRequest.userName}</h1>
            <div className="row mt-5">
                <div className="col col-3">
                    <div className="card text-white bg-secondary mb-3" style={{ width: '20rem' }}>
                        <div className="card-header">{props.prayerRequest.category}</div>
                        <div className="card-body">
                            <p className="card-text">{props.prayerRequest.text}</p>
                            <span>Submitted on {props.prayerRequest.createdAt} by {props.prayerRequest.userName}"</span>
                        </div>
                    </div>
                </div>
                <div className="col col-sm-9">
                    <div className="card text-white bg-success mb-3" style={{ width: '40rem', borderRadius: '10px' }}>
                        <div className="card-body">
                            <p className="card-text">Some quick example text to build on the card title and make up the
                                bulk of the card's content.</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OnePrayerRequest;