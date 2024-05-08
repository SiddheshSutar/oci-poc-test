import { client } from "@/app/_utils/helpers";
import { NextResponse } from "next/server";

export async function GET(req, res) {
    // Create an index with non-default settings
    var index_name = "test_sites";

    var settings = {
        settings: {
            index: {
                number_of_shards: 4, // No of horiz sub-sections a database would have
                number_of_replicas: 3, // No of copies of each shard
            },
        },
    };

    let response = null

    try {
        response = await client.indices.create({
            index: index_name,
            body: settings,
        });

        // console.log("Creating index:");
        // console.log(response);
        
        return NextResponse.json({ message: 'Create Index Successful', response }, { status: 200 })

    } catch (e) {
        if (e?.meta?.body?.error) {
            response = e.meta.body.error
        } else {
            response = e
        }
        return NextResponse.json({ message: 'Error while creating index:', response }, { status: 500 })

    }

}