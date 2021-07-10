import React from 'react';
import Container from '../components/Container';

export default function SearchForm(props) {

    const { breeds, handleUserInput, handleSearchClick } = props;


    return (
        <Container>
            <form style={{ width: "60%", margin: "20px auto" }}>
                <div className="mb-2 form-group">
                    {/* <label htmlFor="searchInput" className="form-label">Breed name:</label> */}
                    <input type="text" className="form-control" id="searchInput" placeholder="Search Dogs by Breed" list="breeds" onChange={handleUserInput} />
                    <datalist id="breeds">
                        {
                            breeds.map(breed => (
                                <option value={breed} key={breed} />
                            ))
                        }
                    </datalist>
                </div>
                <button type="submit" className="btn btn-outline-primary" onClick={handleSearchClick}>Search</button>
            </form>
        </Container>
    )
}
