import React, { Component } from 'react'

export default class Loader extends Component {
    render() {
        return (
            <div style={{height:"50vh",display:"flex",justifyContent:"center",alignItems:"center"}}>
                <img src="loader.gif" alt="Spinner" />
            </div>
        )
    }
}
