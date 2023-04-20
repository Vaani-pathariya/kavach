import React from 'react'

export default function
    () {
    return (
        <div className='container check-bar-container'>
            <h2>Check URL and Website in real-time</h2>
            <form action="" className='container check-bar'>
                <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="Enter a URL: www.example.com" aria-label="Recipient's username" aria-describedby="basic-addon2" required='required' />
                    <span class="input-group-text" id="basic-addon2">Enter Link here</span>
                </div>
                <button type="submit" className='check-btn btn btn-success'>Check</button>
            </form>
        </div>
    )
}
