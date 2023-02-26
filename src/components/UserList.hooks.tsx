import axios from "axios";
import { useEffect, useState } from "react";

export const useUsers = () => {
  const [result, setResult] = useState<any>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const result = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setResult(result);
        setLoading(false);
      } catch (error) {
        return error;
      }
    };
    getUsers();
  }, []);

  return {
    result,
    loading,
  };
};
