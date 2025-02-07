import { useEffect, useState } from "react";

let sequence_unique_id = 0;

const useId = () => {
  const [id, setId] = useState<string>();

  useEffect(() => {
    if (!id) {
      setId("useid-" + (++sequence_unique_id).toString(10));
    }
  }, [id]);

  return id;
};

export default useId;
