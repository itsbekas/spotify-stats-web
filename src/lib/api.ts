import { BASE_URL } from './config';

async function fetchData(endpoint: string, queryParams: Record<string, any> = {}): Promise<any> {
    const queryString = Object.entries(queryParams)
      .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
      .join('&');
    
    const url = `${BASE_URL}${endpoint}${queryString ? `?${queryString}` : ''}`;
    
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }
    const data = await response.json();

    return data;
}
  
export async function getTopArtists(limit: number = 50): Promise<any> {
    return fetchData(`/api/v1/top-artists`, { limit });
}

export async function getTopTracks(limit: number = 50): Promise<any> {
    return fetchData(`/api/v1/top-tracks`, { limit });
}

export async function getPlays(startDate: string, endDate: string): Promise<any> {
    return fetchData(`/api/v1/plays`, { start_date: startDate, end_date: endDate });
}
