'use client'
import { useEffect, useState } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { CreateEvent, GetLocations, GetRsos, GetUniversities, State } from "./server/actions";
import { FieldErrors, UseFormRegister, useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { start } from "repl";

interface EventInputs {
    event_name: string;
    event_description: string;
    start_time: string;
    end_time: string;
    loc_name: string;
    contact_email: string;
    visibility: string;
    uni_name: string
    rso_name : string
}

interface Location {
    address: string;
    latitude: string;
    longitude: string;
}
  
interface Univerisity {
    uni_name: string;
    uni_description: string;
    student_no: number;
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
          <span>{state?.message || "User created!"}</span>
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

export function CreateEventFormContent({
    register,
    isValid,
    errors,
  }: {
    register: UseFormRegister<EventInputs>;
    isValid: boolean;
    errors: FieldErrors<EventInputs>;
  }) {

    const [locations, setLocations] = useState<Location[]>([]);
    const [universities, setUniversities] = useState<Univerisity[]>([]);
    const [rsos, setRsos] = useState<string[]>([])

    const [selectedVisibility, setSelectedVisibility] = useState('');


    useEffect(() => {
        const fetchLocations = async () => {
            const locList : Location[] = await GetLocations();
            setLocations(locList);
        };

        const fetchUniversities = async () => {
            const uniList : Univerisity[] = await GetUniversities();
            setUniversities(uniList);
        };
        
        const fetchRsos = async () => {
            const rsoList : string[] = await GetRsos();
            setRsos(rsoList);
        };

        fetchUniversities();
        fetchLocations();
        fetchRsos();
    }, []);
    
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const handleCalendarClose = () => console.log(startDate);

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
                {/* Event name field */}
                <div className="form-control">
                    <label className="input input-bordered flex items-center gap-2 focus:input-secondary">

                    <input
                    type="text"
                    placeholder="Event Name"
                    className={`grow`}
                    {...register("event_name", { required: "Event name is required" })}
                    />
                    </label>

                    {errors?.event_name && (
                    <span className="label-text-alt text-error">{errors.event_name.message}</span>
                    )}
                </div>
                {/* End of Event name field */}

                {/* Description Field */}
                <div className="form-control">
                    <label className="input input-bordered flex items-center gap-2 focus:input-secondary">
                    {/* Description svg icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" fill="currentColor" viewBox="0 0 512 512">
                        <path
                            d="M 512 240.06225680933852 Q 511.00389105058366 297.8365758754864 477.136186770428 344.6536964980545 L 477.136186770428 344.6536964980545 L 477.136186770428 344.6536964980545 Q 443.2684824902724 391.47081712062254 385.4941634241245 419.36186770428014 L 385.4941634241245 419.36186770428014 L 385.4941634241245 419.36186770428014 Q 328.715953307393 446.2568093385214 256.99610894941634 447.25291828793775 Q 201.21400778210116 447.25291828793775 153.40077821011673 429.3229571984436 Q 134.47470817120623 443.2684824902724 99.61089494163424 460.2023346303502 Q 61.75875486381323 477.136186770428 17.929961089494164 479.1284046692607 Q 7.968871595330739 479.1284046692607 2.9883268482490273 469.16731517509726 Q 0 459.20622568093387 6.972762645914397 452.23346303501944 L 6.972762645914397 452.23346303501944 L 6.972762645914397 452.23346303501944 L 6.972762645914397 452.23346303501944 L 6.972762645914397 452.23346303501944 L 6.972762645914397 452.23346303501944 L 6.972762645914397 452.23346303501944 L 6.972762645914397 452.23346303501944 L 6.972762645914397 452.23346303501944 L 6.972762645914397 451.2373540856031 L 6.972762645914397 451.2373540856031 Q 6.972762645914397 451.2373540856031 6.972762645914397 451.2373540856031 Q 6.972762645914397 451.2373540856031 7.968871595330739 450.24124513618676 Q 9.961089494163424 448.2490272373541 12.949416342412452 444.26459143968873 Q 19.92217898832685 437.2918287937743 27.891050583657588 423.3463035019455 Q 44.824902723735406 397.44747081712063 49.80544747081712 360.591439688716 Q 2.9883268482490273 308.79377431906613 1.9922178988326849 240.06225680933852 Q 2.9883268482490273 182.28793774319067 36.856031128404666 135.47081712062257 Q 70.72373540856032 88.65369649805447 128.49805447470817 60.762645914396884 Q 185.27626459143968 33.86770428015564 256.99610894941634 32.8715953307393 Q 328.715953307393 33.86770428015564 385.4941634241245 60.762645914396884 Q 443.2684824902724 88.65369649805447 477.136186770428 135.47081712062257 Q 511.00389105058366 182.28793774319067 512 240.06225680933852 L 512 240.06225680933852 Z"
                        />
                        </svg>

                        <input
                        type="text"
                        placeholder="Description"
                        className={`grow`}
                        {...register("event_description")}
                        />
                        </label>

                    {errors?.event_description && (
                    <span className="label-text-alt text-error">{errors.event_description.message}</span>
                    )}
                </div>
                {/* End of Description field */}

                {/* Start time field */}
                <div className="form-control">
                    <label className="input input-bordered flex items-center gap-2 focus:input-secondary">
                    {/* Clock svg icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" fill="currentColor" viewBox="0 0 512 512">
                            <path
                                d="M 256 512 Q 326 511 384 478 L 384 478 L 384 478 Q 442 444 478 384 Q 512 323 512 256 Q 512 189 478 128 Q 442 68 384 34 Q 326 1 256 0 Q 186 1 128 34 Q 70 68 34 128 Q 0 189 0 256 Q 0 323 34 384 Q 70 444 128 478 Q 186 511 256 512 L 256 512 Z M 280 120 L 280 256 L 280 120 L 280 256 Q 280 269 269 276 L 173 340 L 173 340 Q 154 351 140 333 Q 129 314 147 300 L 232 243 L 232 243 L 232 120 L 232 120 Q 234 98 256 96 Q 278 98 280 120 L 280 120 Z"
                            />
                        </svg>
                        <DatePicker
                            showTimeSelect
                            dateFormat="Pp"
                            selected={startDate}
                            className={`grow`}
                            placeholderText="Start Time"
                            onChange={(date : any) => setStartDate(date)}
                            onCalendarClose={handleCalendarClose}                            
                        />
                        <input
                            type="text"
                            placeholder="Start Time"
                            className={`grow`}
                            value={startDate.toLocaleDateString() + " " + startDate.toLocaleTimeString()}
                            {...register("start_time", { required: "Start time is required" })}
                            hidden
                        />
                    </label>

                    {errors?.start_time && (
                    <span className="label-text-alt text-error">{errors.start_time.message}</span>
                    )}
                </div>
                {/* End of Start time field */}

                {/* End time field */}
                <div className="form-control">
                    <label className="input input-bordered flex items-center gap-2 focus:input-secondary">
                    {/* Clock svg icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" fill="currentColor" viewBox="0 0 512 512">
                        <path
                            d="M 256 0 Q 326 1 384 34 L 384 34 L 384 34 Q 442 68 478 128 Q 512 189 512 256 Q 512 323 478 384 Q 442 444 384 478 Q 326 511 256 512 Q 186 511 128 478 Q 70 444 34 384 Q 0 323 0 256 Q 0 189 34 128 Q 70 68 128 34 Q 186 1 256 0 L 256 0 Z M 232 120 L 232 211 L 232 120 L 232 211 L 173 172 L 173 172 Q 154 161 140 179 Q 129 198 147 212 L 243 276 L 243 276 Q 255 283 267 277 Q 279 270 280 256 L 280 120 L 280 120 Q 278 98 256 96 Q 234 98 232 120 L 232 120 Z"
                        />
                    </svg>
                    <DatePicker
                            showTimeSelect
                            dateFormat="Pp"
                            selected={endDate}
                            className={`grow`}
                            placeholderText="Start Time"
                            onChange={(date : any) => setEndDate(date)}
                            onCalendarClose={handleCalendarClose}                            
                        />
                        <input
                            type="text"
                            placeholder="End Time"
                            className={`grow`}
                            value={endDate.toLocaleDateString() + " " + endDate.toLocaleTimeString()}
                            {...register("end_time", { required: "End time is required" })}
                            hidden
                        />
                        
                    </label>
                    {errors?.end_time && (
                    <span className="label-text-alt text-error">{errors.end_time.message}</span>
                    )}
                </div>
                {/* End of End time field */}

                {/* Visibility field */}
                <select className="select select-bordered" {...register("visibility")} defaultValue={"Visiblity"} onChange={(e) => setSelectedVisibility(e.target.value)}>
                    <option disabled>
                        Visiblity
                    </option>
                    <option value="public">Public</option>
                    <option value="private">Private</option>
                    <option value="rso_event">RSO Event</option>
                </select>
                {selectedVisibility === 'rso_event' && (
                    <select className="select select-bordered" {...register("rso_name")} defaultValue={"Select RSO"}>
                        <option disabled>Select RSO</option>

                        {rsos.map((rso, index) => (
                            <option className="text-wrap" key={index} value={rso}>{rso}</option>
                        ))}
                    </select>
                )}


                {/* End of Visibility field */}
                <select className="select select-bordered" {...register("loc_name")} defaultValue={"Location"}>
                    <option disabled>
                        Location
                    </option>
                    {locations.map((loc, index) => (
                        <option className="text-wrap" key={index} value={loc.address}>{loc.address}</option>
                    ))}
                </select>
  
                <select className="select select-bordered" {...register("uni_name")} defaultValue={"Univerisity"}>
                    <option disabled>
                        University
                    </option>
                    {universities.map((uni, index) => (
                        <option className="text-wrap" key={index} value={uni.uni_name}>{uni.uni_name}</option>
                    ))}
                </select>

                <div className="form-control mt-6">

                    <button
                        className="btn btn-primary"
                        type="submit"
                        >
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
                <CreateEventFormContent register={register} isValid={isValid} errors={errors} />
            </form>
            <div className={`transition-opacity duration-200 fixed bottom-0 right-0 m-4 ${alert.visible ? 'opacity-100' : 'opacity-0'}`}>
                {alert.content}
            </div>
      </div>
    )
}