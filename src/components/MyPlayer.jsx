import React from 'react';
import { Container, Row, Col, ProgressBar } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const MyPlayer = () => {
  const playlist = useSelector((state) => state.player);

  if (!playlist || !playlist.title) {
    return null;
  }

  return (
    <div className="bg-container fixed-bottom pt-1">
      <Container fluid className="h-100">
        <Row className="h-100 justify-content-center align-items-center offset-lg-2">
          <Col xs={6} lg={4} className="text-white text-center">
            <p className="mb-1">{playlist.title}</p>
            <p className="mb-1">{playlist.artist.name}</p>
          </Col>

          <Col xs={6} lg={4} className="playerControls">
            <div className="d-flex justify-content-between">
             
            </div>

            <ProgressBar now={0} className="mt-3" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MyPlayer;
