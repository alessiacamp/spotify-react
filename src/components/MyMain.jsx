import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavouriteAction, getMusicsAction, removeFromFavouriteAction } from "../redux/actions";
import { addToPlayer } from '../redux/actions';
import "../main.css";
import 'bootstrap-icons/font/bootstrap-icons.css';

const MyMain = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMusicsAction("queen", "rock"));
        dispatch(getMusicsAction("katyperry", "pop"));
        dispatch(getMusicsAction("eminem", "hiphop"));
    }, [dispatch]);

    const rockSongs = useSelector((state) => state.rock);
    const popSongs = useSelector((state) => state.pop);
    const hiphopSongs = useSelector((state) => state.hiphop);
    const favourite = useSelector((state) => state.favourite.list);

    return (
        <main className="mainPage col-10">
            <Row>
                <Col xs={9} lg={11} className="mainLinks d-none d-md-flex">
                    <a href="#">TRENDING</a>
                    <a href="#">PODCAST</a>
                    <a href="#">MOODS AND GENRES</a>
                    <a href="#">NEW RELEASES</a>
                    <a href="#">DISCOVER</a>
                </Col>
            </Row>

            <Row>
                <Col xs={10}>
                    <div id="rock">
                        <h2>Rock Classics</h2>
                        <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks g-2 my-3" id="rockSection">
                            {rockSongs.map((song) => (
                                <Col 
                                    className="text-center d-flex flex-column justify-content-center align-items-center" 
                                    key={song.id}
                                >
                                    <img
                                        className="img-fluid"
                                        src={song.album.cover_medium}
                                        alt="track"
                                    />
                                    <p className="text-center">
                                        Track: {song.album.title}<br />
                                        Artist: {song.artist.name}
                                    </p>
                                    <div className="d-flex align-items-center justify-content-center">
                                        <Button
                                            onClick={() => dispatch(addToPlayer(song))}
                                            className=" mx-2"
                                            variant="success"
                                        >
                                            Play
                                        </Button>
                                        {favourite.includes(song) ? (
                                            <i 
                                                className="bi bi-heart-fill" 
                                                style={{ fontSize: "1.5rem", color: "red" }} 
                                                onClick={() => dispatch(removeFromFavouriteAction(song))}
                                            ></i>
                                        ) : (
                                            <i 
                                                className="bi bi-heart-fill" 
                                                style={{ fontSize: "1.5rem", color: "white" }} 
                                                onClick={() => dispatch(addToFavouriteAction(song))}
                                            ></i>  
                                        )}
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </div>
                </Col>
            </Row>

            <Row>
                <Col xs={10}>
                    <div id="pop">
                        <h2>Pop Culture</h2>
                        <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks g-2 my-3" id="popSection">
                            {popSongs.map((song) => (
                                <Col 
                                    className="text-center d-flex flex-column justify-content-center align-items-center" 
                                    key={song.id}
                                >
                                    <img
                                        className="img-fluid"
                                        src={song.album.cover_medium}
                                        alt="track"
                                    />
                                    <p className="text-center">
                                        Track: {song.album.title}<br />
                                        Artist: {song.artist.name}
                                    </p>
                                    <div className="d-flex align-items-center justify-content-center">
                                        <Button
                                            onClick={() => dispatch(addToPlayer(song))}
                                            className=" mx-2"
                                            variant="success"
                                        >
                                            Play
                                        </Button>
                                        {favourite.includes(song) ? (
                                            <i 
                                                className="bi bi-heart-fill" 
                                                style={{ fontSize: "1.5rem", color: "red" }} 
                                                onClick={() => dispatch(removeFromFavouriteAction(song))}
                                            ></i>
                                        ) : (
                                            <i 
                                                className="bi bi-heart-fill" 
                                                style={{ fontSize: "1.5rem", color: "white" }} 
                                                onClick={() => dispatch(addToFavouriteAction(song))}
                                            ></i>  
                                        )}
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </div>
                </Col>
            </Row>

            <Row>
                <Col xs={10}>
                    <div id="hiphop">
                        <h2>HipHop</h2>
                        <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks g-2 my-3" id="hipHopSection">
                            {hiphopSongs.map((song) => (
                                <Col 
                                    className="text-center d-flex flex-column justify-content-center align-items-center" 
                                    key={song.id}
                                >
                                    <img
                                        className="img-fluid"
                                        src={song.album.cover_medium}
                                        alt="track"
                                    />
                                    <p className="text-center">
                                        Track: {song.album.title}<br />
                                        Artist: {song.artist.name}
                                    </p>
                                    <div className="d-flex align-items-center justify-content-center">
                                        <Button
                                            onClick={() => dispatch(addToPlayer(song))}
                                            className=" mx-2"
                                            variant="success"
                                        >
                                            Play
                                        </Button>
                                        {favourite.includes(song) ? (
                                            <i 
                                                className="bi bi-heart-fill" 
                                                style={{ fontSize: "1.5rem", color: "red" }} 
                                                onClick={() => dispatch(removeFromFavouriteAction(song))}
                                            ></i>
                                        ) : (
                                            <i 
                                                className="bi bi-heart-fill" 
                                                style={{ fontSize: "1.5rem", color: "white" }} 
                                                onClick={() => dispatch(addToFavouriteAction(song))}
                                            ></i>  
                                        )}
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </div>
                </Col>
            </Row>

        </main>
    );
};

export default MyMain;