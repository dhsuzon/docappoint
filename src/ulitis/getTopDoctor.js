import { API_URL } from "@/config";

export const getTopDoctors = async() => {
    const res = await fetch(`${API_URL}/api/doctors/top`, {
        cache: "no-store",
    });

    if (!res.ok) {
        throw new Error("Failed to fetch top doctors from server");
    }

    return res.json();
}