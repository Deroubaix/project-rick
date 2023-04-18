import axios from 'axios'
import { useEffect  , useState } from 'react'
import { Card, Row, Col, Container } from 'react-bootstrap';

const apiRick = "https://rickandmortyapi.com/api/character/1"
const apiMorty = "https://rickandmortyapi.com/api/character/2"

function About() {
    const [rick, setRick] = useState ([])
    const [morty, setMorty] = useState ([])

    const getChar = async() => {
        try {
            let response = await axios.get(apiRick)
            let response2 = await axios.get(apiMorty)
            setRick(response.data)
            setMorty(response2.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=> {
        getChar()
    }, [])

    return (
        <Container className="d-flex justify-content-center align-items-center">
          {rick && (
            <Row id='r-m'>
              <Col md={6} className="mb-4">
                <Card style={{ width: '25rem' }}>
                  <Card.Img variant="top" src={rick.image} alt="Rick" style={{ height: 'auto', objectFit: 'cover' }} />
                  <Card.Body>
                    <Card.Title>{rick.name}</Card.Title>
                    <Card.Text>
                      <b>Gender:</b> {rick.gender} <br />
                      <b>Species:</b> {rick.species} <br />
                      <b>About:</b> He is a megagenius scientist whose alcoholism and reckless, nihilistic behavior are sources of concern for his "daughter's" family, as well as the safety of their son, Morty. He fought for some time in the resistance movement against the Galactic Federation, alongside Birdperson and Squanchy.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              {morty && (
                <Col md={6} className="mb-4">
                  <Card style={{ width: '25rem' }}>
                    <Card.Img variant="top" src={morty.image} alt="Morty" style={{ height: 'auto', objectFit: 'cover' }} />
                    <Card.Body>
                      <Card.Title>{morty.name}</Card.Title>
                      <Card.Text>
                        <b>Gender:</b> {morty.gender} <br />
                        <b>Species:</b> {morty.species} <br />
                        <b>About:</b> Morty is 14 years old. He first met his grandfather, Rick Sanchez, when the latter moved into his home after supposedly being absent for 20 years. However, it was revealed that Rick is originally from Dimension C-137 and, after losing his wife and daughter, eventually moved into Morty's dimension to live with an adult version of Beth, his daughter.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              )}
            </Row>
          )}
        </Container>
      );  
      }

export default About