import {NextResponse} from "next/server";
import axios from "axios";

export async function POST(req, res) {

    const JsonBody = await req.json();
    try {
        const rawResponse = await axios.post(process.env.BASE_URL+"api/CreateContact",JsonBody);
        return  NextResponse.json({status: "Success"});
    }catch (e) {
        return NextResponse.json(e);
    }

}