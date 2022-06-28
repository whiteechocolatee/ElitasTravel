import axios from "axios";

/**
 * GetPlanes is an async function that returns the data from the planes endpoint of the API.
 * @returns An array of objects.
 */
const getPlanes = async () => {
  const planes = await axios.get("/api/planes/");
  return planes.data;
};

const planeService = {
  getPlanes,
};

export default planeService;
