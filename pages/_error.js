// pages/_error.js
export default function Error({ statusCode }) {
    return (
      <p>
        {statusCode
          ? `Ocurrió un error ${statusCode} en el servidor`
          : 'Ocurrió un error en el cliente'}
      </p>
    );
  }