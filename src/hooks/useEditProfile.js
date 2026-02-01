import { editUserApi } from "@/services/authService";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useAuth } from "@/context/AuthContext";

export default function useEditProfile() {
  const queryClient = useQueryClient();
  const { getUser } = useAuth(); 
  const { isPending: isEditing, mutate: editProfile } = useMutation({
    mutationFn: editUserApi,
    onSuccess: async (data) => {
      toast.success(data.message);

      await getUser();

      queryClient.invalidateQueries({
        queryKey: ["user"],
      });
    },
    onError: (err) => toast.error(err?.response?.data?.message),
  });

  return { isEditing, editProfile };
}
