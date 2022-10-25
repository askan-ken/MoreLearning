import { Container, Row, Col, Image } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import ListGroup from 'react-bootstrap/ListGroup';
import anotherImg from "../asset/horor/another.jpg";
import hellsingImg from "../asset/horor/hellsing.jpg";
import jjkImg from "../asset/horor/jujutsu.jpg";
import kiseijuImg from "../asset/horor/kiseiju.jpg";
import mikoImg from '../asset/horor/mieruko.jpg';
import tgImg from '../asset/horor/ghoul.jpg';


const Horror = () => {
  return (
    <div>
      <Container>
        <br />
        <h1 className="text-black">HORROR ANIME</h1>
        <br />
        <Row>
          <Col md={4} className="anoWrap" id="horror">
            <Card className="bg-white text-black text-center">
              <Image src={anotherImg} />
              <Card.Title>Another</Card.Title>
              <Card.Text>
              In class 3-3 of Yomiyama North Junior High, transfer student Kouichi Sakakibara makes his return after taking a sick leave for the first month of school. Among his new classmates, he is inexplicably drawn toward Mei...
              </Card.Text>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>Horror, Mystery, Supernatural, Suspense</ListGroup.Item>
                <ListGroup.Item>12 eps, 24 min</ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
          <Col md={4} className="anoWrap">
            <Card className="bg-white text-black text-center">
              <Image src={hellsingImg} />
              <Card.Title>Hellsing Ultimate</Card.Title>
              <Card.Text>
              There exist creatures of darkness and evil that plague the night, devouring any human unfortunate enough to be caught in their grasp. On the other side is Hellsing, an organization dedicated to destroying these...
              </Card.Text>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>Horror, Action, Supernatural,</ListGroup.Item>
                <ListGroup.Item>10 eps, 49 min</ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
          <Col md={4} className="anoWrap">
            <Card className="bg-white text-black text-center">
              <Image src={jjkImg} />
              <Card.Title>Jujutsu Kaisen</Card.Title>
              <Card.Text>
              Idly indulging in baseless paranormal activities with the Occult Club, high schooler Yuuji Itadori spends his days at either the clubroom or the hospital, where he visits his bedridden grandfather. However, this leisurely...
              </Card.Text>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>Horror, Action, Supernatural,</ListGroup.Item>
                <ListGroup.Item>24 eps, 24 min</ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
          <Col md={4} className="anoWrap">
            <Card className="bg-white text-black text-center">
              <Image src={kiseijuImg} />
              <Card.Title>Parasyte: The Maxim</Card.Title>
              <Card.Text>
              All of a sudden, they arrived: parasitic aliens that descended upon Earth and quickly infiltrated humanity by burrowing into the brains of vulnerable targets. These insatiable beings acquire full control of their host and are able to morph into a variety...
...
              </Card.Text>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>Action, Horror, Sci-Fi</ListGroup.Item>
                <ListGroup.Item>24 eps, 24 min</ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
          <Col md={4} className="anoWrap">
            <Card className="bg-white text-black text-center">
              <Image src={mikoImg} />
              <Card.Title>Mieruko - chan</Card.Title>
              <Card.Text>
              Miko Yotsuya's eyes water as she fixates on a single spot on her phone—she ignores yet another dreadful, horrific monster that is in her face, uttering the disturbing words: "Can you see me?" Before now, Miko enjoyed her unassuming high school days, with late-night....
              </Card.Text>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>Comedy, Horror, Supernatural</ListGroup.Item>
                <ListGroup.Item>12 eps, 24 min</ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
          <Col md={4} className="anoWrap">
            <Card className="bg-white text-black text-center">
              <Image src={tgImg} />
              <Card.Title>Tokyo Houl</Card.Title>
              <Card.Text>
              A sinister threat is invading Tokyo: flesh-eating "ghouls" who appear identical to humans and blend into their population. Reserved college student Ken Kaneki buries his nose in books and avoids the news of the growing crisis...
              </Card.Text>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>Horror, Mystery, Supernatural, Suspense</ListGroup.Item>
                <ListGroup.Item>12 eps, 24 min</ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Horror;
