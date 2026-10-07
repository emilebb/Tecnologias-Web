type FormFieldProps = {
  id: string;
  label: string;
  type?: "text" | "number";
  min?: number;
};

export default function FormField({
  id,
  label,
  type = "text",
  min,
}: FormFieldProps) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>{" "}
      <input
        id={id}
        name={id}
        type={type}
        min={min}
        step={type === "number" ? 1 : undefined}
        required
      />
    </div>
  );
}
