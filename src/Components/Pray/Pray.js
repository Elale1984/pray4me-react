import React from 'react';
import PrayerRequestList from "./PrayerRequestList";

const Pray = (props) => {
    return (
        <div className='container'>
            <PrayerRequestList prayerRequestList={props.prayerRequestList} commentsList={props.commentsList} onClick={props.updateSinglePrayerRequest} />
        </div>
    );
};

export default Pray;