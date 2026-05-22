"use client";

import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { API_URL } from "@/config";
import { authClient } from "@/lib/auth-client";

const MyBookings = ({ userEmail }) => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_URL}/api/user/appointment?email=${userEmail}`)
      .then((res) => res.json())
      .then((data) => {
        setBookings(data);
        setLoading(false);
      });
  }, [userEmail]);

  const handleDelete = async (id) => {
    try {
      const { data: tokenData } = await authClient.token();

      const res = await fetch(`${API_URL}/api/user/appointment/${id}`, {
        method: "DELETE",
        headers: {
          authorization: `Bearer ${tokenData?.token}`,
        },
      });
      const data = await res.json();
      if (data.deletedCount || res.ok) {
        setBookings((prev) => prev.filter((b) => b._id !== id));
        toast.success("Appointment deleted successfully!");
      }
    } catch (error) {
      toast.error("Failed to delete appointment");
      console.error(error);
    }
  };
  const handleUpdate = async (event, id) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const updatedInfo = Object.fromEntries(formData.entries());

    try {
      const { data: tokenData } = await authClient.token();

      const res = await fetch(`${API_URL}/api/user/appointment/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${tokenData?.token}`,
        },
        body: JSON.stringify(updatedInfo),
      });
      const data = await res.json();

      if (data.modifiedCount || res.ok) {
        setBookings((prev) =>
          prev.map((b) =>
            b._id === id
              ? { ...b, AppInsInfo: { ...b.AppInsInfo, ...updatedInfo } }
              : b,
          ),
        );
        toast.success("Appointment updated successfully!");
      }
    } catch (error) {
      toast.error("Failed to update appointment");
      console.error(error);
    }
  };

  if (loading) {
    return (
      <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-slate-100 flex justify-center items-center min-h-48">
        <div className="w-10 h-10 border-4 border-teal-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-slate-100">
      <h2 className="text-xl sm:text-2xl font-bold text-blue-900 mb-6 pb-4 border-b border-slate-100">
        My Bookings
      </h2>
      {bookings.length === 0 ? (
        <p className="text-base sm:text-lg text-slate-500 font-medium text-center py-8">
          No appointments booked yet.
        </p>
      ) : (
        <div className="flex flex-col gap-4">
          {bookings.map((booking) => (
            <div
              key={booking._id}
              className="bg-slate-50 border border-slate-100 rounded-2xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
            >
              <div className="flex flex-col gap-1">
                <span className="text-base sm:text-lg font-bold text-blue-900">
                  {booking.AppInsInfo.doctorname}
                </span>
                <span className="text-sm sm:text-base text-slate-500 font-medium">
                  Patient: {booking.AppInsInfo.patientname}
                </span>
                <span className="text-sm sm:text-base text-teal-600 font-semibold">
                  {booking.AppInsInfo.appointmentdate} |{" "}
                  {booking.AppInsInfo.appointmenttime}
                </span>
              </div>
              <div className="flex gap-3 shrink-0">
                <Modal>
                  <Button className="bg-blue-900 hover:bg-teal-500 text-white font-bold px-5 py-2 rounded-xl transition-colors duration-300 cursor-pointer text-sm sm:text-base h-auto">
                    Update
                  </Button>
                  <Modal.Backdrop>
                    <Modal.Container placement="auto">
                      <Modal.Dialog className="sm:max-w-lg">
                        <Modal.CloseTrigger />
                        <Modal.Header>
                          <Modal.Heading className="text-center text-2xl sm:text-3xl">
                            Update Appointment
                          </Modal.Heading>
                        </Modal.Header>
                        <Modal.Body className="p-6">
                          <Surface variant="default">
                            <form
                              className="flex flex-col gap-4"
                              onSubmit={(e) => handleUpdate(e, booking._id)}
                            >
                              <TextField
                                className="w-full"
                                name="useremail"
                                type="email"
                                variant="secondary"
                                defaultValue={booking.AppInsInfo.useremail}
                                isReadOnly
                              >
                                <Label className="text-base sm:text-lg">
                                  UserEmail
                                </Label>
                                <Input />
                              </TextField>
                              <TextField
                                className="w-full"
                                name="doctorname"
                                type="text"
                                variant="secondary"
                                defaultValue={booking.AppInsInfo.doctorname}
                                isReadOnly
                              >
                                <Label className="text-base sm:text-lg capitalize">
                                  DoctorName
                                </Label>
                                <Input />
                              </TextField>
                              <TextField
                                isRequired
                                className="w-full"
                                name="patientname"
                                type="text"
                                variant="secondary"
                                defaultValue={booking.AppInsInfo.patientname}
                              >
                                <Label className="text-base sm:text-lg capitalize">
                                  PatientName
                                </Label>
                                <Input placeholder="Enter patient name" />
                              </TextField>
                              <TextField
                                isRequired
                                className="w-full"
                                name="gender"
                                type="text"
                                variant="secondary"
                                defaultValue={booking.AppInsInfo.gender}
                              >
                                <Label className="text-base sm:text-lg capitalize">
                                  Gender
                                </Label>
                                <Input placeholder="Enter gender" />
                              </TextField>
                              <TextField
                                isRequired
                                className="w-full"
                                name="phone"
                                type="tel"
                                variant="secondary"
                                defaultValue={booking.AppInsInfo.phone}
                              >
                                <Label className="text-base sm:text-lg capitalize">
                                  Phone
                                </Label>
                                <Input placeholder="Enter phone number" />
                              </TextField>
                              <TextField
                                isRequired
                                className="w-full"
                                name="appointmentdate"
                                type="date"
                                variant="secondary"
                                defaultValue={
                                  booking.AppInsInfo.appointmentdate
                                }
                              >
                                <Label className="text-base sm:text-lg capitalize">
                                  AppointmentDate
                                </Label>
                                <Input />
                              </TextField>
                              <TextField
                                isRequired
                                className="w-full"
                                name="appointmenttime"
                                type="time"
                                variant="secondary"
                                defaultValue={
                                  booking.AppInsInfo.appointmenttime
                                }
                              >
                                <Label className="text-base sm:text-lg capitalize">
                                  AppointmentTime
                                </Label>
                                <Input />
                              </TextField>
                              <Modal.Footer>
                                <Button
                                  slot="close"
                                  type="submit"
                                  className="bg-blue-900 rounded-xl h-auto py-4 text-base sm:text-lg"
                                >
                                  Save Changes
                                </Button>
                              </Modal.Footer>
                            </form>
                          </Surface>
                        </Modal.Body>
                      </Modal.Dialog>
                    </Modal.Container>
                  </Modal.Backdrop>
                </Modal>
                <button
                  onClick={() => handleDelete(booking._id)}
                  className="border border-red-200 text-red-500 hover:bg-red-50 font-bold px-5 py-2 rounded-xl transition-colors duration-300 cursor-pointer text-sm sm:text-base"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyBookings;
 