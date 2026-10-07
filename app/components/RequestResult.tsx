export type Request = {
  username: string;
  fullName: string;
  age: number;
};

type RequestResultProps = {
  request: Request;
};

export default function RequestResult({ request }: RequestResultProps) {
  return (
    <section aria-live="polite">
      <h2>Request sent to DB with below request data</h2>
      <pre>{JSON.stringify(request, null, 2)}</pre>
    </section>
  );
}
