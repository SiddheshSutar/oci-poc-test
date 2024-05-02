import { Client } from "@opensearch-project/opensearch"
import { NextResponse } from "next/server";

export async function GET(req, res) {

  
  


  
  // async function search() {
  //   // // Create an index with non-default settings
  //   var index_name = "books";
    
  //   // var settings = {
  //   //   settings: {
  //   //     index: {
  //   //       number_of_shards: 4,
  //   //       number_of_replicas: 3,
  //   //     },
  //   //   },
  //   // };
  
  //   // var response = await client.indices.create({
  //   //   index: index_name,
  //   //   body: settings,
  //   // });
  
  //   // console.log("Creating index:");
  //   // console.log(response.body);
  
  //   // Add a document to the index
  //   var document = {
  //     title: "The Outsider",
  //     author: "Stephen King",
  //     year: "2018",
  //     genre: "Crime fiction",
  //   };
  
  //   var id = "1";
  
  //   var response = await client.index({
  //     id: id,
  //     index: index_name,
  //     body: document,
  //     refresh: true,
  //   });
  
  //   console.log("Adding document:");
  //   console.log(response.body);
  
  //   // Search for the document
  //   var query = {
  //     query: {
  //       match: {
  //         title: {
  //           query: "The Outsider",
  //         },
  //       },
  //     },
  //   };
  
  //   var response = await client.search({
  //     index: index_name,
  //     body: query,
  //   });
  
  //   console.log("Search results:");
  //   console.log(JSON.stringify(response.body.hits, null, "  "));
  
  //   // Update a document
  //   var response = await client.update({
  //     index: index_name,
  //     id: id,
  //     body: {
  //       doc: {
  //         genre: "Detective fiction",
  //         tv_adapted: true
  //       }
  //     },
  //     refresh: true
  //   });
  
  //   // Search for the updated document
  //   var query = {
  //     query: {
  //       match: {
  //         title: {
  //           query: "The Outsider",
  //         },
  //       },
  //     },
  //   };
  
  //   var response = await client.search({
  //     index: index_name,
  //     body: query,
  //   });
  
  //   console.log("Search results:");
  //   console.log(JSON.stringify(response.body.hits, null, "  "));
  
  //   // Delete the document
  //   var response = await client.delete({
  //     index: index_name,
  //     id: id,
  //   });
  
  //   console.log("Deleting document:");
  //   console.log(response.body);
  
  //   // Delete the index
  //   var response = await client.indices.delete({
  //     index: index_name,
  //   });
  
  //   console.log("Deleting index:");
  //   console.log(response.body);
  // }
  
  // search().catch(console.log);

  return NextResponse.json({ message: 'Hello from Next.js!' })

}