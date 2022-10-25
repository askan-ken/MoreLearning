import { Container, Row, Col, Image } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import ListGroup from 'react-bootstrap/ListGroup';
import clannadImg from "../asset/romance/clannad.jpg";
import kimiImg from "../asset/romance/kimi.jpg";
import shigatsuImg from "../asset/romance/shigatsu.jpg";
import tamaImg from "../asset/romance/tamako.jpg";
import tonaImg from '../asset/romance/tonaro.jpg';
import oreImg from '../asset/romance/oregairu.jpg';


const Romance = () => {
  return (
    <div>
      <Container>
        <br />
        <h1 className="text-black">ROMANCE ANIME</h1>
        <br />
        <Row>
          <Col md={4} className="anoWrap" id="romance">
            <Card className="bg-white text-black text-center">
              <Image src={clannadImg} />
              <Card.Title>clannad</Card.Title>
              <Card.Text>
              Tomoya Okazaki is a delinquent who finds life dull and believes he'll never amount to anything. Along with his friend Youhei Sunohara, he skips school and plans to waste his high school days away...
              </Card.Text>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>Drama, Romance, Supernatural</ListGroup.Item>
                <ListGroup.Item>12 eps, 24 min</ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
          <Col md={4} className="anoWrap">
            <Card className="bg-white text-black text-center">
              <Image src={kimiImg} />
              <Card.Title>Kimi no Na wa</Card.Title>
              <Card.Text>
              Mitsuha Miyamizu is a high school girl living in the countryside town of Itomori. She yearns for a life in Tokyo as she is sick of living in the countryside. At the same time, Taki Tachibana...
              </Card.Text>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>Drama, Supernatural,</ListGroup.Item>
                <ListGroup.Item>10 eps, 49 min</ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
          <Col md={4} className="anoWrap">
            <Card className="bg-white text-black text-center">
              <Image src={shigatsuImg} />
              <Card.Title>Shigatsu wa Kimi no Uso</Card.Title>
              <Card.Text>
              Kousei Arima is a child prodigy known as the "Human Metronome" for playing the piano with precision and perfection. Guided by a strict mother and rigorous training, Kousei dominates ...
              </Card.Text>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>Drama, Romance</ListGroup.Item>
                <ListGroup.Item>24 eps, 24 min</ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
          <Col md={4} className="anoWrap">
            <Card className="bg-white text-black text-center">
              <Image src={oreImg} />
              <Card.Title>Yahari Ore no Seishun Love Comedy wa Machigatteiru.</Card.Title>
              <Card.Text>
              Hachiman Hikigaya is an apathetic high school student with narcissistic and semi-nihilistic tendencies. He firmly believes that joyful youth is nothing but a farce, and...
...
              </Card.Text>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>Comedy, Romance</ListGroup.Item>
                <ListGroup.Item>12 eps, 24 min</ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
          <Col md={4} className="anoWrap">
            <Card className="bg-white text-black text-center">
              <Image src={tamaImg} />
              <Card.Title>Tamako Love Story</Card.Title>
              <Card.Text>
              As the seasons pass by, the end of Mochizou Ooji's third and final school year quickly approaches. He aims to study at a university in Tokyo, but at the cost of leaving behind his loved ones—including his beloved childhood...
              </Card.Text>
              <ListGroup className="list-group-flush">
                <ListGroup.Item> Award Winning, Romance, Slice of Life</ListGroup.Item>
                <ListGroup.Item>1 eps, 1 hour 23 min</ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
          <Col md={4} className="anoWrap">
            <Card className="bg-white text-black text-center">
              <Image src={tonaImg} />
              <Card.Title>Tonari no Kaibutsu kun</Card.Title>
              <Card.Text>
              Shizuku Mizutani is apathetic toward her classmates, only caring about her grades. However, her cold view of life begins to change when she meets Haru Yoshida, a violent troublemaker who stopped attending class after...
              </Card.Text>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>Comedy, Romance</ListGroup.Item>
                <ListGroup.Item>12 eps, 24 min</ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Romance;
