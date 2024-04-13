'use server'

import { cookies } from "next/headers";

interface UniversitiesRes {
  data : Univerisity[];
  status: string;
}

interface RSOsRes {
  data : string[];
  status: string;
}

interface EventsRes {
  data: DbEventInputs[];
  status: string;
}

interface Univerisity {
  uni_name: string;
  uni_description: string;
  student_no: number;
}

interface LocationRes {
  data : Location[];
  status: string;
}

interface Location {
  address: string;
  latitude: string;
  longitude: string;
}

export interface DbEventInputs {
  event_name: string;
  event_description: EventDescription;
  start_time: string;
  end_time: string;
  loc_name: string;
  contact_email: string;
  visibility: string;
  uni_name: string
  rso_name : string
}

export interface EventDescription {
  String: string
  Valid: boolean
}

export type State =
  | {
      status: string;
      message: string;
    }
  | null;

export async function RegisterUser(prevState: State | null, formData: FormData): Promise<State> {
  'use server'
    try {
      const data: Partial<Record<string, string>> = {};
      
      formData.forEach((value, key) => { 
        data[key] = value.toString();
      });

      const response = await fetch("http://localhost:8000/v1/api/users", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "content-type": "application/json",
        },
      });
      
      const responseText = await response.text();

      let responseBody;

      try {
        responseBody = JSON.parse(responseText);
      } catch (e) {
        responseBody = responseText;
      }
      
      if (!response.ok) {
        const errorMessage = typeof responseBody === 'object' ? responseBody.message : responseBody;
        return {
            status: "warning",
            message: `Registering failed: ${errorMessage}`
        };
      }

      return {
        status: "success",
        message: typeof responseBody === 'object' ? responseBody.message : responseBody
      };
    }

    catch (error : any) {
        return {
          status: "error",
          message: `Error creating the user: ${error.message || error}`
      };
    }
}

