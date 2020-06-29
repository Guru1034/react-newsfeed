import React, {useRef} from 'react';
import logo from '../logo.svg'

export default function Header(props) {

    const keywordRef = useRef();
    let keyword = '';

    const styles = {
        headerContainer:{
            display: 'grid',
            gridTemplateColumns: '1fr 4fr',
            gridColumnGap: '5px'
        },
        searchContainer:{
            display: 'grid',
            gridTemplateColumns: '3fr 1fr',
            gridColumnGap: '5px'
        }
    }

    function onClick(e) {
        e.preventDefault();
        props.executeSearch(keyword);
        keywordRef.current.value = '';
    }

    function onValueChange() {
        keyword = keywordRef.current.value;
        if(keyword === '') return
    }

    return (
        <>
            <nav className="navbar fixed-top navbar-dark bg-dark" style={styles.headerContainer}>
                <div className="navbar-brand" >
                    <img src={logo} width="30" height="30" className="d-inline-block align-top" alt=""/>
                    G-News
                </div>
                <form className="form-inline"  style={styles.searchContainer}>
                    <input className="form-control mr-sm-2" 
                        type="search" 
                        placeholder="Search" 
                        aria-label="Search"
                        ref={keywordRef}
                        onChange={onValueChange}/>
                    <button className="btn btn-outline-success my-2 my-sm-0" 
                        type="submit" 
                        onClick={onClick}>Search</button>
                </form>
            </nav>
        </>
    )
}
