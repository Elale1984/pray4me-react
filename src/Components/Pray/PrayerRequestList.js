import React from 'react';
import PrayerCard from "../PrayerCard/PrayerCard";
import { useNavigate } from "react-router-dom";

const PrayerRequestList = (props) => {
    console.log('Prayer List', props.prayerRequestList);

    const handleSelectPrayerRequest = (prayerRequestsId, uri) => {
        console.log('Selected ID is ' + prayerRequestsId);
        props.onClick(prayerRequestsId, navigator, uri);
    }

    const navigator = useNavigate();

    const prayerRequests = props.prayerRequestList.map((prayerRequest) => {

        return (
            <PrayerCard
                key={prayerRequest.prayerRequestId}
                prayerRequestId={prayerRequest.prayerRequestId}
                userName={prayerRequest.userName}
                category={prayerRequest.category}
                text={prayerRequest.text}
                createdAt={prayerRequest.createdAt}
                onClick={handleSelectPrayerRequest}
            />
        )
    })
    return (
        <div className='container'>
            {prayerRequests}
        </div>
    );
};

export default PrayerRequestList;