import axios from 'axios';
import { useEffect, useState } from 'react';
import { Card, Row, Col, Container } from 'react-bootstrap';
import "../styles/char.css";

const apiAllChar = "https://rickandmortyapi.com/api/episode";

function CharEpisodes() {
  const [allCharacters, setAllCharacters] = useState([]);

  const [episodeNames, setEpisodeNames] = useState("");

  const getAllCharacters = async () => {
    try {
      let response = await axios.get(apiAllChar );
      setAllCharacters(response.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllCharacters();
  }, []);

  useEffect(() => {
    const getEpisodeNames = async () => {
      const episodes = await axios.all(
        allCharacters.flatMap((character) => character.episode).map((url) => axios.get(url))
      );
      setEpisodeNames(episodes.map((episode) => episode.data.name).join(", "));
    };
    getEpisodeNames();
  }, [allCharacters]);

  const getEpisodesByCharacter = (characterId) => {
    const character = allCharacters.find((c) => c.id === characterId);
    const episodeUrls = character.episode;
    const episodes = episodeNames.split(", ");
    const episodesByCharacter = episodes.filter((e) => episodeUrls.includes(e.url));
    setEpisodeNames(episodesByCharacter.map((e) => e.name).join(", "));
  };

  return (
    <Container className="d-flex justify-content-center align-items-start">
      <div className="d-flex flex-column" style={{ backgroundColor: 'rgb(39, 43, 51)', width: '100%' }}>
        <div style={{ height: '550px', overflowY: 'auto', backgroundColor: 'rgb(60, 62, 68)', borderRadius: '10px' }}>
          <Row id='r-m' className="mb-3">
            {allCharacters.map((character) => (
              <Col key={character.id} lg={6} md={6} sm={12} xs={12}>
                <Card className="my-2" style={{ borderRadius: '10px', overflow: 'hidden', border: 'none', width: '100%' }}>
                  <div className="d-flex">
                    <Card.Img
                      variant="top"
                      src={character.image}
                      alt={character.name}
                      style={{ height: 'auto', objectFit: 'cover', width: 'auto', minWidth: '80px' }}
                    />
                    <Card.Body
                      className="d-flex flex-column"
                      style={{ width: '70%', paddingLeft: '20px', backgroundColor: 'rgb(39, 43, 51)', minHeight: '250px' }}
                    >
                      <div>
                        <Card.Title className="text-start" style={{ color: 'white', fontSize: '1.8rem', fontWeight: '800' }}>
                          {character.name}
                        </Card.Title>
                        <div>
                          <Card.Text className="text-start" style={{ color: 'white', fontSize: '14px' }}>
                            Episode Name: {episodeNames}
                          </Card.Text>
                        </div>
                        <button onClick={() => getEpisodesByCharacter(character.id)}>Show episodes</button>
                      </div>
                    </Card.Body>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </Container>
  );
}

export default CharEpisodes;


