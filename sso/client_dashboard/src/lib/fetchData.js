// lib/fetchData.js
export const fetchData = async () => {
  const response = await fetch("http://localhost:1337/api/application/");
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await response.json();
  return data;
};
