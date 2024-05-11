import { useMutation } from "@tanstack/react-query";
import { isLoggedIn as isLoggedInApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";

export function useIsLoggedIn() {
  const navigate = useNavigate();

  const { mutate: isLoggedIn, isPending: isLoading } = useMutation({
    mutationFn: isLoggedInApi,
    onSuccess: (user) => {},
    onError: (err) => {
      navigate("/login");
    },
  });

  return { isLoggedIn, isLoading };
}

/*
import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../../services/apiAuth";

export function useUser() {
  const { isLoading, data: user } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
  });
  console.log(user);

  return {
    isLoading,
    user,
    isAuthenticated: user?.role === "authenticated",
  };
}
*/
