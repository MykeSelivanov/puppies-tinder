import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <div className="Header">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="/"><Link to="/">Puppies-Tinder</Link></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link" href="/about"><Link to="/about">About</Link></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/discover"><Link to="/discover">Discover</Link></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/search"><Link to="/search">Search</Link></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
