import { z } from "zod";

export const schema = z.object({
  name: z
    .string()
    .min(3, "Name must contain atleast 3 character")
    .max(20, "Name must not be bigger than 20 character"),
  url: z.string().url(),
  firstName: z
    .string()
    .min(3, "FIrst Name must contain atleast 3 character")
    .max(20, "FIrst Name must not be bigger than 20 character"),
  lastName: z
    .string()
    .min(3, "Last Name must contain atleast 3 character")
    .max(20, "Last Name must not be bigger than 20 character"),
  email: z.string().email(),
  phone: z.string().refine(
    (phoneNumber) => {
      const bangladeshiPattern = /^(?:\+?88|0088)?01[3-9]\d{8}$/;
      const usPattern = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
      return (
        bangladeshiPattern.test(phoneNumber) || usPattern.test(phoneNumber)
      );
    },
    {
      message: "Invalid Bangladeshi phone number",
    }
  ),
  password: z.string().min(6, "password must contain atleast 6 character"),
});
