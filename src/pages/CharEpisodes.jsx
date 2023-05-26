import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Row, Col, Image, Card } from 'react-bootstrap';
import { FaCheckCircle, FaTimesCircle, FaQuestionCircle } from 'react-icons/fa';
import LoadingComponent from '../components/Loading';

function Episodes() {
  const [episodes, setEpisodes] = useState([]);
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true); // State variable to track loading status
  const { id } = useParams();

  useEffect(() => {
    async function fetchEpisodes() {
      try {
        const response = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
        setCharacter(response.data);
        const episodeIds = response.data.episode.map(url => url.split('/').pop());
        const episodesResponse = await axios.get(`https://rickandmortyapi.com/api/episode/${episodeIds.join(',')}`);
        // check if episodesResponse.data is an array, if not, wrap it in an array
        const episodes = Array.isArray(episodesResponse.data) ? episodesResponse.data : [episodesResponse.data];
        setEpisodes(episodes);
        setLoading(false); 
      } catch (error) {
        console.log(error);
      }
    }

    fetchEpisodes();
  }, [id]);

  function getStatusIcon(status) {
    switch (status) {
      case 'Alive':
        return <FaCheckCircle style={{ color: 'green' }} />;
      case 'Dead':
        return <FaTimesCircle style={{ color: 'red' }} />;
      default:
        return <FaQuestionCircle style={{ color: 'grey' }} />;
    }
  }

  if (loading) {
    return <LoadingComponent />; // Show the loading component while data is being fetched
  }

  return (
    <div style={{ position: "relative", zIndex: "1"  }}>
      {character && (
        <Container className="mt-4" style={{ backgroundColor: "#282c34", paddingTop: "50px", minHeight: '100vh' }}>
          <Row>
            <Col md={4} style={{ backgroundColor: "#282c34", paddingTop: "30px", paddingBottom: "20px" }}>
              <div className="d-flex justify-content-center">
                <Image
                  src={character.image}
                  roundedCircle
                  className="border border-light mobile-image"
                  style={{ width: "200px" }}
                />
              </div>
              <h3 className="text-light text-center" style={{ paddingTop: "20px", paddingBottom: "10px", color: 'white', fontSize: '1.5rem', fontWeight: '800' }}>{character.name} </h3>
              <div className="d-flex flex-column justify-content-between " style={{ height: "100%" }}>
                <div>
                  <Card.Text className="text-center" style={{ color: 'white', fontSize: '14px' }}>
                    {getStatusIcon(character.status)} {character.status} - {character.species} <br></br>
                    <b className='test-color' style={{ color: 'rgb(158, 158, 158)', fontSize: '14px' }}>Gender:</b> <span style={{ color: 'white' }}>{character.gender} </span>
                  </Card.Text>
                </div>
              </div>
            </Col>
  
            <Col md={8} className="text-light" style={{ backgroundColor: "#282c34", overflow: "scroll", overscrollBehaviorY: "contain",maxHeight: "calc(100vh - 70px)", paddingBottom: "40px" }}>
              <h1 className="text-center" style={{
                fontFamily: 'get_schwifty',
                fontSize: '2rem',
                color: '#08BAE3',
                WebkitTextStroke: '0.2em rgba(0,0,0,0.1)',
                textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000',
                paddingTop: "20px",
                paddingBottom: "20px"
              }}> Episodes</h1>
              {Array.isArray(episodes) && (
                <div className="row row-cols-1 row-cols-md-2" style={{ textAlign: 'center' }} >
                  {episodes.map((episode, index) => (
                    <div key={episode.id} className={`col mb-3 ${episodes.length === 1 ? 'full-width' : ''}`} >
                      <div className="text-light episode-container" >
                        <Link to={`/episodecharacters/${episode.id}`} style={{ textDecoration: 'none', color: 'white' }}>
                          <p className="episode-name" style={{
                            fontSize: '1.4rem',
                            fontWeight: '800',
                            color: '#08BAE3',
                            WebkitTextStroke: '0.2em rgba(0,0,0,0.1)',
                            textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000',
                          }}>{episode.name}</p>
                          <p>Air date: {episode.air_date}</p>
                          <p>Episode: {episode.episode}</p>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              <style>{`
    @media (max-width: 768px) {
      .text-light .row {
        max-height: calc(100vh - 545px); // Adjusted value for mobile screens
      }
    }
  `}</style>
            </Col>
          </Row>
        </Container>
      )}
    </div>
  );
  
  
}

export default Episodes;






