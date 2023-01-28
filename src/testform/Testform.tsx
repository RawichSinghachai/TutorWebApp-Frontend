import React from 'react'
import { useForm , SubmitHandler } from "react-hook-form";

type Props = {}
type Inputs = {
    name:string,
    password:string,
    age:number
    example: string,
    exampleRequired: string,
  };

export default function Testform({}: Props) {
const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
const onSubmit: SubmitHandler<Inputs> = data => console.log(data);
console.log(errors)
  return (
    <>
        <form autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder='name' {...register("name",{ required: true, maxLength: 3 })} />
            {errors.name && "First name is required"}
            <br />
            <input type="password" placeholder='password' {...register("password")} />
            {errors.password && "First name is required"}
            <br />
            <input type="text" placeholder='age' {...register("age")} />
            {errors.age && "First name is required"}
            <br />
            <button>Submit</button>
        </form>
    </>
  )
}