import React, { useEffect, useState } from 'react';
import Items from './Items';

export default function Data() {

    const [Data, SetData] = useState([])

    const Call = async() => {
        let url = 'https://jsonplaceholder.typicode.com/photos';
        let data = await fetch(url)
        let parsed = await data.json()
        SetData(parsed)
    }

    useEffect(() => {
        Call()
    }, [])

  return (
    <>
            <div className="container my-3">
                <div className="row">
                    {Data.map((element) => {
                        return <div className='col md-2'>
                            <Items title= {element.title}/> 
                            </div>
                    })}
                </div>
            </div>
    </>
  )
}
