import React, {useEffect, useState} from "react";
import "./App.css"
import NavBar from "../NavBar/NavBar";
import Home from "../Home/Home";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Pray from "../Pray/Pray";
import DataSource from "../../DataSource";
import EditPrayer from "../EditPrayer/EditPrayer";
import OnePrayerRequest from "../OnePrayerRequest/OnePrayerRequest";


const App = (props) => {
    
    const [prayerRequestList, setPrayerRequestList] = useState([]);
    const [prayerRequestCommentsList, setPrayerRequestCommentsList] = useState([]);
    const [currentlySelectedPrayerRequestId, setCurrentlySelectedPrayerRequestId] = useState(-1);

    let refresh = false;
    console.log('Prayer Requests', prayerRequestList);

    const loadPrayRequests = async () => {
        
        const prayerRequestResponse = await DataSource.get('/prayer-requests');
        setPrayerRequestList(prayerRequestResponse.data);

        const prayerRequestCommentsResponse = await DataSource.get('/comments');
        setPrayerRequestCommentsList(prayerRequestCommentsResponse.data);

    }


    useEffect(() => {
        loadPrayRequests();
    }, [refresh]);

    const onEditPrayer = (navigate) => {
        loadPrayRequests()
        navigate("/");
    }

    const updateSinglePrayerRequest = (id, navigate, uri) => {
        console.log('Update Single Prayer Request Id = ', id);
        console.log('Update Single Prayer Request Navigate = ', navigate);
        let indexNumber = 0;
        for (let i = 0; i < prayerRequestList.length; ++i) {
            if (prayerRequestList[i].id === id) indexNumber = i;
        }
        setCurrentlySelectedPrayerRequestId(indexNumber);
        let path = uri + indexNumber;
        console.log('path', path);
        navigate(path);
    }

    return (
        <div>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route
                        exact
                        path='/'
                        element={
                            <Home />
                        }
                    />
                    <Route
                        exact
                        path='/pray'
                        element={
                            <Pray
                                prayerRequestList={prayerRequestList}
                                commentsList={prayerRequestCommentsList}
                                updateSinglePrayerRequest={updateSinglePrayerRequest}
                            />
                        }
                    />

                    <Route
                        exact
                        path={'/request-prayer'}
                        element={
                            <EditPrayer onEditPrayer={onEditPrayer} />
                        }
                    />
                    <Route
                        exact
                        path={'/prayer-request/edit/:prayerRequestId'}
                        element={
                            <EditPrayer onEditPrayer={onEditPrayer} prayerRequest={prayerRequestList[currentlySelectedPrayerRequestId]} />
                        }
                    />
                    <Route
                        exact
                        path='/prayer-request/show/:prayerRequestId'
                        element={
                            <OnePrayerRequest prayerRequest={prayerRequestList[currentlySelectedPrayerRequestId]} />
                        }
                    />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;