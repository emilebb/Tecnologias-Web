import type { FormEvent } from "react";
import FormField from "./FormField";

type RequestFormProps = {
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
};

export default function RequestForm({ onSubmit }: RequestFormProps) {
  return (
    <form onSubmit={onSubmit}>
      <FormField id="username" label="Username" />
      <FormField id="fullName" label="Full name" />
      <FormField id="age" label="Age" type="number" min={0} />
      <button type="submit">Submit</button>
    </form>
  );
}
