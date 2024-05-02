import { client } from "@/app/_utils/helpers";
import { NextResponse } from "next/server";

export async function GET(req, res) {
    // Search for the document
    var query = {
      query: {
        match: {
          firstName: {
            query: "Gayle",
          },
        },
      },
    };
    
    const multiSearhQuery = [
        {},
        { query: { match: { firstName: 'john' } }, },
        {},
        { query: { match: { maidenName: 'john' } }, }
    ]
  
    var response = await client.search({
    //   index: 'books',
      index: 'users_poc',
      body: query,
    });
    
    // const multiSearchResponse = await client.msearch({
    //     index: 'users_poc',
    //     body: multiSearhQuery,
    // });
        
  
    // console.log("Search results:");
    // console.log(JSON.stringify(response.body.hits, null, "  "));
    // console.log('hex: ', users);
    
    return NextResponse.json({ message: 'Hello from search doc!', res: {res: response.body } })
    // return NextResponse.json({ message: 'Hello from search doc!', res: {res: response.body, msearch: multiSearchResponse} })
    
}