import React from 'react'
import Banner from './Banner'
import "./HomeScreen.css"
import Navbar from './Navbar'
import Row from './Row'
import requests from '../../adapters/Requests'

function HomeScreen() {
    return (
        <div className="homescreen">
            <Navbar/>
            <Banner/>
            <Row title="NETFLIX ORIGINALS" fetchURL={requests.fetchNetflixOriginals} isLargeRow/>
            <Row title="Trending Now" fetchURL={requests.fetchTrending} />
            <Row title="Top Rated" fetchURL={requests.fetchTopRated} />
            <Row title="Action Movies" fetchURL={requests.fetchActionMovies} />
            <Row title="Comedy Movies" fetchURL={requests.fetchComedyMovies} />
            <Row title="Horror Movies" fetchURL={requests.fetchHorrorMovies} />
            <Row title="Romantic Movies" fetchURL={requests.fetchRomanceMovies} />
            <Row title="Documentries" fetchURL={requests.fetchDocumentries} />
        </div>
    )
}

export default HomeScreen
