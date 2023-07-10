import React, { useState, useEffect } from 'react';


function Pages () {
  const [totalPage, setTotalPages] = useState([]); // Estado para almacenar los elementos
  const {currentPage, setCurrentPage} = useState(1); // Estado para la página actual
  const itemsPerPage = 8; // Número de elementos a mostrar por página

  // Cálculo de los índices inicial y final de los elementos a mostrar
    const indiceInicial = (currentPage - 1) * itemsPerPage;
    const indiceFinal = indiceInicial + itemsPerPage;

  // Obtención de los elementos para la página actual
    const PageElements = totalPage.slice(indiceInicial, indiceFinal);

useEffect(() => {
    setTotalPages(Math.ceil(population.length / itemsPerPage));
}, [population]);

    // Actualización del estado de los elementos
    setTotalPages(PageElements);
 [currentPage] // El efecto se ejecuta cuando cambia la página actual

  // Función para cambiar a la página siguiente
const irSiguiente = () => {setCurrentPage(currentPage + 1);};

  // Función para cambiar a la página anterior
const irAnterior = () => {
    if (currentPage > 1) {setPaginaActual(currentPage - 1);}
};

    return (
        <div>
        {/* Renderizar los elementos */}
        <ul>
            {totalPage.map(elemento => (
            <li key={elemento.id}>{elemento.nombre}</li>
            ))}
        </ul>

      {/* Botones de navegación */}
        <button onClick={irAnterior} disabled={currentPage === 1}>Anterior</button>
        <button onClick={irSiguiente}>Siguiente</button>
    </div>
    );
}

export default Pages;



