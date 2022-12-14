import axios, {AxiosError, AxiosRequestConfig, AxiosResponse} from "axios";
import {useState, useEffect} from "react";
import {config} from "../config";

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";

const useAxios = (axiosParams: AxiosRequestConfig) => {
  const [response, setResponse] = useState<AxiosResponse>();
  const [error, setError] = useState<AxiosError>();
  const [loading, setLoading] = useState<boolean>(
    axiosParams.method === "GET" || axiosParams.method === "get"
  );
  const [unknownError, setUnknownError] = useState<null | unknown>(null);

  const fetchData = async (params: AxiosRequestConfig) => {
    try {
      const result = await axios.request(params);
      setResponse(result);
    } catch (err) {
      if (axios.isAxiosError(err)) {
        setError(err);
      } else {
        setUnknownError(err);
      }
    } finally {
      setLoading(false);
    }
  };

  const sendData = () => {
    fetchData(axiosParams);
  };

  useEffect(() => {
    if (axiosParams.method === "GET" || axiosParams.method === "get") {
      fetchData(axiosParams);
    }
  }, []);

  return {response, error, loading, unknownError, sendData};
};

export default useAxios;
