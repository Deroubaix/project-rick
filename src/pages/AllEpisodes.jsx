import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Col, Container, Row, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AllEpisodes = () => {
  const [episodes, setEpisodes] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [searchName, setSearchName] = useState('');

  useEffect(() => {
    const fetchEpisodes = async () => {
      try {
        const response = await axios.get(`https://rickandmortyapi.com/api/episode?page=${page}`);
        const newEpisodes = response.data.results;
        setEpisodes(newEpisodes);
        setHasMore(response.data.info.next !== null);
      } catch (error) {
        console.error('Error fetching episodes:', error);
      }
    };

    fetchEpisodes();
  }, [page]);

  const handleSearchNameChange = (e) => {
    setSearchName(e.target.value);
    setPage(1); // Reset page number when search query changes
  };

  const filterEpisodes = (episode) => {
    return episode.name.toLowerCase().includes(searchName.toLowerCase());
  };

  const handlePrevPage = () => {
    setPage((prevPage) => prevPage - 1);
  };

  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <Container className="d-flex justify-content-center align-items-start" style={{ minHeight: '100vh' }}>
      <div className="d-flex flex-column" style={{ backgroundColor: 'rgb(39, 43, 51)', width: '100%' }}>
        <Row className="mb-3">
          <Col className="d-flex justify-content-center">
            <Form.Control type="text" placeholder="Search by name" value={searchName} onChange={handleSearchNameChange} style={{ width: '50%', marginTop: '70px' }} />
          </Col>
        </Row>
        <div style={{ maxHeight: 'calc(100vh - 200px)', overflowY: 'auto', backgroundColor: 'rgb(60, 62, 68)', borderRadius: '10px' }}>
          <Row id="r-m" className="mb-3">
            {episodes.filter(filterEpisodes).map((episode) => (
              <Col key={episode.id} lg={4} md={6} sm={12} xs={12} style={{ marginBottom: '15px' }}>
              <Link to={`/episodecharacters/${episode.id}`} style={{ textDecoration: 'none' }}>
                <Card className="my-2 custom-card" style={{ borderRadius: '10px', border: 'none', width: '100%', margin: '0 auto', height: '100%' }}>
                  <Card.Body className="d-flex flex-column w-100 hover-shadow" style={{ flex: '1', paddingLeft: '20px', backgroundColor: 'rgb(39, 43, 51)', width: '100%', border: '1px solid transparent', transition: 'border-color 0.6s', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
                    <div>
                      <Card.Title className="text-center" style={{fontSize: '1.5rem', fontWeight: '800',
                       color: '#08BAE3', WebkitTextStroke: '0.2em rgba(0,0,0,0.1)',
                       textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000', }}>{episode.name}</Card.Title>
                      <div>
                        <Card.Text className="text-center" style={{ color: 'white', fontSize: '14px' }}>
                        <b className='test-color' style={{ color: 'rgb(158, 158, 158)', fontSize: '14px' }}> Episode:</b> <span style={{ color: 'white' }}> {episode.episode} </span><br />
                        <b className='test-color' style={{ color: 'rgb(158, 158, 158)', fontSize: '14px' }}> Air date:</b> <span style={{ color: 'white' }}>  {episode.air_date} </span>
                         
                        </Card.Text>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
                </Link>
              </Col>
            ))}
          </Row>
        </div>
        <div className="d-flex justify-content-between align-items-center my-3 mx-2">
          <div className="text-light">{`${page} of 3`}</div>
          <div>
            <Button variant="light" className="mx-1" onClick={handlePrevPage} disabled={page === 1}>
              Prev
            </Button>
            <Button variant="light" className="mx-1" onClick={handleNextPage} disabled={!hasMore}>
              Next
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AllEpisodes;






