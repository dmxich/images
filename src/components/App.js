import React from 'react';
import unsplash from '../API/Unsplash'
//import ReactDOM from 'react-dom';
import SearchBar from './SearchBar'
import ImageList from './ImageList';


class App extends React.Component{ 
    state = {images: []};
    //request using axios to unsplash API to get list of photos using our search term
     onSearchSubmit = async (term) =>{
        let response =  await unsplash.get(
          "/search/photos", {
            params:{
                query: term
            }
            
          }
        );
        this.setState({images: response.data.results});
        //.then((response)=>{
          //  console.log(response.data.results);
        //});
    };

    componentDidMount() {
        console.log('Component mounted');
    };


    componentDidUpdate(){
        console.log('Component updated');
    };



    componentWillUnmount(){
        console.log('Component unmounted');
    };


    render(){
        return (
            <div className="ui container" style={{marginTop: '10vh'}}>
                <SearchBar onSubmit={this.onSearchSubmit}/>
                <ImageList images = {this.state.images}/>
            </div>
        );
    }
        
    
    

};

export default App;
