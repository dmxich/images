import React from 'react';
import ImageCard from './ImageCard'
import './ImageList.css';

const ImageList = (props) =>{


    let imageArray = props.images.map((image) =>{
        
        
        return (
            <ImageCard key={image.id} image={image} />
        );
                
    });
    //console.log(props.images);
    return (
      <div>
        <div style={{alignItems: 'right'}}>
          <h2 >The Result Images are: </h2>
        </div>
        

        <div className="image-list">
          
          {imageArray}
        </div>
      </div>
    );
}


export default ImageList;