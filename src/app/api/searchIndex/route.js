import { client } from "@/app/_utils/helpers";
import { NextResponse } from "next/server";

export async function GET(req, res) {
    var query = {
        query: {
            match: {
                title: {
                    query: "The Outsider",
                },
            },
        },
    };

    var response = await client.search({
        index: 'books',
        body: query,
    });
    console.log('hex: search: ', response)

    return NextResponse.json({ message: 'Hello from SearchIndex!' })

}