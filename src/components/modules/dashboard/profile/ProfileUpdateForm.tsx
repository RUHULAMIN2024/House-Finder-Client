"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import { updateProfile, updatePassword } from "@/services/User";
import { useUser } from "@/context/UserContext";
import { toast } from "sonner";
import NMImageUploader from "@/components/ui/core/NMImageUploader";
import ImagePreviewer from "@/components/ui/core/NMImageUploader/ImagePreviewer";

const ProfileUpdateForm = () => {
  const { user } = useUser();
  const [loading, setLoading] = useState(false);
  const [imageFiles, setImageFiles] = useState<File[] | []>([]);
  const [imagePreview, setImagePreview] = useState<string[] | []>([]);

  const form = useForm({
    defaultValues: {
      ...user,
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("data", JSON.stringify(data));
      if (imageFiles) {
        formData.append("profilePhoto", imageFiles[0]);
      }

      const response = await updateProfile(formData);
      if (response.success) {
        toast.success("Profile updated successfully!");
      }
    } catch (error) {
      toast.error("Something went wrong while updating your profile.");
    } finally {
      setLoading(false);
    }
  };

  const onPasswordUpdate: SubmitHandler<FieldValues> = async (data) => {
    if (data.newPassword !== data.confirmPassword) {
      toast.error("New passwords do not match!");
      return;
    }

    try {
      const response = await updatePassword(
        data.currentPassword,
        data.newPassword
      );

      if (response.success) {
        toast.success("Password updated successfully!");
        form.resetField("currentPassword");
        form.resetField("newPassword");
        form.resetField("confirmPassword");
      }
    } catch (error) {
      toast.error("Failed to update password. Please try again.");
    }
  };

  return (
    <div className="border-2 border-gray-300 rounded-xl flex-grow max-w-lg p-5 my-5">
      <h2 className="text-xl font-semibold mb-5">Update Your Profile</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 gap-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input {...field} value={field.value || ""} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="email" {...field} value={field.value || ""} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone</FormLabel>
                  <FormControl>
                    <Input {...field} value={field.value || ""} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="my-5">
            <FormLabel>Profile Photo</FormLabel>
            {imagePreview.length > 0 ? (
              <ImagePreviewer
                setImageFiles={setImageFiles}
                imagePreview={imagePreview}
                setImagePreview={setImagePreview}
                className="mt-8"
              />
            ) : (
              <div className="mt-8">
                <NMImageUploader
                  setImageFiles={setImageFiles}
                  setImagePreview={setImagePreview}
                  label="Upload Photo"
                />
              </div>
            )}
          </div>

          <Button type="submit" className="mt-5 w-full" disabled={loading}>
            {loading ? "Updating..." : "Update Profile"}
          </Button>
        </form>
      </Form>

      {/* Password Update Section */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-5">Change Password</h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onPasswordUpdate)}>
            <FormField
              control={form.control}
              name="currentPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Current Password</FormLabel>
                  <FormControl>
                    <Input type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="newPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>New Password</FormLabel>
                  <FormControl>
                    <Input type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm New Password</FormLabel>
                  <FormControl>
                    <Input type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="mt-5 w-full">
              Update Password
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default ProfileUpdateForm;
