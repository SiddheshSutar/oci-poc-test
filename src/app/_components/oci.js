"use client"

import { useEffect } from "react"
// import { initOci } from "../_utils/helpers"
// import { initOci } from "../helpers"

const OCI = () => {

    useEffect(() => {
        // fetch('http://localhost:3000/api/initOciClient')
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log('hex: ', data)
        //     })
        //     .catch(e => {
        //         console.log('hex err: ', e)
        //     })

        // initOci()

        // fetch('http://localhost:3000/api/createIndex')
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log('hex: ', data)
        //     })
        //     .catch(e => {
        //         console.log('hex err: ', e)
        //     })

        fetch('http://localhost:3000/api/searchIndex')
            .then(res => res.json())
            .then(data => {
                console.log('hex: ', data)
            })
            .catch(e => {
                console.log('hex err: ', e)
            })

        // fetch('http://localhost:3000/api/addDocument')
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log('hex: ', data)
        //     })
        //     .catch(e => {
        //         console.log('hex err: ', e)
        //     })
    }, [])

    return (
        <div>OCI</div>
    );
}

export default OCI;