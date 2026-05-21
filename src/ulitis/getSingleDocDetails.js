import { API_URL } from "@/config";

export const getSingleDocDetails = async(docId) => {
    const res = await fetch(`${API_URL}/api/doctors/${docId}`)

    if (!res.ok) {
        throw new Error("Failed to fetch  doctors from server");
    }

    return res.json();


}