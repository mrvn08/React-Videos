import React from 'react';
import ReactDOM from 'react-dom';

export default class SearchBar extends React.Component {
    state = { searchTerm: '' };

    render(){
        return (
            <form className="ui search"> 
                <div className="ui icon input">
                    <input className="prompt" type="text" placeholder="Search..."/>
                    <i className="search icon"></i>
                </div>
            </form> 
        );
    }
}