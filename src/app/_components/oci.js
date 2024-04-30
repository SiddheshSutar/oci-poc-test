"use client"

import { useEffect } from "react"
// import { client, initOci } from "../helpers"

const OCI = () => {

    useEffect(() => {
        fetch('http://localhost:3000/api/initOciClient')
        // fetch('http://localhost:4000') 
            .then(res => res.json())
            .then(data => {
                console.log('hex: ', data)
            })
            .catch(e => {
                console.log('hex err: ', e)
            })
        
        // initOci()
    }, [])

    return (
        <div>OCI</div>
    );
}

export default OCI;