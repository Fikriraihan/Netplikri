import { Card, Col, Container, Image, Row } from "react-bootstrap";
import antmanImage from "../assets/images/superhero/antman.jpg";
import avengerImage from "../assets/images/superhero/avenger.jpg";
import batmanImage from "../assets/images/superhero/batman.jpg";
import robinhoodImage from "../assets/images/superhero/robinhood.jpg";
import spiderman2Image from "../assets/images/superhero/spiderman2.jpg";
import supermanImage from "../assets/images/superhero/superman.jpg";

const SuperHero = () => {
  let imagess2 = [
    {
      img: antmanImage,
      name: "Antman",
      desc: "This is a wider card with natural lead-in to additional content.",
      date: "Last updated 3 mins ago",
    },
    {
      img: avengerImage,
      name: "Avenger",
      desc: "This is a wider card with natural lead-in to additional content.",
      date: "Last updated 3 mins ago",
    },
    {
      img: batmanImage,
      name: "Batman",
      desc: "This is a wider card with natural lead-in to additional content.",
      date: "Last updated 3 mins ago",
    },
    {
      img: robinhoodImage,
      name: "Robin Hood",
      desc: "This is a wider card with natural lead-in to additional content.",
      date: "Last updated 3 mins ago",
    },
    {
      img: spiderman2Image,
      name: "Spiderman No Way Home",
      desc: "This is a wider card with natural lead-in to additional content.",
      date: "Last updated 3 mins ago",
    },
    {
      img: supermanImage,
      name: "Superman",
      desc: "This is a wider card with natural lead-in to additional content.",
      date: "Last updated 3 mins ago",
    },
  ];
  return (
    <div>
      <Container>
        <br />
        <h1 className="text-white text-center">SUPERHERO MOVIES</h1>
        <br />
        <Row>
          {imagess2.map((item, index) => (
            <Col md={4} sm={4} className="movieWrapper" id="superhero" key={index}>
              <Card className="movieImage">
                <Image src={item.img} alt="Dune Movies" className="images" />
                <div className="bg-dark">
                  <div className="m-1 p-2 text-white ">
                    <Card.Title className="text-center">{item.name}</Card.Title>
                    <Card.Text className="text-left">{item.desc}</Card.Text>
                    <Card.Text className="text-left">{item.date}</Card.Text>
                  </div>
                </div>
              </Card>
            </Col>
          ))}
          ;
        </Row>
      </Container>
    </div>
  );
};

export default SuperHero;
