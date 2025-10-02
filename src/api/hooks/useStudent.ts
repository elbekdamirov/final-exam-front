import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { api } from "..";

export const useStudent = () => {
  const client = useQueryClient();

  const getStudent = () =>
    useQuery({
      queryKey: ["studentsKey"],
      queryFn: () => api.get("user").then((res) => res.data),
    });

  const createStudent = useMutation({
    mutationFn: (body: any) => api.post("user", body).then((res) => res.data),
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ["studentsKey"] });
    },
    onError: () => {},
  });

  const deleteStudent = useMutation({
    mutationFn: (id: string) =>
      api.delete(`user/${id}`).then((res) => res.data),
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ["studentsKey"] });
    },
    onError: () => {},
  });

  const updateStudent = useMutation({
    mutationFn: ({ id, body }: { id: string; body: any }) =>
      api.put(`user/${id}`, body).then((res) => res.data),
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ["studentsKey"] });
    },
  });

  return { getStudent, createStudent, deleteStudent, updateStudent };
};
