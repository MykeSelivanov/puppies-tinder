import HeroText from '../components/HeroText';
import AboutText from '../components/AboutText';
import Container from '../components/Container'

export default function AboutPage() {
    return (
        <Container fluid>
        <div className="AboutPage">
            <HeroText />
            <AboutText />
        </div>
        </Container>
    )
}
