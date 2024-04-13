"use client";
import React, { useEffect, useState } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { FieldErrors, useForm, UseFormRegister } from "react-hook-form";
import CloseBtn from "./CloseButton";
import { register } from "module";
import { ApplyRSO, GetStudents, State } from "./server/actions";

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

  const [students, setStudents] = useState<string[]>([]);
  // Hashmap to keep track of the selected students and dynamically update the options
  const [selectedStudents, setSelectedStudents] = useState<Record<string, string>>({});

  useEffect(() => {
    const fetchStudents = async () => {
      const stdList: string[] = await GetStudents();
      setStudents(stdList);
    };

    fetchStudents();
  }, []);

  const handleSelectStudent = (student: string, key: string) => {
    setSelectedStudents(prev => ({
      ...prev,
      [key]: student
    }));
  };

  const filteredStudents = (key: string) => {
    return students.filter(stu => !Object.values(selectedStudents).includes(stu) || selectedStudents[key] === stu);
  };

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
            {['s1_name', 's2_name', 's3_name', 's4_name'].map((key, index) => (
              <label key={key} className="form-control w-full">
                <div className="label">
                  <span className="label-text-alt">
                    Student {index + 1} <span className="text-error">*</span>
                  </span>
                </div>
                <select
                  className="select select-bordered"
                  {...register(key)}
                  value={selectedStudents[key] || "Choose one"}
                  onChange={e => handleSelectStudent(e.target.value, key)}
                >
                  <option disabled value="Choose one">Choose one</option>
                  {filteredStudents(key).map(name => (
                    <option key={name} value={name}>{name}</option>
                  ))}
                </select>
              </label>
            ))}
            </div>
            <div className="form-control">
            <div className="label">
              <span className="label-text-alt">Promote a student:</span>
            </div>
            {['s1_name', 's2_name', 's3_name', 's4_name'].map((field, index) => (
              <label key={field} className="label cursor-pointer">
                <span className="label-text">{`Student ${index + 1}`}</span>
                <input
                  type="radio"
                  value={index + 1}
                  {...register("promotion_value")}
                  className="radio"
                />
              </label>
            ))}
          </div>

          </div>
          <input
              type="hidden"
              placeholder="Man"
              className={styleAdmin}
              {...register("am_name", {
                required: false,
                pattern: /^[a-zA-Z]{1,50}$/,
              })}
              value={""}
            />
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
