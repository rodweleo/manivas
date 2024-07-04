import { useNavigate, useRouteError } from "react-router-dom";
import { Button } from "./button";

export const ErrorBoundary = () => {
  const error = useRouteError();
    const navigate = useNavigate()
  return (
    <section>
      <h1>{error.status}</h1>
      <p>{error.statusText}</p>
      <p>{typeof error.data === "string" && error.data}</p>
      <small>{error?.message}</small>
      <Button onClick={() => navigate(-1)}>Go Back</Button>
    </section>
  );
};