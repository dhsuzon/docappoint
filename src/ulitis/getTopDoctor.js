import { API_URL } from "@/config";

export const getTopDoctors = async() => {
    const res = await fetch(`${API_URL}/api/doctors/top`, {
        cache: "no-store",
    });


    return res.json();
}