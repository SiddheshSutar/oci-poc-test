// "use client"
import { Client } from "@opensearch-project/opensearch"

export let client = null

function initOci() {
    if(client) return 
    
    let clientVar = new Client({
        node: "https://144.24.213.233:9200",
        // node: "https://amaaaaaasj6bavyascuegjbnl2auhkjbnmbqohvmulnphiqpg36mcn2xtvma.opensearch.me-jeddah-1.oci.oraclecloud.com:9200",
        auth: {
            username: "Devuser",
            password: "Cloud#2024"
        },
        ssl: {
            rejectUnauthorized: false
        }
    });
        
    // client?.ping({}, (err) => {
    //     if (err) {
    //         console.log('OCI CLuster Connection error ', err)
    //     } else {
    //         console.log('OCI CLuster Connection successful ')
            
    //     }
    // })
    
    if (clientVar) client = clientVar
}

initOci()