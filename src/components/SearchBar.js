import React from 'react';
//import ReactDOM from 'react-dom';


class SearchBar extends React.Component {
    //constructor
    constructor(props){
        super(props);
        this.state = {
            term: ' '
        };

    }; 

    //search function handler
    onInputChange(event){
        console.log(event.target.value)
    };

    //form submit event handler
    onFormSubmit = (event) =>{
        event.preventDefault();
        this.props.onSubmit(this.state.term);
    };


    render(){
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label for="search">Image Search</label>
                        <input 
                            type="text" 
                            value={this.state.term}
                            onChange={
                                (e) => this.setState({term: e.target.value})
                            }
                        />
                       
                    </div>
                    
                </form>
            </div>
        );
    };
    

};

export default SearchBar;