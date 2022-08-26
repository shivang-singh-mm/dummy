import React from 'react'
import {Link} from 'react-router-dom'


function Home () {


    return(
        <div>
            <div className='Home'>
                <div className='dashboard' >
                    <button className='button'>Dashboard</button>
                </div>
                <div className='event' >
                    <h1 style={{margin: "30px auto auto 40px"}}>Welcome Ravi</h1>
                    <p style={{margin: "30px auto auto 40px"}}><strong>Welcome to the event of Ravi</strong></p>
                    <Link style={{textDecoration:'none'}} to="/create"><button style={{margin: "30px auto auto 40px",display:'flex', justifyContent:'space-around'}} className="new-event" href="/create"><i className="logo material-icons">add_circle_outline</i><p>Add event</p></button></Link>  
                </div>
            </div>
        </div>
    )
}

export default Home