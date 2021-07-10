import React from 'react';
import Container from '../components/Container';

export default function ImageComponent(props) {
    const {displayCard, imageSource, handleBtnClick} = props;

    if (displayCard === true) {
        return (
            <Container style={{display: "flex", justifyContent: "center"}}>
                <div className="card">
                    <img src={imageSource} class="card-img-top" alt="No image" style={{height: "400px", width:"500px"}}/>
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
                <div className="card">
                    <img src={imageSource} class="card-img-top" alt="No image" />
                </div>
            </Container>
        )
    }
}
