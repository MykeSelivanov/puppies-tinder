import React from 'react';
import Container from '../components/Container';
import {useLocation } from 'react-router-dom'
export default function ImageComponent(props) {
    const location = useLocation();
    // console.log(location.pathname);

    const { displayCard, imageSrc, handleBtnClick } = props;

    if (displayCard === true) {
        return (
            <Container style={{ display: "flex", justifyContent: "center" }}>
                <div className="card">
                    <img src={imageSrc} className="card-img-top" alt="Not found" style={{ height: "400px", width: "500px" }} />
                    <div className="card-body">
                        <button type="button" className="btn btn-outline-danger btn-lg ms-5 me-5" onClick={() => handleBtnClick("down")}>Move on</button>
                        <button type="button" className="btn btn-outline-success btn-lg ms-5 me-5" onClick={() => handleBtnClick("up")}>Thumbs up!</button>
                    </div>
                </div>
            </Container>
        )
    } else {
        return (
            <Container>
                {/* <div className="card">
                    {images.map((image) => {
                        return <img src={image} className="card-img-top" alt="Not found" />
                    })} 
                </div> */}
                <img src={imageSrc} className="card-img-top m-1" alt="Not found" style={{ height: "400px", width: "500px" }} />
            </Container>
        )
    }
}
