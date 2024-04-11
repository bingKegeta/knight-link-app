'use server'

export type State =
  | {
      status: string;
      message: string;
    }
  | null;


export async function RegisterUser(prevState: State | null, formData: FormData): Promise<State> {
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
  try {
    const data: Partial<Record<string, string>> = {};
    
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