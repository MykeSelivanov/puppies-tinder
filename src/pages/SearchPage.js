import React, { useEffect, useState } from 'react';
import Container from '../components/Container';
import SearchForm from '../components/SearchForm';
import ImageComponent from '../components/ImageComponent';
import axios from 'axios';
import API from '../api';


export default function SearchPage() {
    const [breeds, setBreeds] = useState([]);
    const [userInput, setUserInput] = useState('');
    const [images, setImages] = useState([]);
    const [error, setError] = useState(false);


    const handleUserInput = (event) => {
        setError(false);
        setUserInput(event.target.value);
    }

    const handleSearchClick = (event) => {
        event.preventDefault();
        axios
            .get(`https://dog.ceo/api/breed/${userInput}/images`)
            .then(res => {
                setImages(res.data.message);
            })
            .catch(err => {
                console.log(err);
                setError(true);
            });
    }

    const getBreeds = () => {
        API.getBreedsList()
            .then((res) => {
                setBreeds(res.data.message)
            })
            .catch(err => {
                console.log(err);
                setError(true);
            });
    }

    useEffect(() => {
        getBreeds();
    }, [])

    // lifting the state up => parent
    return (
        <Container style={{ textAlign: "center" }}>
            <h1>Search By Breed!</h1>
            <div style={{ opacity: error ? 1 : 0 }} className="alert alert-danger" role="alert">Invalid input. Please select a breed from the List!</div>
            <SearchForm breeds={breeds} handleUserInput={handleUserInput} handleSearchClick={handleSearchClick} />
            {images.map((image) => {
                return <ImageComponent displayCard={false} imageSrc={image} key={image}/>
            })}
            {/* <ImageComponent displayCard={false} images={images}/> */}
        </Container>
    )
}
