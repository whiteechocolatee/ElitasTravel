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

/**
 * It takes in a formData object, sends it to the server, and returns the data that the server sends
 * back
 * @param formData - This is the data that we're sending to the server.
 * @returns The plane object
 */
const createPlane = async (formData) => {
  const plane = await axios.post(`/api/planes/`, formData);

  return plane.data;
};

const planeService = {
  getPlanes,
  getPlane,
  createPlane,
};

export default planeService;
