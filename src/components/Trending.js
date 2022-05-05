import { Card, Col, Container, Image, Row } from "react-bootstrap";
import duneImage from "../assets/images/trending/dune.jpg";
import unchartedImage from "../assets/images/trending/uncharted.jpg";
import drstrangeImage from "../assets/images/trending/doctor-strange.jpg";
import jokerImage from "../assets/images/trending/joker.jpg";
import lightyearImage from "../assets/images/trending/lightyear.jpg";
import morbiusImage from "../assets/images/trending/morbius.jpg";

const Trending = () => {
  let imagess = [
    {
      img: duneImage,
      name: "Dune",
      desc: "This is a wider card with natural lead-in to additional content.",
      date: "Last updated 3 mins ago",
    },
    {
      img: unchartedImage,
      name: "Uncharted",
      desc: "This is a wider card with natural lead-in to additional content.",
      date: "Last updated 3 mins ago",
    },
    {
      img: drstrangeImage,
      name: "Doctor Strange",
      desc: "This is a wider card with natural lead-in to additional content.",
      date: "Last updated 3 mins ago",
    },
    {
      img: jokerImage,
      name: "Joker",
      desc: "This is a wider card with natural lead-in to additional content.",
      date: "Last updated 3 mins ago",
    },
    {
      img: lightyearImage,
      name: "Buzzlightyear",
      desc: "This is a wider card with natural lead-in to additional content.",
      date: "Last updated 3 mins ago",
    },
    {
      img: morbiusImage,
      name: "Morbius",
      desc: "This is a wider card with natural lead-in to additional content.",
      date: "Last updated 3 mins ago",
    },
  ];
  return (
    <div>
      <Container>
        <br />
        <h1 className="text-white text-center">TRENDING MOVIES</h1>
        <br />
        <Row>
          {imagess.map((item, index) => (
            <Col md={4} sm={4} className="movieWrapper" id="trending" key={index}>
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
        </Row>
      </Container>
    </div>
  );
};

export default Trending;
