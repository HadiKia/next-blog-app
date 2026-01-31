import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function useEditProfile() {
  const queryClient = useQueryClient();

  const { isPending: isEditing, mutate: editProfile } = useMutation({});

  return { isEditing, editProfile };
}
