'use client'
import { useState } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { FieldErrors, UseFormRegister, useForm } from "react-hook-form";
import { CreateEvent, State } from "./server/actions";
import PlacesAutocomplete from "./PlacesAutocomplete";

interface EventInputs {
    address: string;
    coordinates: Coordinates;
}
interface Coordinates {
    latitude: string;
    longitude: string;
}
export function CreateEventFormContent({
    register,
    isValid,
    errors,
  }: {
    register: UseFormRegister<EventInputs>;
    isValid: boolean;
    errors: FieldErrors<EventInputs>;
  }) {


    const { pending } = useFormStatus();
      return (
        <>
          <span className={`loading loading-spinner text-success w-16 fixed top-2/4 left-2/4 -translate-x-1/2 
                            ${pending ? "opacity-100" : "opacity-0 backdrop-blur-sm transition-opacity"}`}></span>
  
          <div className={`md:p-8 lg:card-normal p-4
                            card bg-base-100 border-2 border-primary
                            ${pending ? "opacity-0" : "opacity-100 backdrop-blur-sm transition-opacity"}
                            `}>
            <div className="card-body">
                {/* Address field */}
                <div className="form-control">
                  <label className="input input-bordered flex items-center gap-2 focus:input-secondary">
                    {/* Address svg icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>

                    <PlacesAutocomplete />

                    {/* <input
                    type="text"
                    placeholder="Address"
                    className={`grow`}
                    {...register("address", { required: "Username is required" })}
                    /> */}
                  </label>
  
                  {errors.address && (
                    <span className="label-text-alt text-error">{errors.address.message}</span>
                  )}
                </div>
  
                <div className="form-control">
                    <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text-alt">
                        University <span className="text-error">*</span>
                        </span>
                    </div>
                    <select className="select select-bordered" {...register("coordinates")} defaultValue={"Pick one"}>
                        <option disabled>
                            Pick one
                        </option>
                        {/* {universities.map((uni, index) => (
                        <option key={index} value={uni.uni_name}>{uni.uni_name}</option>
                        ))} */}
                    </select>

                    </label>
                </div>
  
  
                {/* Submit button */}
                <div className="form-control mt-6">
                  <button type="submit" className="btn btn-primary">
                    Create
                  </button>
                </div>
  
            </div>
          </div>
        </>
      );
  }
  
export default function CreateEventForm() {
    const {
        register,
        formState: { isValid, errors },
      } = useForm<EventInputs>();

    const [state, formAction] = useFormState<State, FormData>(CreateEvent, null);
    const [alert, setAlert] = useState<{ visible: boolean, content: React.JSX.Element | null }>({ visible: false, content: null });

    return (
        <div>
        <form action={formAction} >
          <CreateEventFormContent register={register} isValid={isValid} errors={errors} />
        </form>
        <div className={`transition-opacity duration-200 fixed bottom-0 right-0 m-4 ${alert.visible ? 'opacity-100' : 'opacity-0'}`}>
            {alert.content}
        </div>
      </div>
    )
}