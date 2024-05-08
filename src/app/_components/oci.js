"use client"

import axios from "axios"
import { useEffect } from "react"

const OCI = () => {
    
    const createIndex = () => {
        fetch('http://localhost:4000/api/createIndex')
            .then(res => res.json())
            .then(data => {
                console.log('hex: ', data)
            })
            .catch(e => {
                console.log('hex err: ', e)
            })
    }
    
    const addDoc = () => {
        axios.post('http://localhost:4000/api/addDocument',{ document: 'ss' })
            .then(data => {
                console.log('hex: ', data)
            })
            .catch(e => {
                console.log('hex err: ', e)
            })
        // fetch('http://localhost:4000/api/addDocument', { document: 'ss' })
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log('hex: ', data)
        //     })
        //     .catch(e => {
        //         console.log('hex err: ', e)
        //     })
    }
  
    const searchDoc = async () => {
        
    
        const users = fetch('https://dummyjson.com/users?q=Gayle&limit=10000')
            .then(res => res.json())
    
        fetch('http://localhost:4000/api/searchDocument')
            .then(res => res.json())
            .then(data => {
                console.log('hex: ', data)
            })
            .catch(e => {
                console.log('hex err: ', e)
            })
    }
  
    const searchIndex = async () => {
    
        fetch('http://localhost:4000/api/searchIndex')
            .then(res => res.json())
            .then(data => {
                console.log('hex: ', data)
            })
            .catch(e => {
                console.log('hex err: ', e)
            })
    }

    return (
        <div className="flex gap-1 bg-transparent">
            <button type="button" className="px-2 py-1 rounded-sm border border-1 border-slate-700"  onClick={createIndex}>Create Index</button>
            <button type="button" className="px-2 py-1 rounded-sm border border-1 border-slate-700"  onClick={addDoc}>Add Doc</button>
            <button type="button" className="px-2 py-1 rounded-sm border border-1 border-slate-700" onClick={searchIndex}>search Index</button>
            <button type="button" className="px-2 py-1 rounded-sm border border-1 border-slate-700" onClick={searchDoc}>search Doc</button>
        </div>
    );
}

export default OCI;