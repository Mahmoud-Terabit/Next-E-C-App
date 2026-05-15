"use client"

import { Button } from '@/components/ui/button';
import { Field, FieldDescription, FieldError, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { RegisterSchema, RegisterSchemaType } from '@/schemas/auth.schema';
// import { RegisterSchema, RegisterSchemaType } from '@/schemas/auth.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { toast } from 'sonner';

export default function Register() {

  const router = useRouter()
  const form = useForm({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      phone: "",
    }
  })

  async function handelRegister(data: RegisterSchemaType) {
    console.log(data);

    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/signup`,{
      method:"POST",
      body:JSON.stringify(data),
      headers:{
        "content-type":"application/json"
      }
    })

    const finalData = await response.json()
    console.log(finalData);

    toast.success(finalData.message,{position:"top-center"})
    form.reset()
    router.push("/login")

  }
  return (
    <>
      <main className='flex justify-center my-15'>
        <div className='flex flex-wrap border-2 border-green-500 rounded-2xl p-6'>
          <h2>Create Your Account</h2>
          <form
            onSubmit={form.handleSubmit(handelRegister)} 
            className='w-full flex flex-col gap-6 '>
            <Controller
              name="name"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={field.name}>Name :</FieldLabel>
                  <Input
                    type='text'
                    {...field}
                    id={field.name}
                    aria-invalid={fieldState.invalid}
                    placeholder="Enter your name"
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
            <Controller
              name="rePassword"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={field.name}>RePassword :</FieldLabel>
                  <Input
                    type='password'
                    {...field}
                    id={field.name}
                    aria-invalid={fieldState.invalid}
                    placeholder="Enter your RePassword"
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
              name="phone"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={field.name}>Phone :</FieldLabel>
                  <Input
                    type='tel'
                    {...field}
                    id={field.name}
                    aria-invalid={fieldState.invalid}
                    placeholder="Enter your phone"
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
              <p>Create My Account</p>
            </Button>
            <h4>Already have an account? <Link href={"/login"} className='text-[#16A34A] hover:underline'>Log In</Link></h4>

          </form>
        </div>
      </main>
    </>
  )
}
