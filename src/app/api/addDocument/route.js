import { client } from "@/app/_utils/helpers";
import { NextResponse } from "next/server";

export async function GET(req, res) {
    var index_name = "books";

    // Add a document to the index
    var document = {
        title: "The Outsider",
        author: "Stephen King",
        year: "2018",
        genre: "Crime fiction",
    };

    var id = "1";

    let response = null

    try {
        response = await client.index({
            id: id,
            index: index_name + 's',
            body: document,
            refresh: true,
        });

        // const data = await fetch('https://dummyjson.com/users?limit=10000')
        //     .then(res => res.json())

        // // console.log("Adding document:");
        // // console.log('hex:', data.users.length);
        // const promises = []
        
        // if(data.users.length > 0) {
        //     data.users.forEach(element => {
        //         const payload = {...element}
                
        //         const res = client.index({
        //             id: JSON.stringify(element.id),
        //             index: index_name + 's',
        //             body: payload,
        //             refresh: true,
        //         });
        //         promises.push(res)
        //     });
        // }
        
        // const finalRes = await Promise.all(promises)
            // .then(res => {
            // })
            // console.log('hex all: ', finalRes)

        return NextResponse.json({ message: 'Add Doc Successful', response }, { status: 200 })

    } catch (e) {
        response = e
        return NextResponse.json({ message: 'Error while adding doc:', response: e }, { status: 500 })

    }


}