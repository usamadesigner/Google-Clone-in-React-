import React, { useState } from 'react'
import './Search.css'
import SearchIcon from '@material-ui/icons/Search';
import { Mic } from '@material-ui/icons';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom'
import { actionTypes } from '../Redux/reducer'
import { useStateValue } from '../Redux/Stateprovider'

function Search({ hidebuttons = false }) {
      // eslint-disable-next-line
      const [{ }, dispatch] = useStateValue();
      const [Input, setInput] = useState('');
      const history = useHistory();
      const Search = (e) => {
            e.preventDefault();
            console.log(Input);
            if (Input === "") {
                  alert("Can't Search Blank");
            }
            else {
                  dispatch({
                        type: actionTypes.SET_SEARCH_TERM,
                        term: Input
                  })
                  history.push('/search');
            }
            // here we will 
      };

      return (
            <form className='search'>
                  <div className='search__input'>
                        <SearchIcon className="search__inputIcon" />
                        <input placeholder="Search" className="search__inputBox"
                              value={Input}
                              onChange={e => setInput(e.target.value)}
                        />
                        <Mic />
                  </div>
                  {!hidebuttons ? (
                        <div className="search__buttons">
                              <Button type='submit' onClick={Search} variant="outlined">Google Search</Button>
                              <Button variant='outlined'>I'm feeling Lucky</Button>
                        </div>
                  ) : (
                              <div className="search__buttons">
                                    <Button className="search__buttonshidden" type='submit' onClick={Search} variant="outlined">Google Search</Button>
                                    <Button className="search__buttonshidden" variant='outlined'>I'm feeling Lucky</Button>
                              </div>
                        )}
            </form>

      )
}
export default Search
