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
            id: id,
            index: index_name + 's',
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