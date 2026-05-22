import { API_URL } from "@/config";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export const getSingleDocDetails = async(docId) => {
    try {
        const sessionHeaders = await headers();
        const tokenObj = await auth.api.getToken({
            headers: sessionHeaders,
        });


        const token = tokenObj ? .token;

        const res = await fetch(`${API_URL}/api/doctors/${docId}`, {
            headers: {

                ...(token && { authorization: `Bearer ${token}` }),
            },
            cache: "no-store",
        });
        if (!res.ok) {
            console.error(`Backend returned status ${res.status} for docId: ${docId}`);
            return null;
        }

        return await res.json();
    } catch (error) {
        console.error("Error in getSingleDocDetails:", error);
        return null;
    }
};