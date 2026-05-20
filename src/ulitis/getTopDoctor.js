export const getTopDoctors = async() => {
    const res = await fetch("http://localhost:9000/api/doctors/top", {
        cache: "no-store",
    });

    if (!res.ok) {
        throw new Error("Failed to fetch top doctors from server");
    }

    return res.json();
}