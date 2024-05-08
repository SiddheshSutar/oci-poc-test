import { client } from "@/app/_utils/helpers";
import { NextResponse } from "next/server";
import NextCors from "nextjs-cors";


// export async function OPTIONS(req, res) {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//     res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
//     res.status(200).end();
// }
export async function POST(req, res) {
    // await NextCors(req, res, {
    //     // Options
    //     methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    //     origin: '*',
    //     optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
    //  });
    
    // if (req.method === 'OPTIONS') {
    //     // Set CORS headers for preflight request
    //     res.setHeader('Access-Control-Allow-Origin', '*');
    //     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    //     res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    //     res.status(200).end(); // Respond to preflight request
    //     return;
    // }
    
     // Set the CORS headers to allow requests from any origin
    // res.setHeader('Access-Control-Allow-Origin', '*');
    // // Set the allowed HTTP methods that can be used when making the request
    // res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    // // Set the allowed headers that can be used in the request
    // res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
     
    
    

    // Add a document to the index
    var document = {
        title: "The Outsider",
        author: "Stephen King",
        year: "2018",
        genre: "Crime fiction",
    };
    
    // const reqq = await req.json()
    // console.log('hex: ',reqq)
    
    // if(reqq.body.document) {
    //     document = reqq.body.document
    // }
    
    // return NextResponse.json({ message: 'Stopped' }, { status: 200 })

    var id = "1";

    let response = null
    
    const addAllOnce = async () => {
        const dataMain = await fetch('https://dummyjson.com/users?limit=10000')
        const data = await dataMain.json()

        // console.log("Adding document:");
        console.log('hex:', data.users[0]);
        const promises = []
        
        if(data.users.length > 0) {
            data.users.forEach(element => {
                const payload = {...element}
                
                const res = client.index({
                    id: JSON.stringify(element.id),
                    index: 'users_poc',
                    body: payload,
                    refresh: true,
                });
                promises.push(res)
            });
        }
        
        const finalRes = await Promise.all(promises)
           
            console.log('hex all: ', finalRes)

    }

    try {
        response = await client.index({
            // id: document.id ?? id,
            id: id,
            index: index_name + 's',
            // index: index_name,
            body: document,
            refresh: true,
        });

        // await addAllOnce()
        return NextResponse.json({ message: 'Add Doc Successful', response }, { status: 200 })

    } catch (e) {
        response = e
        return NextResponse.json({ message: 'Error while adding doc:', response: e }, { status: 500 })

    }


}