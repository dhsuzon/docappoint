import { toast } from "react-toastify";
import { API_URL } from "@/config";

export const BookAppoint = async(event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const BookAppoinInfo = Object.fromEntries(formData.entries());


    const res = await fetch(`${API_URL}/api/user/appointment/create`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(BookAppoinInfo)
    });


    const res_data = await res.json();
    if (res_data.acknowledged) {
        toast.success("Appointment booked successfully!");
    }


}