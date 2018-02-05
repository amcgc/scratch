import React from 'react';
import { Carousel } from 'react-bootstrap';

const Home = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <div className='carousel-background'
                        style={{ backgroundImage: "linear-gradient(0deg, black 20%, transparent 100%),url('code.jpg')" }}></div>
                    <Carousel.Caption>
                        <h3>Javascript Snippets</h3>
                        <p>Illustrations of ES6, ES7 & ES8, React 16 features</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div className='carousel-background'
                        style={{ backgroundImage: "linear-gradient(0deg,black 20%, transparent 100%),url('d3.jpg')" }}></div>
                    <Carousel.Caption>
                        <h3>D3.js</h3>
                        <p>Worked examples of D3.js charting</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div className='carousel-background'
                        style={{ backgroundImage: "linear-gradient(0deg,black 20%, transparent 100%),url('react.png')" }}></div>
                    <Carousel.Caption>
                        <h3>React.js</h3>
                        <p>Worked examples of building a fully functional React.js application.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <div className="container marketing">
                <div className="row">
                    <div className="col-lg-4">
                        <img src="template.svg" height="140px" width="140px" alt="reusable" />
                        <h2>Reusable patterns</h2>
                        <p>All snippets and examples within this scratchpad leverage reusable technologies and patterns</p>
                    </div>
                    <div className="col-lg-4">
                        <img src="connected.jpg" height="140px" width="140px" alt="easy"/>
                        <h2>Easy to follow</h2>
                        <p>This Scratchpad's examples are simple and standalone, providing an efficient reference resource</p>
                    </div>
                    <div className="col-lg-4">
                        <img src="fast.png" height="140px" width="140px" alt="quick"/>
                        <h2>Quick to experiment</h2>
                        <p>Additional examples and experiments can be easily added to the Scratchpad</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;