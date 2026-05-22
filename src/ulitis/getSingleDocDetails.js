import { API_URL } from "@/config";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export const getSingleDocDetails = async(docId) => {
    const { token } = await auth.api.getToken({
        headers: await headers()
    });

    const res = await fetch(`${API_URL}/api/doctors/${docId}`, {
        headers: {
            authorization: `Bearer ${token}`
        }
    })
    return res.json();


}