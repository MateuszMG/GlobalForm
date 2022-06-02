import { SelectOption } from "../../components/GlobalForm/utils/InputsFactory/interfaces";

export const selectDataLimit: SelectOption[] = [
  { value: 10, label: 10 },
  { value: 25, label: 25 },
  { value: 50, label: 50 },
  { value: 75, label: 75 },
  { value: 100, label: 100 },
  { value: 250, label: 250 },
  { value: 500, label: 500 },
];

export const selectDataSortBy: SelectOption[] = [
  { value: "createdAt", label: "Newest" },
  { value: "updatedAt", label: "Last update" },
  { value: "title", label: "Title" },
  { value: "subTitle", label: "Sub title" },
  { value: "category", label: "Category" },
  { value: "subCategory", label: "Sub category" },
];
