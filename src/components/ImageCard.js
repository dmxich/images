import React from 'react';


class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {spans: 0};
    this.imageRef = React.createRef();
  };

  componentDidMount() {
    this.imageRef.current.addEventListener('load', this.setSpans = ()=>{
        let imgHeight = this.imageRef.current.height;
        let spans = Math.ceil(imgHeight / 10);
        this.setState({spans});
    });
    
  };

   
  


  componentDidUpdate() {
    console.log("Component updated");
  };

  render() {
    const { description, urls, id } = this.props.image;

    return (
      <div style={{gridRowEnd: `span ${this.state.spans}`}}>
        <img src={urls.regular} alt={description} id={id} ref={this.imageRef} />
      </div>
    );
  }
}

export default ImageCard;