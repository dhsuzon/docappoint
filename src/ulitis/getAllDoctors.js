export const getAllDoctors = async() => {
    const res = await fetch("http://localhost:9000/api/doctors/all", {
        cache: "no-store",
    });

    if (!res.ok) {
        throw new Error("Failed to fetch All doctors from server");
    }

    return res.json();
}