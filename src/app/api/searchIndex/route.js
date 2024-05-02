import { client } from "@/app/_utils/helpers";
import { NextResponse } from "next/server";

export async function GET(req, res) {
    let response = await client.http.head({ path: '/bookss' });
    // print_response('Check If Index Exists');
    console.log('hex: search: ', response)
    
    // const isFound = response.body // gives true or false

    return NextResponse.json({ message: 'Hello from SearchIndex!', response })

}