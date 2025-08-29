import { useEffect, useState } from "react";

export function useResult() {
  const [response, setResponse] = useState([]);

  useEffect(() => {
    fetch("https://dragonball-api.com/api/characters?limit=16")
      .then((response) => response.json())
      .then((json) => {
        const mappedResponse = json.items?.map((result) => ({
          id: result.id,
          name: result.name,
          image: result.image,
        }));

        setResponse(mappedResponse);
      })
      .catch(e => {
        throw new Error(e);
      })
  }, []);

  return { result: response };
}
