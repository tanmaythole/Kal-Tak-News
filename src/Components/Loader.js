import React, { Component } from 'react'

export default class Loader extends Component {
    render() {
        return (
            <div className="text-center my-4">
                <img src="loader.gif" alt="Spinner" />
            </div>
        )
    }
}
