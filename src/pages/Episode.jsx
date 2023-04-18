import React from 'react'
import axios from 'axios'
import { useEffect  , useState } from 'react'
import { Card, Row, Col, Container } from 'react-bootstrap';

const apiEpisode3 = "https://rickandmortyapi.com/api/episode/3"
const apiEpisode5 = "https://rickandmortyapi.com/api/episode/5"
const apiEpisode11 = "https://rickandmortyapi.com/api/episode/11"
const apiEpisode13 = "https://rickandmortyapi.com/api/episode/13"
const apiEpisode16 = "https://rickandmortyapi.com/api/episode/16"
const apiEpisode23 = "https://rickandmortyapi.com/api/episode/24"
const apiEpisode36 = "https://rickandmortyapi.com/api/episode/36"
const apiEpisode35 = "https://rickandmortyapi.com/api/episode/35"
const apiEpisode45 = "https://rickandmortyapi.com/api/episode/46"
const apiEpisode52 = "https://rickandmortyapi.com/api/episode/49"


function Episode() {
  const [episode3, setEpisode3] = useState ([])
    const [episode5, setEpisode5] = useState ([])
    const [episode13, setEpisode13] = useState ([])
    const [episode11, setEpisode11] = useState ([])
    const [episode16, setEpisode16] = useState ([])
    const [episode23, setEpisode23] = useState ([])
    const [episode36, setEpisode36] = useState ([])
    const [episode35, setEpisode35] = useState ([])
    const [episode45, setEpisode45] = useState ([])
    const [episode52, setEpisode52] = useState ([])

  const getEpisode = async() => {
    try {
        let response = await axios.get(apiEpisode3)
        let response2 = await axios.get(apiEpisode5)
        let response3 = await axios.get(apiEpisode13)
        let response4 = await axios.get(apiEpisode16)
        let response5 = await axios.get(apiEpisode23)
        let response6 = await axios.get(apiEpisode36)
        let response7 = await axios.get(apiEpisode35)
        let response8 = await axios.get(apiEpisode45)
        let response9 = await axios.get(apiEpisode11)
        let response10 = await axios.get(apiEpisode52)
        setEpisode3(response.data)
        setEpisode5(response2.data)
        setEpisode13(response3.data)
        setEpisode16(response4.data)
        setEpisode23(response5.data)
        setEpisode36(response6.data)
        setEpisode35(response7.data)
        setEpisode45(response8.data)
        setEpisode11(response9.data)
        setEpisode52(response10.data)
    } catch (error) {
        console.log(error)
    }
}

useEffect(()=> {
    getEpisode()
}, [])

return (
  <Container className="d-flex justify-content-center align-items-center">
    {episode3 && (
      <Row id='r-m'>
        <Col md={6} className="mb-4">
          <Card style={{ width: '25rem' }}>
            <Card.Img variant="top" src="https://m.media-amazon.com/images/M/MV5BM2I0Nzg0YTktYTc2Zi00NTk4LWI5ZDQtMmVhYjBjZmRmNGM0XkEyXkFqcGdeQXVyNjg4ODczODM@._V1_.jpg" alt="Rick" style={{ height: 'auto', objectFit: 'cover' }} />
            <Card.Body>
              <Card.Title>{episode3.name}</Card.Title>
              <Card.Text>
                <b>Air Date:</b> {episode3.air_date} <br />
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        {episode5 && (
          <Col md={6} className="mb-4">
            <Card style={{ width: '25rem' }}>
              <Card.Img variant="top" src="https://m.media-amazon.com/images/M/MV5BYWI0Zjc5YjgtZmJkMC00OGE5LTk0MDgtOWY0MDM4YWYwYTIwXkEyXkFqcGdeQXVyNjc0NTIwNTU@._V1_.jpg" alt="Morty" style={{ height: 'auto', objectFit: 'cover' }} />
              <Card.Body>
                <Card.Title>{episode5.name}</Card.Title>
                <Card.Text>
                  <b>Air Date:</b> {episode5.air_date} <br />
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>   
        )}
        {episode13 && (
          <Col md={6} className="mb-4">
            <Card style={{ width: '25rem' }}>
              <Card.Img variant="top" src="https://m.media-amazon.com/images/M/MV5BMmM3MTg5ZjQtNDUxMi00OWQ3LTkxMmUtYTRkNTI5MGY5MDdiXkEyXkFqcGdeQXVyNjc0NTIwNTU@._V1_.jpg" alt="Morty" style={{ height: 'auto', objectFit: 'cover' }} />
              <Card.Body>
                <Card.Title>{episode13.name}</Card.Title>
                <Card.Text>
                  <b>Air Date:</b> {episode13.air_date} <br />
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>         
        )}
        {episode16 && (
          <Col md={6} className="mb-4">
            <Card style={{ width: '25rem' }}>
              <Card.Img variant="top" src="https://m.media-amazon.com/images/M/MV5BZTAzNGQ1YjktMzk1ZS00Y2ZhLTg0M2MtYzcwNDk1ZTQ1M2ZiXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg" alt="Morty" style={{ height: 'auto', objectFit: 'cover' }} />
              <Card.Body>
                <Card.Title>{episode16.name}</Card.Title>
                <Card.Text>
                  <b>Air Date:</b> {episode16.air_date} <br />
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>         
        )}
        {episode23 && (
          <Col md={6} className="mb-4">
            <Card style={{ width: '25rem' }}>
              <Card.Img variant="top" src="https://m.media-amazon.com/images/M/MV5BN2EzM2JlMDMtMmUzNC00ZTY4LThhNzItZjIyNzBiYzYzOGZkXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg" alt="Morty" style={{ height: 'auto', objectFit: 'cover' }} />
              <Card.Body>
                <Card.Title>{episode23.name}</Card.Title>
                <Card.Text>
                  <b>Air Date: </b> {episode23.air_date} <br />
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>         
        )}
        {episode36 && (
          <Col md={6} className="mb-4">
            <Card style={{ width: '25rem' }}>
              <Card.Img variant="top" src="https://cdn.images.express.co.uk/img/dynamic/20/590x/secondary/rick-and-morty-snake-planet-2227683.jpg?r=1577115200855" alt="Morty" style={{ height: 'auto', objectFit: 'cover' }} />
              <Card.Body>
                <Card.Title>{episode36.name}</Card.Title>
                <Card.Text>
                  <b>Air Date: </b> {episode36.air_date} <br />
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>         
        )}
        {episode35 && (
          <Col md={6} className="mb-4">
            <Card style={{ width: '25rem' }}>
              <Card.Img variant="top" src="https://m.media-amazon.com/images/M/MV5BODdhNDhlZTctNmVjNC00NDRiLTkxZTItNTM0OTAxOWRkZTY4XkEyXkFqcGdeQXVyODkxNzAwMDI@._V1_.jpg" alt="Morty" style={{ height: 'auto', objectFit: 'cover' }} />
              <Card.Body>
                <Card.Title>{episode35.name}</Card.Title>
                <Card.Text>
                  <b>Air Date: </b> {episode35.air_date} <br />
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>         
        )}
        {episode45 && (
          <Col md={6} className="mb-4">
            <Card style={{ width: '25rem' }}>
              <Card.Img variant="top" src="https://m.media-amazon.com/images/M/MV5BNzQyODIyZGUtMzhhMi00NzBkLTkxNWEtOTdiNDc5NGQ3NzE1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg" alt="Morty" style={{ height: 'auto', objectFit: 'cover' }} />
              <Card.Body>
                <Card.Title>{episode45.name}</Card.Title>
                <Card.Text>
                  <b>Air Date: </b> {episode45.air_date} <br />
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>         
        )}
        {episode11 && (
          <Col md={6} className="mb-4">
            <Card style={{ width: '25rem' }}>
              <Card.Img variant="top" src="https://m.media-amazon.com/images/M/MV5BY2VmNzJhODMtMWZmOS00YTkwLWJhNDAtM2FjZTViN2Q5MjY1XkEyXkFqcGdeQXVyODk1NDIxMTU@._V1_.jpg" alt="Morty" style={{ height: 'auto', objectFit: 'cover' }} />
              <Card.Body>
                <Card.Title>{episode11.name}</Card.Title>
                <Card.Text>
                  <b>Air Date: </b> {episode11.air_date} <br />
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>         
        )}
        {episode52 && (
          <Col md={6} className="mb-4">
            <Card style={{ width: '25rem' }}>
              <Card.Img variant="top" src="https://m.media-amazon.com/images/M/MV5BYWE1MTg1YmQtYzc5Zi00MjRkLWFiZTEtMWM4YTQyOTc5ZGE2XkEyXkFqcGdeQXVyMTU2OTY3Njk4._V1_.jpg" alt="Morty" style={{ height: 'auto', objectFit: 'cover' }} />
              <Card.Body>
                <Card.Title>Night Family</Card.Title>
                <Card.Text>
                  <b>Air Date: </b>September 25, 2022 <br />
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>         
        )}
      </Row>
    )}
  </Container>
)
        }

export default Episode