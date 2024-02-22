"use client";

import React from "react";
import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { schema } from "@/utils/Schema";

const page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: any) => {
    console.log(errors);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-4">
      <input
        type="text"
        {...register("name")}
        className={`border p-2 rounded-md ${
          errors.name?.message && "border-red-500"
        }`}
        placeholder="Name"
      />
      {errors.name && (
        <span className="text-red-500">{errors.name.message?.toString()}</span>
      )}

      <input
        type="text"
        {...register("firstName")}
        className={`border p-2 rounded-md ${
          errors.firstName?.message && "border-red-500"
        }`}
        placeholder="First Name"
      />
      {errors.firstName && (
        <span className="text-red-500">
          {errors.firstName.message?.toString()}
        </span>
      )}

      <input
        type="text"
        {...register("lastName")}
        className={`border p-2 rounded-md ${
          errors.lastName?.message && "border-red-500"
        }`}
        placeholder="Last Name"
      />
      {errors.lastName && (
        <span className="text-red-500">
          {errors.lastName.message?.toString()}
        </span>
      )}

      <input
        type="text"
        {...register("url")}
        className={`border p-2 rounded-md ${
          errors.url?.message && "border-red-500"
        }`}
        placeholder="URL"
      />
      {errors.url && (
        <span className="text-red-500">{errors.url.message?.toString()}</span>
      )}

      <input
        type="text"
        {...register("email")}
        className={`border p-2 rounded-md ${
          errors.email?.message && "border-red-500"
        }`}
        placeholder="Email"
      />
      {errors.email && (
        <span className="text-red-500">{errors.email.message?.toString()}</span>
      )}

      <input
        type="text"
        {...register("phone")}
        className={`border p-2 rounded-md ${
          errors.phone?.message && "border-red-500"
        }`}
        placeholder="Phone"
      />
      {errors.phone && (
        <span className="text-red-500">{errors.phone.message?.toString()}</span>
      )}

      <input
        type="password"
        {...register("password")}
        className={`border p-2 rounded-md ${
          errors.password?.message && "border-red-500"
        }`}
        placeholder="Password"
      />
      {errors.password && (
        <span className="text-red-500">
          {errors.password.message?.toString()}
        </span>
      )}

      <button
        type="submit"
        className="bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors duration-300"
      >
        Submit
      </button>
    </form>
  );
};

export default page;
