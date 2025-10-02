import { memo, useState, type ChangeEvent, type FormEvent } from "react";
import Title from "../ui/Title";
import { REGIONS } from "@/static/index";
import { useStudent } from "@/api/hooks/useStudent";
import { useNavigate } from "react-router-dom";

export interface IFormData {
  f_name: string;
  l_name: string;
  gender: string;
  address: string;
}

export const initialState: IFormData = {
  f_name: "",
  l_name: "",
  gender: "",
  address: "",
};

const CreateStudentForm = () => {
  const [formData, setFormData] = useState<IFormData>(initialState);
  const [editingItem, setEditingItem] = useState<IFormData | null>(null);
  const navigate = useNavigate();

  const { createStudent } = useStudent();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const student = {
      ...formData,
      id: Date.now(),
    };
    createStudent.mutate(student);

    setFormData(initialState);
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleEdit = (item: IFormData) => {
    setEditingItem(item);
    navigate("/create-student", { state: item });
  };

  return (
    <div className="max-w-[600px] w-full">
      <Title className="mb-3">Create</Title>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          value={formData.f_name}
          name="f_name"
          type="text"
          className="w-full border rounded-xl h-10 indent-3 border-slate-200 mb-3"
          placeholder="first name"
        />
        <input
          onChange={handleChange}
          value={formData.l_name}
          name="l_name"
          type="text"
          className="w-full border rounded-xl h-10 indent-3 border-slate-200 mb-3"
          placeholder="last name"
        />
        <select
          onChange={handleChange}
          value={formData.gender}
          name="gender"
          className="w-full border rounded-xl h-10 indent-2 border-slate-200 mb-3"
        >
          <option value="" hidden>
            Gender
          </option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <select
          onChange={handleChange}
          value={formData.address}
          name="address"
          className="w-full border rounded-xl h-10 indent-2 border-slate-200 mb-3"
        >
          <option value="" hidden>
            Region
          </option>
          {REGIONS?.map((item, inx) => (
            <option key={inx} value={item}>
              {item}
            </option>
          ))}
        </select>
        <button className="w-full rounded-xl h-10 mb-3 bg-blue-500 text-white">
          Submit
        </button>
      </form>
    </div>
  );
};

export default memo(CreateStudentForm);
