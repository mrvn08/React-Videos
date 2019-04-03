import React from 'react';

export default class SearchBar extends React.Component {
    state = { searchTerm: '' };

    render(){
        return (
            <div className="ui segment"> 
                <form className="ui form search"> 
                    <h1>Video Search</h1>
                    <div className="field">
                        <div className="ui icon input">
                            <input className="prompt" type="text" placeholder="Search..."/>
                            <i className="search icon"></i>
                        </div>
                    </div>
                </form> 
            </div>
        );
    }
}