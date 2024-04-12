'use client'
import { useEffect, useState } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { FieldErrors, UseFormRegister, useForm } from "react-hook-form";
import { CreateLocation, State } from "./server/actions";
import PlacesAutocomplete from "./PlacesAutocomplete";

interface LocationInputs {
    address: string;
    coordinates: Coordinates;
}

interface Coordinates {
    latitude: string;
    longitude: string;
}

export function CreateLocationFormContent({
    register,
    isValid,
    errors,
  }: {
    register: UseFormRegister<LocationInputs>;
    isValid: boolean;
    errors: FieldErrors<LocationInputs>;
  }) {
    
    const [locationAttributes, setLocationAttributes] = useState<LocationInputs>()

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

                    <PlacesAutocomplete setLocationAttributes={setLocationAttributes} />

                  </label>
  
                  {errors.address && (
                    <span className="label-text-alt text-error">{errors.address.message}</span>
                  )}
                </div>
  
                {/* Submit button */}
                <div className="form-control mt-6">
                  <button type="submit" className="btn btn-primary">
                    Create
                  </button>
                </div>
                    {/* Hidden inputs that will be send */}
                    <input type="hidden" {...register("address")}  value={locationAttributes?.address || ''}/>
                    <input type="hidden" {...register("coordinates.latitude")} value={locationAttributes?.coordinates.latitude || ''}/>
                    <input type="hidden" {...register("coordinates.longitude")} value={locationAttributes?.coordinates.longitude || ''}/>
            </div>
          </div>
        </>
      );
}
  

function alertCreation(state: State) {
  let alertComponent = null;

  if (state?.status === "success") {
    alertComponent = (
      <div role="alert" className="alert alert-success">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="stroke-current shrink-0 h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span>{state?.message || "Location created!"}</span>
      </div>
    );
  } else if (state?.status === "warning") {
    alertComponent = (
      <div role="alert" className="alert alert-warning">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="stroke-current shrink-0 h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
        <span>
          {state?.message || "Warning: There was an unexpected error!"}
        </span>
      </div>
    );
  } else if (state?.status === "error") {
    alertComponent = (
      <div role="alert" className="alert alert-error">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="stroke-current shrink-0 h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span>{state?.message || "Error! Task failed."}</span>
      </div>
    );
  }

  return alertComponent;
}

export default function CreateLocationForm() {
    const {
        register,
        formState: { isValid, errors },
      } = useForm<LocationInputs>();

    const [state, formAction] = useFormState<State, FormData>(CreateLocation, null);
    const [alert, setAlert] = useState<{ visible: boolean, content: React.JSX.Element | null }>({ visible: false, content: null });

    useEffect(() => {
      if (state) {
        setAlert({ visible: true, content: alertCreation(state) });
  
        const fadeOutTimer = setTimeout(() => {
          setAlert((prevState) => ({ ...prevState, visible: false }));
        }, 5000);
  
        const removeTimer = setTimeout(() => {
          setAlert({ visible: false, content: null });
        }, 6000);
  
        return () => {
          clearTimeout(fadeOutTimer);
          clearTimeout(removeTimer);
        };
      }
    }, [state]);

    
    return (
      <div>
        <form action={formAction} >
          <CreateLocationFormContent register={register} isValid={isValid} errors={errors} />
        </form>
        <div className={`transition-opacity duration-200 fixed bottom-0 right-0 m-4 ${alert.visible ? 'opacity-100' : 'opacity-0'}`}>
            {alert.content}
        </div>
      </div>
    )
}