import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { FaCheckCircle, FaTimesCircle, FaQuestionCircle } from 'react-icons/fa';
import LoadingComponent from '../components/Loading';

const EpisodeCharacters = () => {
    const { id } = useParams();
    const [characters, setCharacters] = useState([]);
    const [episodeName, setEpisodeName] = useState('');
    const [loading, setLoading] = useState(true); // State variable to track loading status
  
    useEffect(() => {
      const fetchEpisodeCharacters = async () => {
        try {
          const response = await axios.get(`https://rickandmortyapi.com/api/episode/${id}`);
          const episodeData = response.data;
          const characterPromises = episodeData.characters.map((characterUrl) => axios.get(characterUrl));
          const characterResponses = await Promise.all(characterPromises);
          const characterData = characterResponses.map((characterResponse) => characterResponse.data);
          setCharacters(characterData);
          setEpisodeName(episodeData.name);
          setLoading(false); // Set loading to false when data is fetched
        } catch (error) {
          console.error('Error fetching episode characters:', error.message);
        }
      };
  
      fetchEpisodeCharacters();
    }, [id]);
  
    if (loading) {
      return <LoadingComponent />; // Show the loading component while data is being fetched
    }

  function getStatusIcon(status) {
    switch(status) {
      case 'Alive':
        return <FaCheckCircle style={{color: 'green'}} />;
      case 'Dead':
        return <FaTimesCircle style={{color: 'red'}} />;
      default:
        return <FaQuestionCircle style={{color: 'grey'}} />;
    }
  }

  return (
    <Container className="d-flex justify-content-center align-items-start" style={{ minHeight: '100vh' }}>
      <div className="d-flex flex-column" style={{ backgroundColor: 'rgb(39, 43, 51)', width: '100%' }}>
        <div className="mb-3">
          <h2 className="text-center  mt-3 episode-name" style={{ paddingTop: '60px', fontFamily: 'get_schwifty',
          fontSize: '1.8rem',
          color: '#08BAE3',
          zIndex: 70,
          left: '-7em',
          WebkitTextStroke: '0.2em rgba(0,0,0,0.1)',
          textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000' }}>{episodeName} - Characters</h2>
        </div>
        <div style={{ maxHeight: 'calc(100vh - 200px)', overflowY: 'auto', backgroundColor: 'rgb(60, 62, 68)', borderRadius: '10px' }}>
          <Row id="r-m" className="mb-3">
            {characters.map((character) => (
              <Col key={character.id} lg={3} md={6} sm={12} style={{ marginBottom: '15px' }}>
                <Link to={`/charactersepisode/${character.id}`} style={{ textDecoration: 'none' }}>
                  <Card className="my-2 custom-card " style={{ borderRadius: '10px', overflow: 'hidden', border: 'none', width: '100%',  margin: '0 auto' , maxWidth: '400px' }}>
                    <div className="d-flex flex-column h-100">
                      <Card.Img variant="top" src={character.image} alt={character.name} style={{ height: 'auto', objectFit: 'cover', width: '100%', minHeight: '200px' }} />
                      <Card.Body className="d-flex flex-column w-100" style={{ flex: '1', paddingLeft: '20px', backgroundColor: 'rgb(39, 43, 51)', width: '100%', border: '1px solid transparent', transition: 'border-color 0.6s' }}>
                        <div>
                          <Card.Title className="text-start" style={{ color: 'white', fontSize: '1.5rem', fontWeight: '800' }}>{character.name}</Card.Title>
                          <div>
                            <Card.Text className="text-start" style={{ color: 'white', fontSize: '14px' }}>
                            {getStatusIcon(character.status)} {character.status} - {character.species}
                            </Card.Text>
                          </div>
                          <Card.Text className="text-start">
                            <b className="test-color" style={{ color: 'rgb(158, 158, 158)', fontSize: '14px' }}>Gender:</b> <span style={{ color: 'white' }}>{character.gender} </span><br />
                            <b className="test-color" style={{ color: 'rgb(158, 158, 158)', fontSize: '14px' }}>From:</b> <span style={{ color: 'white' }}>{character.origin.name} </span><br />
                            <b className="test-color" style={{ color: 'rgb(158, 158, 158)', fontSize: '14px' }}>Last seen location:</b> <span style={{ color: 'white' }}>{character.location.name} </span><br />
                          </Card.Text>
                        </div>
                      </Card.Body>
                    </div>
                  </Card>
                </Link>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </Container>
  );
};

export default EpisodeCharacters;





