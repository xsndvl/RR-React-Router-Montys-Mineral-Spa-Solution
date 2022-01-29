import Card from "react-bootstrap/Card"
import Container from "react-bootstrap/Container"

export default function About () {
    return (
        <div className="aboutpage">
            <div className="aboutHeader">
                <h1>About Us</h1>
            </div>
            <Container>
                <Card border="info">
                    <Card.Header className="blockquote mb-0 card-body">About Us</Card.Header>
                    <Card.Text>When returning from a spritual journey through the Earth, Monty McMansions decided to dedicate some of his fortune to offering spritiual wellness for others back in his hometown.</Card.Text>
                    <Card.Text>As the heir of the industrious McMansions fortune, Monty was never satisfied with the material wealth that provided him everything he desired.</Card.Text>
                    <Card.Text>Monty decided to travel around the world to find peace and happiness</Card.Text>
                    <Card.Text>Upon his return, he dedicated about 1% of his wealth to open this Mineral SPA to bring joy and spiritual happiness to others</Card.Text>
                </Card>
                <Card.Image style={{width: "50%", margin: "0 auto"}} variant="bottom" src="hotsprings.jpg" />
            </Container>
        </div>
    )
}