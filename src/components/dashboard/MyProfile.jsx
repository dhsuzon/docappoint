"use client";

import { useState } from "react";
import Image from "next/image";
import { toast } from "react-toastify";
import { authClient } from "@/lib/auth-client";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";

const MyProfile = ({ user }) => {
  const [currentUser, setCurrentUser] = useState(user);

  const handleUpdateProfile = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get("name");
    const image = formData.get("image");

    const { data, error } = await authClient.updateUser({ name, image });
    if (data) {
      setCurrentUser((prev) => ({ ...prev, name, image }));
      toast.success("Profile updated successfully!");
    }
    if (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-slate-100">
      <h2 className="text-xl sm:text-2xl font-bold text-blue-900 mb-6 pb-4 border-b border-slate-100">
        My Profile
      </h2>
      <div className="flex flex-col items-center gap-4">
        <div className="w-24 h-24 relative rounded-full overflow-hidden border-4 border-teal-100 shadow-sm">
          {currentUser.image ? (
            <Image
              src={currentUser.image}
              alt={currentUser.name}
              fill
              className="object-cover"
            />
          ) : (
            <div className="w-full h-full bg-teal-100 flex items-center justify-center text-3xl font-bold text-teal-700">
              {currentUser.name?.charAt(0).toUpperCase()}
            </div>
          )}
        </div>
        <div className="text-center">
          <h3 className="text-xl font-bold text-blue-900">{currentUser.name}</h3>
          <p className="text-base text-slate-500 font-medium mt-1">
            {currentUser.email}
          </p>
        </div>
        <Modal>
          <Button className="bg-blue-900 hover:bg-teal-500 text-white font-bold px-8 py-3 rounded-xl transition-colors duration-300 cursor-pointer text-base mt-2 h-auto w-full">
            Update Profile
          </Button>
          <Modal.Backdrop>
            <Modal.Container placement="auto">
              <Modal.Dialog className="sm:max-w-lg">
                <Modal.CloseTrigger />
                <Modal.Header>
                  <Modal.Heading className="text-center text-2xl sm:text-3xl">
                    Update Profile
                  </Modal.Heading>
                </Modal.Header>
                <Modal.Body className="p-6">
                  <Surface variant="default">
                    <form
                      className="flex flex-col justify-center h-auto items-center gap-4"
                      onSubmit={handleUpdateProfile}
                    >
                      <TextField
                        isRequired
                        className="w-full"
                        name="name"
                        type="text"
                        variant="secondary"
                        defaultValue={currentUser.name}
                      >
                        <Label className="text-base sm:text-lg capitalize">
                          Name
                        </Label>
                        <Input placeholder="Enter your name" />
                      </TextField>
                      <TextField
                        className="w-full"
                        name="image"
                        type="url"
                        variant="secondary"
                        defaultValue={currentUser.image || ""}
                      >
                        <Label className="text-base sm:text-lg capitalize">
                          Photo URL
                        </Label>
                        <Input placeholder="Enter photo URL" />
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
      </div>
    </div>
  );
};

export default MyProfile;
