"use client";
import React, { useEffect, useState } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { FieldErrors, useForm, UseFormRegister } from "react-hook-form";
import CloseBtn from "./CloseButton";
import { register } from "module";
import { ApplyRSO } from "./server/actions";

interface RSOFormInput {
  rso_name: string;
  description: string;
  s1_name: string;
  s2_name: string;
  s3_name: string;
  s4_name: string;
  promotion_value: 1 | 2 | 3 | 4; // this one is for getting which student was promoted
  am_name: string;
}
export function RSOFormContent({
  register,
  isValid,
  errors,
}: {
  register: UseFormRegister<RSOFormInput>;
  isValid: boolean;
  errors: FieldErrors<RSOFormInput>;
}) {
  const styleRName = `input input-bordered w-full ${
    errors.rso_name ? "input-error" : ""
  }`;
  const styleAdmin = `input input-bordered flex items-center gap-2 ${
    errors.am_name ? "input-error" : ""
  }`;

  const [students, setStudents] = useState<String[]>();

  useEffect(() => {
    const fetchStudents = async () => {
      const stdList: String[] = await GetStudents();
      setStudents(stdList);
    };

    fetchStudents();
  }, []);

  const { pending } = useFormStatus();
  return (
    <div className="">
      <span
        className={`loading loading-spinner text-success w-16 fixed top-2/4 left-2/4 -translate-x-1/2
                            ${
                              pending
                                ? "opacity-100"
                                : "opacity-0 backdrop-blur-sm transition-opacity"
                            }`}
      />

      <div
        className={`md:p-8 lg:card-normal p-4 card
                        card-compact bg-base-100 border-2 border-primary
                        ${
                          pending
                            ? "opacity-0"
                            : "opacity-100 backdrop-blur-sm transition-opacity"
                        }
                        `}
      >
        <CloseBtn />
        <div className="card-body">
          <div className="form-control">
            <div className="label">
              <span className="label-text-alt">
                RSO Name <span className="text-error">*</span>
              </span>
            </div>
            <input
              type="text"
              placeholder="Human Club"
              className={styleRName}
              {...register("rso_name", {
                required: true,
                pattern: /^[a-zA-Z0-9-]{1,50}$/,
              })}
            />
            {errors.rso_name && (
              <span className={"label-text-alt text-error py-1"}>
                RSO Name must be 50 characters or less and be alphanumeric (a-z,
                0-9)
              </span>
            )}
          </div>
          <div className="form-control">
            <label className="form-control">
              <div className="label">
                <span className="label-text-alt">Description</span>
              </div>
              <textarea
                placeholder="Describe your RSO here..."
                className="textarea textarea-bordered"
                {...register("description", {
                  required: false,
                })}
              />
            </label>
          </div>
          <div className="grid grid-cols-2">
            <div className="form-control">
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text-alt">
                    Student 1 <span className="text-error">*</span>
                  </span>
                </div>
                <select
                  className="select select-bordered"
                  {...register("s1_name")}
                  defaultValue={"Choose one"}
                >
                  <option disabled>Choose one</option>
                  {/*! Option Map Here */}
                  <option value={1}>Student 1</option>
                  <option value={2}>Student 2</option>
                  <option value={3}>Student 3</option>
                  <option value={4}>Student 4</option>
                </select>
              </label>
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text-alt">
                    Student 2 <span className="text-error">*</span>
                  </span>
                </div>
                <select
                  className="select select-bordered"
                  {...register("s2_name")}
                  defaultValue={"Choose one"}
                >
                  <option disabled>Choose one</option>
                  {/*! Option Map Here */}
                  <option value={1}>Student 1</option>
                  <option value={2}>Student 2</option>
                  <option value={3}>Student 3</option>
                  <option value={4}>Student 4</option>
                </select>
              </label>
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text-alt">
                    Student 3 <span className="text-error">*</span>
                  </span>
                </div>
                <select
                  className="select select-bordered"
                  {...register("s3_name")}
                  defaultValue={"Choose one"}
                >
                  <option disabled>Choose one</option>
                  {/*! Option Map Here */}
                  <option value={1}>Student 1</option>
                  <option value={2}>Student 2</option>
                  <option value={3}>Student 3</option>
                  <option value={4}>Student 4</option>
                </select>
              </label>
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text-alt">
                    Student 4 <span className="text-error">*</span>
                  </span>
                </div>
                <select
                  className="select select-bordered"
                  {...register("s4_name")}
                  defaultValue={"Choose one"}
                >
                  <option disabled>Choose one</option>
                  {/*! Option Map Here */}
                  <option value={1}>Student 1</option>
                  <option value={2}>Student 2</option>
                  <option value={3}>Student 3</option>
                  <option value={4}>Student 4</option>
                </select>
              </label>
            </div>
            <div className="form-control">
              <label className="label cursor-pointer">
                <span className="label-text-alt">Admin</span>
                <input type="checkbox" className="checkbox" />
              </label>
              <label className="label cursor-pointer">
                <span className="label-text">Admin</span>
                <input type="checkbox" className="checkbox" />
              </label>
              <label className="label cursor-pointer">
                <span className="label-text">Admin</span>
                <input type="checkbox" className="checkbox" />
              </label>
              <label className="label cursor-pointer">
                <span className="label-text">Admin</span>
                <input type="checkbox" className="checkbox" />
              </label>
            </div>
          </div>
          <div className="form-control">
            <div className="label">
              <span className="label-text-alt">
                Admin Name (You) <span className="text-error">*</span>
              </span>
            </div>
            <input
              type="text"
              placeholder="Man"
              className={styleAdmin}
              {...register("am_name", {
                required: true,
                pattern: /^[a-zA-Z]{1,50}$/,
              })}
            />
            {errors.rso_name && (
              <span className={"label-text-alt text-error py-1"}>
                Add your username
              </span>
            )}
          </div>
          <div className="form-control mt-6">
            <button
              className="btn btn-primary"
              type="submit"
              disabled={!isValid}
            >
              Apply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function RSOForm() {
  const {
    register,
    formState: { isValid, errors },
  } = useForm<RSOFormInput>();

  const [state, formAction] = useFormState<State, FormData>(ApplyRSO, null);
  const [alert, setAlert] = useState<{
    visible: boolean;
    content: React.JSX.Element | null;
  }>({ visible: false, content: null });

  useEffect(() => {
    // do alert stuff
  }, [state]);

  return (
    <div>
      <form action={formAction}>
        <RSOFormContent register={register} isValid={isValid} errors={errors} />
      </form>
      {/* Alert content here */}
    </div>
  );
}
