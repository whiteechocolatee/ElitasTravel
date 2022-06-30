import axios from "axios";

/**
 * GetPlanes is an async function that returns the data from the planes endpoint of the API.
 * @returns An array of objects.
 */
const getPlanes = async () => {
  const planes = await axios.get("/api/planes/");
  return planes.data;
};

/**
 * It makes a request to the server for a plane with the given id, and returns the plane object
 * @param id - the id of the plane you want to get
 * @returns The plane object
 */
const getPlane = async (id) => {
  const plane = await axios.get(`/api/planes/${id}`);
  return plane.data;
};

const planeService = {
  getPlanes,
  getPlane,
};

export default planeService;
