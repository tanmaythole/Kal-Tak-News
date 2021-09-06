import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar(props) {
    const [query, setQuery] = useState("");
    let location = useLocation();
    return (
        <div>
            <nav className="navbar fixed-top shadow navbar-expand-lg navbar-dark bg-dark">
                <Link className="navbar-brand" to="/"><img src="/logo.png" alt="KalTakNews" style={{height:"32px",paddingLeft:"10px"}} /></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname==='/'?"active":""}`} aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname==='/business'?"active":""}`} to="/business">Business</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname==='/entertainment'?"active":""}`} to="/entertainment">Entertainment</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname==='/health'?"active":""}`} to="/health">Health</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname==='/science'?"active":""}`} to="/science">Science</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname==='/sports'?"active":""}`} to="/sports">Sports</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname==='/technology'?"active":""}`} to="/technology">Technology</Link>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <input 
                            className="form-control me-2" 
                            type="search" 
                            placeholder="Search" 
                            onChange={(e)=>setQuery(e.target.value)} 
                            value={query} 
                            aria-label="Search" 
                        />
                        <Link to={`/${query}`}>
                            <button className="btn btn-success" type="submit">Search</button>
                        </Link>
                    </form>
                </div>
            </nav>
        </div>
    )
}



