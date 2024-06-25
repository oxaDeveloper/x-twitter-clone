import { useEffect, useState } from "react";
import { getSession } from "next-auth/react";

const useSession = () => {
  const [session, setSession] = useState<any>(null);

  useEffect(() => {
    const fetchSession = async () => {
      const sessionData = await getSession();
      setSession(sessionData);
    };

    fetchSession();
  }, []);

  return session;
};

export default useSession;
