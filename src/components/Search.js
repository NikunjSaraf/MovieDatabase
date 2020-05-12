import React from 'react'

function Search(props) {
    return (
        <section className="searchbox-wrap">
        <input type="text" className="searchbox" placeholder="Search for a movie....!"  
        onChange={props.handleInput}
        onKeyPress={props.search}/>
        </section>
        )
}

export default Search
