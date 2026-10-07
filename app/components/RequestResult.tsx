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
      <p>Username: {request.username}</p>
      <p>Full name: {request.fullName}</p>
      <p>Age: {request.age}</p>
    </section>
  );
}
