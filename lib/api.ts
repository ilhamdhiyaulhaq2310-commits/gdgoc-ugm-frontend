// lib/api.ts
const BASE_URL = "https://gdgoc-ugm-api.vercel.app/api";

export async function fetchApi(endpoint: string) {
  try {
    const response = await fetch(`${BASE_URL}/${endpoint}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Gagal mengambil data: ${response.statusText}`);
    }

    const result = await response.json();
    return result.data;
  } catch (error) {
    console.error("API Fetch Error:", error);
    throw error;
  }
}