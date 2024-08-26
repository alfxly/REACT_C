import React from 'react';
import { Link } from 'react-router-dom';
import './Inicio.css'; 
//import logo from '../../assets/images/logo.png';

function Inicio() {
  return (
    <div>
      <header>
        <h1>Claw Guardians</h1>
        <nav>
          <ul>
            <li><a href="#">Inicio</a></li>
            <li className="dropdown">
              <a href="#">Gestión de Empleados</a>
              <div className="dropdown-content">
                <a href="/registrar-empleado">Registrar Empleado</a>
                <a href="/actualizar-empleado">Actualizar empleado</a>
                <a href="/inhabilitar-empleado">Inactivar empleado</a>
                <a href="/consultar-empleado">Consultar empleado</a>
              </div>
            </li>
            <li className="dropdown">
              <a href="#">Productos</a>
              <div className="dropdown-content">
                <a href="/registrar-producto">Registrar Producto</a>
                <a href="/actualizar-stock">Actualizar Stock</a>
                <a href="/inactivar-producto">Inactivar Producto</a>
                <a href="/reporte-ventas">Reporte de ventas</a>
                <a href="/consultar-producto">Consultar Producto</a>
              </div>
            </li>
            <li className="dropdown">
              <a href="#">Servicios</a>
              <div className="dropdown-content">
                <a href="/confirmar-servicio">Confirmar Servicio</a>
                <a href="/consultar-servicio">Consultar Servicio</a>
              </div>
            </li>
            <li className="dropdown">
              <a href="#">Perfil</a>
              <div className="dropdown-content">
              </div>
            </li>
          </ul>
        </nav>
      </header>

      <main>
      <div className="container">
      <div className="Imagen1">
        <img src="https://http2.mlstatic.com/D_NQ_NP_978858-MCO42145792829_062020-O.webp" alt="Descripción de la imagen" className="responsive-image" />
        <h2 className="title">Cada venta es una oportunidad para construir relaciones duraderas y fortalecer nuestro éxito. ¡Vamos a superar nuestras metas y hacer historia juntos!</h2>
        <p className="description">Cada transacción representa una valiosa oportunidad para establecer conexiones significativas y duraderas con nuestros clientes, fortaleciendo así la base de nuestro éxito.
          ¡Vamos a Continuar!
        </p>
      </div>
    </div>
      </main>
    </div>
  );
}

export default Inicio;
