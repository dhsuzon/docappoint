"use client";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";

function AppointBook() {
  return (
    <>
      <Modal>
        <Button
          variant="primary"
          type="button"
          className="h-auto rounded-xl w-full sm:w-auto px-10 py-3.5 bg-blue-900 hover:bg-teal-500 text-white font-bold text-center text-base sm:text-lg transition-colors duration-300 shadow-md block cursor-pointer"
        >
          Book Appointment
        </Button>
        <Modal.Backdrop>
          <Modal.Container placement="auto">
            <Modal.Dialog className="sm:max-w-lg">
              <Modal.CloseTrigger />
              <Modal.Header>
                <Modal.Heading className="text-center text-2xl sm:text-3xl md:text-4xl">
                  Book Appointment Form
                </Modal.Heading>
              </Modal.Header>
              <Modal.Body className="p-6">
                <Surface variant="default">
                  <form className="flex flex-col justify-center h-auto items-center gap-4">
                    <TextField
                      className="w-full"
                      name="useremail"
                      type="email"
                      variant="secondary"
                    >
                      <Label className="text-base sm:text-lg">UserEmail</Label>
                      <Input placeholder="Enter Youre email" />
                    </TextField>
                    <TextField
                      className="w-full"
                      name="doctorname"
                      type="text"
                      variant="secondary"
                    >
                      <Label className="text-base sm:text-lg capitalize">
                        DoctorName
                      </Label>
                      <Input placeholder="Enter  Doctor Name" />
                    </TextField>
                    <TextField
                      className="w-full"
                      name="patientname"
                      type="text"
                      variant="secondary"
                    >
                      <Label className="text-base sm:text-lg capitalize">
                        DoctorName
                      </Label>
                      <Input placeholder="Enter  Patient Name" />
                    </TextField>
                    <TextField
                      className="w-full"
                      name="gender"
                      type="text"
                      variant="secondary"
                    >
                      <Label className="text-base sm:text-lg capitalize">
                        Gender
                      </Label>
                      <Input placeholder="Enter  Patient Name" />
                    </TextField>
                    <TextField
                      className="w-full"
                      name="phone"
                      type="tel"
                      variant="secondary"
                    >
                      <Label className="text-base sm:text-lg capitalize">
                        Phone
                      </Label>
                      <Input placeholder="Enter your phone number" />
                    </TextField>
                    <TextField
                      className="w-full"
                      name="appointmentdate"
                      type="date"
                      variant="secondary"
                    >
                      <Label className="text-base sm:text-lg capitalize">
                        AppointmentDate
                      </Label>
                      <Input placeholder="Enter Slect Date" />
                    </TextField>
                    <TextField
                      className="w-full"
                      name="appointmenttime"
                      type="time"
                      variant="secondary"
                    >
                      <Label className="text-base sm:text-lg capitalize">
                        AppointmentTime
                      </Label>
                      <Input placeholder="Enter your message" />
                    </TextField>
                    <Modal.Footer>
                      <Button
                        slot="close"
                        className="bg-blue-900 rounded-xl h-auto py-4 text-base sm:text-lg"
                      >
                        Booking Appointment
                      </Button>
                    </Modal.Footer>
                  </form>
                </Surface>
              </Modal.Body>
            </Modal.Dialog>
          </Modal.Container>
        </Modal.Backdrop>
      </Modal>
    </>
  );
}

export default AppointBook;
