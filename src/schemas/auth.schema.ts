// import { RegisterSchema } from '@/schemas/auth.schema';
import { Phone } from "lucide-react";
import z, { email } from "zod";


export const RegisterSchema = z.object({
    name : z.string()
    .nonempty("Name is required")
    .min(3,"Name must be at least 3 characters long")
    .max(15,"Name must be at most 15 characters long"),
    
    email : z.string()
    .nonempty("Email is required")
    .email("Invalid email address"),

    password : z.string()
    .nonempty("Password is required")
    .min(8,"Password must be at least 8 characters long")
    .max(15,"Password must be at most 15 characters long"),

    rePassword : z.string()
    .nonempty("RePassword confirmation is required")
    .min(8,"Password must be at least 8 characters long")
    .max(15,"Password must be at most 15 characters long"),

    phone : z.string()
    .nonempty("Phone number is required")
    .regex(/^01[0125][0-9]{8}$/,"Invalid phone number")
}).refine((object)=>object.password===object.rePassword,{
    // message : "Passwords do not match",
    path : ["rePassword"],
    error : "password does not match"


})


export type RegisterSchemaType = z.infer<typeof RegisterSchema>


//////////////////////////////////////////////////////////////////////////////

//------------------------- login schema --------------------//

export const LoginSchema = z.object({

    
    email : z.string()
    .nonempty("Email is required")
    .email("Invalid email address"),

    password : z.string()
    .nonempty("Password is required")
    .min(8,"Password must be at least 8 characters long")
    .max(15,"Password must be at most 15 characters long"),

})


export type LoginSchemaType = z.infer<typeof LoginSchema>