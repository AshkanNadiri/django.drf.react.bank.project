import React from 'react'

export default function Home() {
    return (
        <center style={homeStyle}>
            <h3> Click on <strong> Branch</strong> to try this App</h3>
            <button className="btn btn-outline-info"> JUST YOU KNOW </button>
        </center>
    )

}

const homeStyle = {
    height: '90vh',
    backgroundColor: 'grey'
}