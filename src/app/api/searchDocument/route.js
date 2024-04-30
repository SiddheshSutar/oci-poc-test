import { client } from "@/app/_utils/helpers";
import { NextResponse } from "next/server";

export async function GET(req, res) {
    // Search for the document
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
  
    console.log("Search results:");
    console.log(JSON.stringify(response.body.hits, null, "  "));
    
    return NextResponse.json({ message: 'Hello from search doc!', res: response.body })
    
}