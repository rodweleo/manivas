import { useNavigate, useRouteError, isRouteErrorResponse } from "react-router-dom";
import { Button } from "./button";

export const ErrorBoundary = () => {
  const error = useRouteError();
  const navigate = useNavigate()

  let errorMessage: string;

  if(isRouteErrorResponse(error)){
    errorMessage = error.error?.message || error.statusText;
  } else if (error instanceof Error) {
    errorMessage = error.message;
  } else if (typeof error === 'string') {
    errorMessage = error;
  } else {
    console.error(error);
    errorMessage = 'Unknown error';
  }
  return (
    <section className='flex flex-col gap-8 justify-center items-center h-screen'>
      <h1 className='text-4xl font-bold'>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p className='text-slate-400'>
        <i>{errorMessage}</i>
      </p>
      <Button onClick={() => navigate(-1)}>Go Back</Button>
    </section>
  );
};