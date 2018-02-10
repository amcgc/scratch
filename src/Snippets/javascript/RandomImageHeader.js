import React, { Component } from 'react';

class RandomImageHeader extends Component {


  render() {
    //imageSrc="https://picsum.photos/400/250/?random"
    return (
      <div>
        {React.Children.map(this.props.children, (child) => {
          return React.cloneElement(child, {imageSrc: `https://picsum.photos/400/250?image=${Math.floor(Math.random() * 1000)}` });
        })}
      </div>
    );
  }
}

export default RandomImageHeader;
