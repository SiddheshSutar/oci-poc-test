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

    var response = await client.index({
        id: id,
        index: index_name,
        body: document,
        refresh: true,
    });

    console.log("Adding document:");
    console.log(response.body);
    
    return NextResponse.json({ message: 'Hello from addDouc!' })
    
}