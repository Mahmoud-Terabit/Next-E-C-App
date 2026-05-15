"use client"

import React from 'react'
import { Button } from '@/components/ui/button';
import { Field, FieldDescription, FieldError, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { LoginSchema, LoginSchemaType, } from '@/schemas/auth.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { redirect, useRouter } from 'next/navigation';
import { Controller, useForm } from 'react-hook-form'
import { toast } from 'sonner';
import { signIn } from "next-auth/react";

export default function Login() {
  
  const router = useRouter()


  const form = useForm({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    }
  })
  console.log(form);


  async function handleLogin(data: LoginSchemaType) {
    console.log(data);
 
    const response = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
      // callbackUrl : "/"
    })
    console.log(response);
    if (response?.ok) {

      toast.success("Logged in successfully", { position: "top-center" })
      form.reset()
      router.push("/")

    }
    else {
      toast.error(response?.error || "Email or password is incorrect", { position: "top-center" })
    }




  //   try {
  //     const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/signin`, {
  //       method: "POST",
  //       body: JSON.stringify(data),
  //       headers: {
  //         "content-type": "application/json"
  //       }
  //     })

  //     const finalData = await response.json()
  //     console.log("LOGIN DATA",finalData);
      

  //     if (response.ok) {
  //       // localStorage.setItem("userToken", finalData.token);
  //       toast.success(finalData.message || "Logged in successfully", { position: "top-center" })
  //       form.reset()
  //       router.push("/")
  //     } else {
  //       toast.error(finalData.message, { position: "top-center" })
  //     }
  //   } catch (error) {
  //     toast.error("Email or password is incorrect", { position: "top-center" });
  //   }

 }

  return (
    <>
      <main className='flex justify-center my-15'>
        <div className='flex flex-wrap border-2 border-green-500 rounded-2xl p-6'>
          <h2>Welcome Back!</h2>
          <form onSubmit={form.handleSubmit(handleLogin)} className='w-full flex flex-col gap-6 '>
            <Controller
              name="email"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={field.name}>Email :</FieldLabel>
                  <Input
                    type='email'
                    {...field}
                    id={field.name}
                    aria-invalid={fieldState.invalid}
                    placeholder="Enter your email"
                    autoComplete="off"
                  />
                  {/* <FieldDescription>
                    Provide a concise title for your bug report.
                  </FieldDescription> */}
                  {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                </Field>
              )}
            />
            <Controller
              name="password"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={field.name}>Password :</FieldLabel>
                  <Input
                    type='password'
                    {...field}
                    id={field.name}
                    aria-invalid={fieldState.invalid}
                    placeholder="Enter your password"
                    autoComplete="off"
                  />
                  {/* <FieldDescription>
                    Provide a concise title for your bug report.
                  </FieldDescription> */}
                  {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                </Field>
              )}
            />
            <Button className='bg-[#16A34A] hover:bg-[#15803D] cursor-pointer' type='submit'>
              <p>Log In</p>
            </Button>
            <h4>Already have an account? <Link href={"/register"} className='text-[#16A34A] hover:underline'>register</Link></h4>

          </form>
        </div>
      </main>
    </>
  )
}

