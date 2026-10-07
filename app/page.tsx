"use client";

import { useState, type FormEvent } from "react";
import RequestForm from "./components/RequestForm";
import RequestResult, { type Request } from "./components/RequestResult";

export default function Home() {
  const [request, setRequest] = useState<Request | null>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    setRequest({
      username: String(formData.get("username")),
      fullName: String(formData.get("fullName")),
      age: Number(formData.get("age")),
    });
  }

  return (
    <main>
      <h1>Request form</h1>
      <RequestForm onSubmit={handleSubmit} />

      {request && <RequestResult request={request} />}
    </main>
  );
}
