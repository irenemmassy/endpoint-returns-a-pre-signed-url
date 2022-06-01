import axios from "axios";

const GetUrlApi = async ({ formData, setLoading, setResult }) => {
  try {
    setLoading(true);
    const res = await axios.post("http://localhost:5000", formData);
    setLoading(false);
    setResult(res.data);
  } catch (er) {
    alert(er);
  }
};

export { GetUrlApi };
