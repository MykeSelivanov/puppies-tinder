import React, { useState, useEffect } from 'react';
import Container from '../components/Container';
import ImageComponent from '../components/ImageComponent';
import axios from 'axios';

export default function DiscoverPage() {

    const displayCard = true;
    const [image, setImage] = useState('');
    let [match, setMatch] = useState(false);
    let [matchCount, setMatchCount] = useState(0);

    const getRndDog = () => {
        axios
            .get('https://dog.ceo/api/breeds/image/random')
            .then((res) => {
                setImage(res.data.message)
            })
            .catch(err => 'error');
    }

    useEffect(() => {
        getRndDog();
    }, [])

    const handleBtnClick = (btnType) => {
        setMatch(false);
        if (btnType === 'up') {
            if (1 === Math.floor(Math.random() * 5) + 1) {
                setMatch(true);
                setMatchCount(++matchCount);
            }
        }
        getRndDog();
    }

    return (
        <Container style={{ textAlign: "center" }}>
            <h2>Make Some Friends</h2>
            <h3>Thumbs up for the puppies you like!</h3>
            <ImageComponent displayCard={displayCard} imageSrc={image} handleBtnClick={handleBtnClick} />
            <h1>{matchCount} puppies liked you back so far!</h1>
            <div style={{ opacity: match ? 1 : 0 }} className="alert alert-success" role="alert">Yay! Someone liked you back!</div>
        </Container>
    )
}
