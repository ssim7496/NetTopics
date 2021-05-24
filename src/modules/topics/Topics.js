import React, {Component} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons';
import './Topics.css';

export class Topics extends Component {

constructor(props) {
    super(props);
    this.state = {pictures:[], topic:"", current:0}
}

topicChanged(e) {
        this.setState({topic:e.currentTarget.dataset.id});
}

refreshList() {
    fetch(process.env.REACT_APP_API + this.state.topic + '/photos?client_id=wW1D7uBxqv_n0HVvm10O3LkCEES2xr_MVtfcYnzX0Q8')
        .then(response => response.json())
        .then(data => {
            this.setState({ pictures: data});
        });   
}

componentDidMount() {
    this.refreshList();
}

componentDidUpdate() {
    this.refreshList();
}

    render() {
        const {pictures} = this.state;  
        
        if(!Array.isArray(pictures)) {
            var pics = <h3 className="m-3">Please select a topic first</h3>
        } else {
            var pics = pictures.map(picture => 
                <img src={picture.urls.thumb} width="300px" height="300px" className="topicsImg"/>)
        }     
           
        const ImageSlider = () => {
            return (
                <>
                {
                    pictures.map(picture => 
                        <img src={picture.urls.thumb} width="300px" height="300px" className="topicsImg"/>)
                }
                </>
            )
        }

        return(
            <Container fluid className="pl-0 pr-0 mb-0">
                {window.tp}
                <Row className="h-100">
                    <Col lg={2}>
                    <nav className="nav-menu">
                        <ul className="nav-menu-items"> 
                            <li onClick={this.topicChanged.bind(this)} data-id="architecture" className="nav-text">Architecture</li>
                            <li onClick={this.topicChanged.bind(this)} data-id="experimental" className="nav-text">Experimental</li>
                            <li onClick={this.topicChanged.bind(this)} data-id="fashion" className="nav-text">Fashion</li>
                            <li onClick={this.topicChanged.bind(this)} data-id="film" className="nav-text">Film</li>
                            <li onClick={this.topicChanged.bind(this)} data-id="history" className="nav-text">History</li>
                            <li onClick={this.topicChanged.bind(this)} data-id="nature" className="nav-text">Nature</li>
                            <li onClick={this.topicChanged.bind(this)} data-id="technology" className="nav-text">Technology</li>
                            <li onClick={this.topicChanged.bind(this)} data-id="travel" className="nav-text">Travel</li>
                        </ul>
                    </nav>     
                    </Col>
                    <Col lg={10} className="p-10">
                        {pics}
                    </Col>
                </Row>
            </Container>
        )
    }

}