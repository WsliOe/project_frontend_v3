/*import { useMutation, useQueryClient } from "@tanstack/react-query";
import { sendHours } from "../../services/apiHours";
import { toast } from "react-hot-toast";

export function useEditHours() {
  const queryClient = useQueryClient();

  const { mutate: editHours, isLoading: isEditing } = useMutation({
    mutationFn: ({ newHoursData, id }) => sendHours(newHoursData, id),
    onSuccess: () => {
      toast.success("Hours successfully edited");
      queryClient.invalidateQueries({ queryKey: ["hours"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isEditing, editHours };
}
*/
