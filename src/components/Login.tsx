import React, {useState} from "react";
import {z} from "zod";
import {Form, useForm} from "../utilities/forms";
import {Input} from "../components/formComponents/input";

const signUpFormSchema = z.object({
  firstName: z.string().min(3, "First Name must be atleast 3 characters long!"),
  username: z
    .string()
    .min(3, "Username must be atleast 3 characters long!")
    .max(10, "Consider using shorter username."),
  email: z.string().email("Please enter a valid email address."),
  password: z
    .string()
    .min(6, "Please choose a longer password")
    .max(256, "Consider using a short password"),
});

export default function Login() {
  const form = useForm({
    schema: signUpFormSchema,
  });

  const submitForm = (values: z.infer<typeof signUpFormSchema>) => {
    console.log({values});
  };

  return (
    <Form form={form} onSubmit={values => submitForm(values)}>
      <Input label="First Name" type="text" placeholder="John" {...form.register("firstName")} />
      <Input label="Username" type="text" placeholder="inder279" {...form.register("username")} />
      <Input label="Email" type="email" placeholder="you@example.com" {...form.register("email")} />
      <Input
        label="Password"
        type="password"
        placeholder="Your password (min 5)"
        {...form.register("password")}
      />
      <button type="submit">Submit</button>
    </Form>
  );
}
