import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { useUserContext } from "../../store/context/userContext";
import { verifyToken } from "../../lib/api/auth";

const withAuth = (WrappedComponent) => {
  // eslint-disable-next-line
  return (props) => {
    const { myToken, myUser, removeToUser } = useUserContext();
    const router = useRouter();
    const [verified, setVerified] = useState(false);

    const notUser = () => {
      setVerified(false);
      removeToUser();
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      router.push("/login");
    };

    useEffect( () => {
      const fetchData = async () => {
        // Robust token check...
        if (myToken && myUser) {
          const verifyTokenRes = await verifyToken(myToken);
          if (verifyTokenRes.status === 200) {
            const { success } = verifyTokenRes.data;
            if (success) {
              setVerified(success);
            } else {
              notUser();
            }
          } else {
            notUser();
          }
        } else {
          notUser();
        }
      }

      fetchData()
      // eslint-disable-next-line
    }, [verified, myUser, myToken]);

    if (verified) {
      return <WrappedComponent {...props} />;
    } else {
      return null;
    }
  };
};

export default withAuth;
