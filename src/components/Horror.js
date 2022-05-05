import { Card, Col, Container, Image, Row } from "react-bootstrap";
import hereditaryImage from "../assets/images/horror/hereditary.jpg";
import insidiousImage from "../assets/images/horror/insidious.jpg";
import kknImage from "../assets/images/horror/kkn.jpg";
import makmum2Image from "../assets/images/horror/makmum2.jpg";
import residentevilImage from "../assets/images/horror/resident-evil.jpg";
import screamImage from "../assets/images/horror/scream.jpg";

const Horror = () => {
  let imagess2 = [
    {
      img: hereditaryImage,
      name: "Hereditary",
      desc: "This is a wider card with natural lead-in to additional content.",
      date: "Last updated 3 mins ago",
    },
    {
      img: insidiousImage,
      name: "Insidious",
      desc: "This is a wider card with natural lead-in to additional content.",
      date: "Last updated 3 mins ago",
    },
    {
      img: kknImage,
      name: "KKN Desa Penari",
      desc: "This is a wider card with natural lead-in to additional content.",
      date: "Last updated 3 mins ago",
    },
    {
      img: makmum2Image,
      name: "Makmum 2",
      desc: "This is a wider card with natural lead-in to additional content.",
      date: "Last updated 3 mins ago",
    },
    {
      img: residentevilImage,
      name: "Resident Evil",
      desc: "This is a wider card with natural lead-in to additional content.",
      date: "Last updated 3 mins ago",
    },
    {
      img: screamImage,
      name: "Scream",
      desc: "This is a wider card with natural lead-in to additional content.",
      date: "Last updated 3 mins ago",
    },
  ];
  return (
    <div>
      <Container>
        <br />
        <h1 className="text-white text-center">HORROR MOVIES</h1>
        <br />
        <Row>
          {imagess2.map((item, index) => (
            <Col md={4} sm={4} className="movieWrapper" id="horror" key={index}>
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

export default Horror;
