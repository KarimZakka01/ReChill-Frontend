import Cookies from "js-cookie"
const BASE_URL = "http://localhost:8888/.netlify/functions/";

export async function login(email, password) {
  try {
    const response = await fetch(`${BASE_URL}/login`, {
      method: "POST",
      credentials: 'include',
      body: JSON.stringify({email,password }),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response;
  } catch (error) {
    console.error(`Error fetching data: ${error}`);
    throw error;
  }
}

export async function signup(formValues) {
    try {
        console.log(JSON.stringify({ formValues }));
      const response = await fetch(`${BASE_URL}/signup`, {
        method: "POST",
        // headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formValues),
      });
  
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
  
      const data = await response.text();
      return {success: response.ok, message: data};
    } catch (error) {
      console.error(`Error fetching data: ${error}`);
      throw error;
    }
  }