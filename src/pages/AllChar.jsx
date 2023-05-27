import axios from "axios";
import { useEffect, useState } from "react";
import { Card, Row, Col, Container, Form } from "react-bootstrap";
import { FaCheckCircle, FaTimesCircle, FaQuestionCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../styles/char.css";
import LoadingComponent from "../components/Loading";

const apiAllChar = "https://rickandmortyapi.com/api/character/?name=";

function AllChar() {
  const [allCharacters, setAllCharacters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchName, setSearchName] = useState("");
  const [loading, setLoading] = useState(true);

  const getAllChar = async (page) => {
    try {
      let response = await axios.get(apiAllChar + searchName + "&page=" + page);
      setAllCharacters(response.data.results);
      setTotalPages(response.data.info.pages);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setLoading(false);
    getAllChar(currentPage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage, searchName]);

  function getStatusIcon(status) {
    switch (status) {
      case "Alive":
        return <FaCheckCircle style={{ color: "green" }} />;
      case "Dead":
        return <FaTimesCircle style={{ color: "red" }} />;
      default:
        return <FaQuestionCircle style={{ color: "grey" }} />;
    }
  }

  function handleSearchNameChange(event) {
    setSearchName(event.target.value);
  }

  function filterCharacters(character) {
    if (searchName === "") {
      return true;
    } else if (
      character.name.toLowerCase().includes(searchName.toLowerCase())
    ) {
      return true;
    } else {
      return false;
    }
  }

  if (loading) {
    return <LoadingComponent />;
  }

  return (
    <Container
      className="d-flex justify-content-center align-items-start"
      style={{ minHeight: "100vh" }}
    >
      <div
        className="d-flex flex-column"
        style={{ backgroundColor: "rgb(39, 43, 51)", width: "100%" }}
      >
        <Row className="mb-3">
          <Col className="d-flex justify-content-center">
            <Form.Control
              type="text"
              placeholder="Search by name"
              value={searchName}
              onChange={handleSearchNameChange}
              style={{ width: "50%", marginTop: "70px" }}
            />
          </Col>
        </Row>
        <div
          style={{
            maxHeight: "calc(100vh - 200px)",
            overflowY: "auto",
            backgroundColor: "rgb(60, 62, 68)",
            borderRadius: "10px",
          }}
        >
          <Row id="r-m" className="mb-3">
            {allCharacters.filter(filterCharacters).map((character) => (
              <Col
                key={character.id}
                lg={3}
                md={6}
                sm={12}
                xs={12}
                style={{ marginBottom: "15px" }}
              >
                <Link
                  to={`/charactersepisode/${character.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <Card
                    className="my-2 custom-card "
                    style={{
                      borderRadius: "10px",
                      overflow: "hidden",
                      border: "none",
                      width: "100%",
                      margin: "0 auto",
                      maxWidth: "400px",
                    }}
                  >
                    <div
                      className="d-flex flex-column"
                      style={{ height: "100%" }}
                    >
                      <Card.Img
                        variant="top"
                        src={character.image}
                        alt={character.name}
                        style={{
                          height: "auto",
                          objectFit: "cover",
                          width: "100%",
                          minHeight: "200px",
                        }}
                      />
                      <Card.Body
                        className="d-flex flex-column "
                        style={{
                          flex: "1",
                          paddingLeft: "20px",
                          backgroundColor: "rgb(39, 43, 51)",
                          width: "100%",
                          border: "1px solid transparent",
                          transition: "border-color 0.6s",
                        }}
                      >
                        <div>
                          <Card.Title
                            className="text-start"
                            style={{
                              color: "white",
                              fontSize: "1.5rem",
                              fontWeight: "800",
                            }}
                          >
                            {character.name}
                          </Card.Title>
                          <div>
                            <Card.Text
                              className="text-start"
                              style={{ color: "white", fontSize: "14px" }}
                            >
                              {getStatusIcon(character.status)}{" "}
                              {character.status} - {character.species}
                            </Card.Text>
                          </div>
                          <Card.Text className="text-start">
                            <b
                              className="test-color"
                              style={{
                                color: "rgb(158, 158, 158)",
                                fontSize: "14px",
                              }}
                            >
                              Gender:
                            </b>{" "}
                            <span style={{ color: "white" }}>
                              {character.gender}{" "}
                            </span>
                            <br />
                            <b
                              className="test-color"
                              style={{
                                color: "rgb(158, 158, 158)",
                                fontSize: "14px",
                              }}
                            >
                              From:
                            </b>{" "}
                            <span style={{ color: "white" }}>
                              {character.origin.name}{" "}
                            </span>
                            <br />
                            <b
                              className="test-color"
                              style={{
                                color: "rgb(158, 158, 158)",
                                fontSize: "14px",
                              }}
                            >
                              Last seen location:
                            </b>{" "}
                            <span style={{ color: "white" }}>
                              {character.location.name}{" "}
                            </span>
                            <br />
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
        <div
          className="d-flex justify-content-between align-items-center my-3 mx-2"
          style={{ paddingTop: "0px", marginTop: "0px" }}
        >
          <div className="text-light">{`${currentPage} of ${totalPages}`}</div>
          <div>
            <button
              className="btn btn-light mx-1"
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Prev
            </button>
            <button
              className="btn btn-light mx-1"
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default AllChar;
