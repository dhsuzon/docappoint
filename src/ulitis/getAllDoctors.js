import { API_URL } from "@/config";

export const getAllDoctors = async() => {
    const res = await fetch(`${API_URL}/api/doctors/all`, {
        cache: "no-store",
    });

    if (!res.ok) {
        throw new Error("Failed to fetch All doctors from server");
    }

    return res.json();
}