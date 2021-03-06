import { useEffect, useState } from "react";

const useToken = (user) => {
  const [token, setToken] = useState(null);
  useEffect(() => {
    //   console.log('user inside token',user);
    if (user) {
      const email = user?.user?.email;
      const currentUser = { email: email };
      fetch(`https://shrouded-wildwood-70641.herokuapp.com/user/${email}`, {
        method: "PUT",
        Headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(currentUser),
      })
        .then((res) => res.json())
        .then((data) => {
        const accessToken = data.token;
        setToken(accessToken)
        localStorage.setItem('accessToken',accessToken)
        });
    }
  }, [user]);

  return [token];
};

export default useToken;
