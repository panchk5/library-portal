interface ApiResponse<T>{
    data: T;
}

async function fetchFromApi<T>(endpoint: string): Promise<ApiResponse<T>> {
    // Construct the full API URL using the environment variable
    const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}${endpoint}`;
  
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error(`An error occurred: ${response.statusText}`);
      }
      const data: T = await response.json();
      return { data };
    } catch (error) {
      throw new Error(`Fetching data from API failed: ${error}`);
    }
  }
  
  export default fetchFromApi;