export const getSingleDocDetails = async(docId) => {
    const res = await fetch(`http://localhost:9000/api/doctors/${docId}`)

    if (!res.ok) {
        throw new Error("Failed to fetch  doctors Details from server");
    }

    return res.json();


}