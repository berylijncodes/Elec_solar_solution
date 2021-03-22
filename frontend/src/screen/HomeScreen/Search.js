import React from 'react';
import classes from "../HomeScreen/HomeScreen.module.css"
const Search = ({handleChange, searchItems}) => {

  
    return (
        <div className="search-wrap">
            <div className="icon"><i className="fa fa-search" aria-hidden="true"></i></div>
            <div className="input-wrap">
                <input
                    className={classes.Search}
                    type="search"
                    placeholder="Search for Items here"
                    value={searchItems}
                    onChange={handleChange}
                />
            </div>
        </div>
    )
}

export default Search


