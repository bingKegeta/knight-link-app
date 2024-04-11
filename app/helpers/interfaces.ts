export interface EventProps {
  name: string;
  description: string;
  tags: string[];
  start: number; //has to be readable time type
  end: number;
  location: number;
  phone: number;
  email: string;
  visibility: "public" | "private" | "rso";
  rso?: string;
  uni?: string;
}

export interface LoginProps {
  username: string;
  password: string;
}

export interface RegisterInputs {
  first_name: string;
  last_name: string;
  username: string;
  email: string;
  password: string;
}

export interface UniProps {
  name: string;
  description: string;
  student_count?: number;
  //user_is_part: boolean
  picture?: string; //! Need to manage this
}
