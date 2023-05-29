
import DataSource from "../../DataSource";
import {useNavigate} from "react-router-dom";
import React, { useState } from "react";
import './EditPrayer.css';


const EditPrayer = (props) => {

    let prayer = {
        prayerRequestId: null,
        userId: null,
        userName: "",
        category: "",
        text: "",
        createdAt: new Date(),
        isAnswered: false,
    };

    let isNewPrayerRequest = true;

    if (props.prayerRequest) {
        prayer = props.prayerRequest;
        isNewPrayerRequest = false;
    }

    const [userId, setUserId] = useState(prayer.userId);
    const [userName, setUserName] = useState(prayer.userName);
    const [category, setCategory] = useState(prayer.category);
    const [text, setText] = useState(prayer.text);
    const [createdAt, setCreatedAt] = useState(prayer.createdAt);
    const [isAnswered, setIsAnswered] = useState(prayer.isAnswered);
    const navigate = useNavigate();
    const updateUserId = (event) => {
        setUserId(event.target.value);
    };

    const updateUserName = (event) => {
        setUserName(event.target.value);
    };

    const updateCategory = (event) => {
        setCategory(event.target.value);
    };

    const updateText = (event) => {
        setText(event.target.value);
    };


    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log('Submit');

        const editedPrayer = {
            userId: userId,
            userName: userName,
            category: category,
            text: text,
            createdAt: createdAt,
            isAnswered: false,
        };
        console.log(editedPrayer);
        savePrayer(editedPrayer);
    };

    const savePrayer = async (prayer) => {
        let response;
        if (isNewPrayerRequest)
            response = await DataSource.post('/albums', prayer);
        else
            response = await DataSource.put('/albums', prayer);
        console.log(response);
        console.log(response.data);
        props.onEditPrayer(navigate);
    };

    const handleCancel = () => {
        navigate("/");
    };

    return (
        <div className='container'>
            <form onSubmit={handleFormSubmit}>
                <h1 align="center" className='mt-5'>{isNewPrayerRequest ? "How Can We Pray For You" : "Edit PrayerRequest"}</h1>
                <div className="form-group">

                    <label htmlFor="userId" className="form-label mt-4">User Id</label>
                    <input type="text" className="form-control" id="userId"
                           placeholder="Enter User Id" value={userId} onChange={updateUserId} />
                    <label htmlFor='userName' className="form-label mt-4">Username</label>
                    <input type="text" className="form-control" id='userName' placeholder='Enter Username'
                           value={userName} onChange={updateUserName}/>
                    <label htmlFor="category" className="form-label mt-4">Select Category</label>
                    <select className="form-select" id="category" value={category} onChange={updateCategory}>
                        <option>Depression</option>
                        <option>Health</option>
                        <option>Relationship</option>
                        <option>Family</option>
                        <option>Career</option>
                        <option>Finances</option>
                        <option>Emotional Healing</option>
                        <option>Spiritual Growth</option>
                        <option>Education</option>
                        <option>Travel</option>
                        <option>Purpose</option>
                        <option>Other</option>
                    </select>
                    <label htmlFor='text' className="form-label mt-4">Description</label>
                    <textarea type="text" className="form-control" id='text' rows='10' placeholder='Enter Prayer Request' value={text} onChange={updateText} />

                </div>
                <div align="center">
                    <button type='button' className="btn btn-danger mt-4" onClick={handleCancel}>Cancel</button>
                    <button type='submit' className="btn btn-success mt-4">Post</button>
                </div>
            </form>
        </div>
    );
};

export default EditPrayer;