import React, { useState } from 'react'

function CheckBar() {
    const [data, setData] = useState([]);
    const [url, setUrl] = useState([]);

    const handleChange = e => {
        const uri = e.target.value
        setUrl(uri)
        console.log(url, data);
    }

    const getValue = (e) => {
        e.preventDefault();
        console.log(url);
        fetch('http://localhost:5000/',{
            method:"post",
            headers:{
                "Allow-Control-Allow-Origin":"*",
                "Content-Type":"application/json",
            },
            body:JSON.stringify({
                url:url
            })
        })
        .then(res => res.json())
        .then(result=>{
            setData(result.message)
        }).catch(err=>{
          console.log(err)
      })
    }

    return (
        <div className='container check-bar-container'>
            <h2>Check URL and Website in real-time</h2>
            <form action="" className='container check-bar'>
                <div className="input-group mb-3">
                    <input type="text" class="form-control" placeholder="Enter a URL: www.example.com" value={url} onChange={handleChange} required='required' />
                    <span className="input-group-text" id="basic-addon2">Enter Link here</span>
                </div>
                <button type="submit" className='check-btn btn btn-success' onClick={getValue}>Check</button>
            </form>
            { data[0] != undefined ?
             (<h1> Your URL is : {data}</h1>) : ""
            }
        </div>
    )
}

export default CheckBar;