import {z} from "zod"

const requireString =  z.string().trim().min(1, "Required")


export const signUpSchema = z.object({
    email: requireString.email("Invalid email address"),
    username: requireString.regex(
        /^[a-zA-Z0-9_-]+$/,
        "Only letters, numbers, - and _ allowed"
    ),
    password: requireString.min(8,"Must be atleast 8 characters")
})

export type SignUpValues = z.infer<typeof signUpSchema>

export const loginSchema = z.object({
    username: requireString,
    password: requireString,
})

export type LoginValue = z.infer<typeof loginSchema>