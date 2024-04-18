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

export interface EventInputs {
  event_name: string;
  event_description: string;
  start_time: string;
  end_time: string;
  loc_name: string;
  contact_email: string;
  visibility: string;
  uni_name: string;
  rso_name: string;
}

export interface DbEventInputs {
  event_name: string;
  event_description: EventDescription;
  start_time: string;
  end_time: string;
  loc_name: string;
  contact_email: string;
  visibility: string;
  uni_name: string;
  rso_name: string;
}

export interface FeedbackForm {
  comment: string;
  username: string;
  rating: number;
  timestamp: string;
  feedback_type: string;
}

export interface EventDescription {
  String: string;
  Valid: boolean;
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
}

export interface FdProps {
  username: string;
  type: "rating" | "comment";
  content?: string;
  rating?: 1 | 2 | 3 | 4 | 5;
  timestamp: string;
}

export interface FD_Props {
  username: string;
  type: "rating" | "comment";
  feedback: string;
  timestamp: string;
}

export interface FD_PropsInp {
  username: string;
  event_name: string;
  type: "rating" | "comment";
  feedback: string;
}
