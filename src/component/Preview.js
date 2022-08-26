import {Link} from 'react-router-dom'
import React,{useEffect, useState} from "react";


function Preview() {

    const [data, setData] = useState([])
    useEffect(()=>{
        fetch('/preview')
        .then(res=> {return res.json()
        }).then((data)=>{
            setData(data)
        })
    },[])
    
            return(
                <div className="preview">

                    {
                        data.map(item => {
                        return(<div>
                            <div className="preview1">hello</div>
            <div style={{display:'flex'}} className="preview2">
                <div style={{flexGrow:'1'}}>
                    <h2 style={{marginLeft:'130px'}} >{item.title}</h2>
                    <p style={{marginLeft:'130px', marginBottom:'50px'}}>{item.description}</p>
                    <h2 style={{marginLeft:'130px'}}>What will you get?</h2>
                    <p  style={{marginLeft:'130px'}}>{item.services}</p>
                </div>
                <div style={{flexGrow:'1'}}>
                    <div className="box">
                        <ul>
                            <li  type="date" style={{display: 'flex', color:'red', marginBottom:"10px"}}>{item.date}</li>
                            <li  style={{display: 'flex', color:'red'}}><i style={{marginRight:'20px'}} className="material-icons">av_timer</i>11:50 AM</li>
                            <li style={{marginTop:'10px',display: 'flex', color:'blue'}}><Link to={item.link}><i style={{marginRight:'20px'}} className="material-icons">video_call</i>Link</Link></li>
                            <li style={{marginTop:'10px', display: 'flex', color:'green'}}><i style={{marginRight:'20px'}} className="material-icons">euro_symbol</i>Free</li>
                            <li style={{marginTop:'10px'}}><strong>Duration - </strong>{item.duration}</li>
                        </ul>
                    </div>
                </div>
            </div>
                       </div> )})
                    }
                
              
        </div>
    )
    
    
}

export default Preview


