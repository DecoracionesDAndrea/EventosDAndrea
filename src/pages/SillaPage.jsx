import { useParams } from 'react-router-dom';

const SillasPage = () => {
  // useParams para acceder al parámetro `id` de la URL
  const { id } = useParams();

  return (
    <div>
      <h2>Página de Sillas</h2>
      <p style={{marginTop: 20}}>ID de la silla seleccionada: {id}</p> {/* Mostrar el id */}
    </div>
  );
};

export default SillasPage;

// import { useSearchParams } from 'react-router-dom';

// const SillasPage = () => {
//   // useSearchParams para obtener los parámetros de la URL
//   const [searchParams] = useSearchParams();
  
//   // Obtener el valor de `id` del query string
//   const id = searchParams.get('id');

//   return (
//     <div>
//       <h1>Página de Sillas</h1>
//       <p>ID de la silla seleccionada: {id}</p> {/* Mostrar el id */}
//     </div>
//   );
// };

// export default SillasPage;
