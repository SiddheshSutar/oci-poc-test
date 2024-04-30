import { client } from "@/app/_utils/helpers";
import { NextResponse } from "next/server";

export async function GET(req, res) {
    // Create an index with non-default settings
    var index_name = "books";
    
    var settings = {
      settings: {
        index: {
          number_of_shards: 4,
          number_of_replicas: 3,
        },
      },
    };
  
    var response = await client.indices.create({
      index: index_name,
      body: settings,
    });
  
    console.log("Creating index:");
    console.log(response.body);
    
    return NextResponse.json({ message: 'Hello from SearchIndex!' })
    
}