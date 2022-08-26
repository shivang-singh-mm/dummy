
import React, { useState} from 'react'
import {Link} from 'react-router-dom'
// import Axios from 'axios'



const Create = ()=> {


    
    

    const [title, setTitle] = useState("")
    const [banner, setBanner] = useState("")
    const [description, setDescription] = useState("")
    const [services, setServices] = useState("");
    const [language, setLanguage] = useState("")
    const [duration, setDuration] = useState("")
    const [date, setDate] = useState("")
    const [link, setLink] = useState("")



    const createEvent = (e) => {
        e.preventDefault();
        console.log((title + services))
        let data = { title, services,description, banner, duration, date , link}
        fetch('/create',{
            method: "POST",
            headers:{
                "Accept": "application/json",
                "Content-type": "application/json"
            },
            body: JSON.stringify(data)
        }).then(res=>console.log(res))
        .catch(err=>console.log(err))

        
    };

    return(
        <div>
            <form onSubmit={createEvent} encType='multipart/form-data' method="POST" action="/create">
            <div className='block'>
                <div className='first-block'>
                    <Link to="/" style={{margin:'40px auto auto 10px'}}>Back</Link>
                    <h3>Create Event</h3>
                    <div style={{display: 'flex', flexDirection:'column', alignItems: 'left'}}>
                        
                        <input maxLength={80} placeholder='Event Name' name="title" style={{width:'150px', border:'0px',marginBottom:'20px' }}
                        value={title}
                        onChange={(e)=>setTitle(e.target.value)}
                        ></input>
                        
                        <input placeholder='Banner' name="banner" style={{width:'150px', border:'0px', marginBottom:'20px'}}
                        value={banner}
                        onChange={(e)=>setBanner(e.target.value)}
                        ></input>
                        <input maxLength={100} placeholder='Short Description' name="description" style={{width:'150px', border:'0px',marginBottom:'20px' }}
                        value={description}
                        onChange={(e)=>setDescription(e.target.value)}
                        ></input>
                        
                        <input placeholder='Services that you offer' name="services" style={{borderWidth:'1px',borderRadius:'10px', height:'100px',width:'300px'}}
                        value={services}
                        onChange={(e)=>setServices(e.target.value)}
                        ></input>

                    </div>   
                    </div>
                <div className='second-block'>
                    <div style={{display:'flex',justifyContent:'flex-end', margin:'20px 20px auto auto' }}>
                        <Link to='/preview'>
                            <button  style={{backgroundColor:'white', borderWidth:'1px', borderRadius:'20px',color:'red', width:'140px',height:'40px'}}>Preview Page</button>
                        </Link>
                    </div>
                    <div style={{display:'flex', flexDirection: 'column'}}>
                        <label style={{marginTop:'40px'}}>Choose Language</label>
                        
                        <select name='language' style={{width:'150px', marginBottom: '20px'}}
                        value={language}
                        onChange={e=>setLanguage(e.target.value)}>
                            <option value="english">English</option>
                            
                            <option value="hindi">Hindi</option>

                        </select>
                        <label>Price</label>
                        <select style={{width:'150px', marginBottom: '20px'}}>
                            <option value='Free'>Free</option>
                            <option value='Paid'>Paid</option>
                        </select>

                        <label >Enter Duration</label>
                        <input name='duration' placeholder='Duration (in minutes)' style={{width:'150px', marginBottom: '20px'}}
                        value={duration}
                        onChange={e=>setDuration(e.target.value)}></input>

                        <label >Enter Date</label>
                        <input name='date' type='date' style={{width:'150px', marginBottom: '20px'}}
                        value={date}
                        onChange={e=>setDate(e.target.value)}></input>

                        <label >Enter Link</label>
                        <input name='link' type='link' style={{width:'150px'}}
                        value={link}
                        onChange={e=>setLink(e.target.value)}></input>
                    </div>
                    
                </div>
            </div>
            <div style={{textAlign:'center'}}>
                <button type='submit' name='action' style={{marginTop:'20px', width:'130px', backgroundColor: 'red', borderWidth: '1px', color:'white', borderRadius:'15px', height:'30px'}}>Submit</button>
                </div>
            </form>
        </div>
        
    )
}

export default Create