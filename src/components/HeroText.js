import './HeroText.css';

// process.env.PUBLIC_URL + "/images/dog-image.jpeg"
export default function HeroText() {
    return (
        <div>
            <div className="hero-image">
                <div className="hero-text">
                    <h1 style={{"margin-top": "3%"}}>Puppies-Tinder</h1>
                    <h2>They're the Good Boys and Girls</h2>
                </div>
            </div>
        </div>
    )
}
