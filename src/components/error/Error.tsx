import { useRouteError } from "react-router-dom";

const Error = () => {
  const error: any = useRouteError();
  return (
    <div className="bg-dark h-screen w-full text-lighter text-[2vw] flex justify-center items-center">
      <div className="w-[60%] h-[80%]">
        <h4>{error.status}</h4>
        {error.status === 404 ? (
          <h2>This page doesn't exist!</h2>
        ) : error.status === 401 ? (
          <h2>You aren't authorized to see this</h2>
        ) : error.status === 503 ? (
          <h2>Looks like our API is down</h2>
        ) : (
          <h2>🫖</h2>
        )}
      </div>
    </div>
  );
};

export default Error;