export async function LoginUser(prevState: State | null, formData: FormData): Promise<State> {
  'use server'
  try {
    const data: Partial<Record<string, string>> = {};
    const cookieStore = cookies();

    formData.forEach((value, key) => { 
      data[key] = value.toString();
    });
    
    const response = await fetch("http://localhost:8000/v1/api/auth/login", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const responseText = await response.text();

    let responseBody;

    try {
      responseBody = JSON.parse(responseText);
    } catch (e) {
      responseBody = responseText;
    }
    
    if (!response.ok) {
      const errorMessage = typeof responseBody === 'object' ? responseBody.message : responseBody;
      return {
          status: "warning",
          message: `Login failed: ${errorMessage}`
      };
    }
    const cookieHeader = response.headers.get("Set-Cookie");

    if (cookieHeader) {
      const usernameRegex = /username=([^;]+)/;
      const usernameMatch = cookieHeader.match(usernameRegex);
      const username = usernameMatch ? usernameMatch[1] : null;
      
      // Regex to find the token value
      const tokenRegex = /token=([^;]+)/;
      const tokenMatch = cookieHeader.match(tokenRegex);
      const token = tokenMatch ? tokenMatch[1] : null;

      cookieStore.set('authToken', token || "")
      cookieStore.set('username', username || "")
    }

    return {
      status: "success",
      message: typeof responseBody === 'object' ? responseBody.message : responseBody
    };
  }

  catch (error : any) {
      return {
        status: "error",
        message: `Login failed: ${error.message || error}`
    };
  }
}

export async function GetUniversities(): Promise<Univerisity[]>  {
  'use server'
  try {
    const response = await fetch("http://localhost:8000/v1/api/unis", {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    const res : UniversitiesRes = await response.json()

    if (res.status === "success") {
      return res.data; 
    } 
    else {
      console.log("Failed to fetch universities:", res.status);
      return [];
    }
  }
  catch (error : any) {
    console.error("Error fetching universities:", error.message);
    return []
  }
}

export async function GetRsos(): Promise<string[]>  {
  'use server'
  try {
    const response = await fetch("http://localhost:8000/v1/api/rsos", {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    const res : RSOsRes = await response.json()

    if (res.status === "success") {
      return res.data; 
    } 
    else {
      console.log("Failed to fetch RSOs:", res.status);
      return [];
    }
  }
  catch (error : any) {
    console.error("Error fetching RSOs:", error.message);
    return []
  }
}

export async function GetLocations(): Promise<Location[]>  {
  'use server'
  try {
    const response = await fetch("http://localhost:8000/v1/api/locations", {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    const res : LocationRes = await response.json()

    if (res.status === "success") {
      return res.data; 
    } 

    else {
      console.log("Failed to fetch locations:", res.status);
      return [];
    }
  }
  catch (error : any) {
    console.error("Error fetching locations:", error.message);
    return []
  }
}

export async function GetEvents(): Promise<DbEventInputs[]>  {
  'use server'
  try {
    const cookieStore = cookies();
    const auth = cookieStore.get('authToken')

    const response = await fetch("http://localhost:8000/v1/api/events", {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + auth?.value
      },
    });

    const res : EventsRes = await response.json()

    if (res.status === "success") {
      return res.data; 
    } 

    else {
      console.log("Failed to fetch events:", res.status);
      return [];
    }
  }
  catch (error : any) {
    console.error("Error fetching events:", error.message);
    return []
  }
}

export async function CreateEvent(prevState: State | null, formData: FormData): Promise<State> {
  'use server'
  try {
    const data: Partial<Record<string, string>> = {};
    const cookieStore = cookies();

    formData.forEach((value, key) => { 
      data[key] = value.toString();
    });

    const auth = cookieStore.get('authToken')

    const response = await fetch("http://localhost:8000/v1/api/events", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + auth?.value
      },
      credentials: 'include',
    });

    const responseText = await response.text();

    let responseBody;

    try {
      responseBody = JSON.parse(responseText);
    } catch (e) {
        responseBody = responseText;
    }
    
    if (!response.ok) {
      const errorMessage = typeof responseBody === 'object' ? responseBody.message : responseBody;
      return {
          status: "warning",
          message: `Login failed: ${errorMessage}`
      };
    }

    return {
      status: "success",
      message: typeof responseBody === 'object' ? responseBody.message : responseBody
    };
  }

  catch (error : any) {
      return {
        status: "error",
        message: `Login failed: ${error.message || error}`
    };
  }
}

export async function CreateLocation(prevState: State | null, formData: FormData): Promise<State> {
  'use server'
  try {
    const data: Partial<Record<string, string>> = {};
    
    formData.forEach((value, key) => { 
      if (key.charAt(0) !== "$"){
        data[key] = value.toString();
      }
    });
    
    const raw = JSON.stringify({
      "address": data["address"],
      "latitude": data["coordinates.latitude"],
      "longitude": data["coordinates.longitude"]
    });
    
    const response = await fetch("http://localhost:8000/v1/api/locations/create", {
      method: "POST",
      body: raw,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const responseText = await response.text();

    let responseBody;

    try {
      responseBody = JSON.parse(responseText);
    } catch (e) {
      responseBody = responseText;
    }
    
    if (!response.ok) {
      const errorMessage = typeof responseBody === 'object' ? responseBody.message : responseBody;
      return {
          status: "warning",
          message: `Creation failed: ${errorMessage}`
      };
    }

    return {
      status: "success",
      message: typeof responseBody === 'object' ? responseBody.message : responseBody
    };
  }

  catch (error : any) {
      return {
        status: "error",
        message: `Creation failed: ${error.message || error}`
    };
  }
}

export async function CreateFeedback(prevState: State | null, formData: FormData): Promise<State> {
  'use server'
  try {
    const data: Partial<Record<string, string>> = {};
    
    formData.forEach((value, key) => { 
      if (key.charAt(0) !== "$"){
        data[key] = value.toString();
      }
    });
    
    const raw = JSON.stringify({
      "address": data["address"],
      "latitude": data["coordinates.latitude"],
      "longitude": data["coordinates.longitude"]
    });
    
    const response = await fetch("http://localhost:8000/v1/api/locations/create", {
      method: "POST",
      body: raw,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const responseText = await response.text();

    let responseBody;

    try {
      responseBody = JSON.parse(responseText);
    } catch (e) {
      responseBody = responseText;
    }
    
    if (!response.ok) {
      const errorMessage = typeof responseBody === 'object' ? responseBody.message : responseBody;
      return {
          status: "warning",
          message: `Creation failed: ${errorMessage}`
      };
    }

    return {
      status: "success",
      message: typeof responseBody === 'object' ? responseBody.message : responseBody
    };
  }

  catch (error : any) {
      return {
        status: "error",
        message: `Creation failed: ${error.message || error}`
    };
  }
}
