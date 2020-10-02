import React, { useState } from "react";
import { connect } from "react-redux";
import { agregar, eliminar } from "./reducers/finanzas";
import Form from './components/Form';
import Dashboard from './components/Dashboard';
import "./App.css";

function Titulo() {
  return <h2 className="title">Finanzly</h2>;
}

function Finanzas({ finanzas, eliminarFinanza }) {
  return (
    <div className="column is-half">
      <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th>Descripción</th>
            <th>Cantidad</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {finanzas.map((x, i) => (
            <tr key={i}>
              <td>{x.desc}</td>
              <td>{x.cant}</td>
              <td>
                <button
                  className="button is-warning"
                  onClick={() => eliminarFinanza(i)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function App({ finanzas, agregarFinanza, eliminarFinanza }) {
  const total = finanzas.reduce((acc, el) => acc + el.cant, 0);
  return (
    <div className="section">
      <div className="container">
        <Titulo />
        <Form agregarFinanza={agregarFinanza} />
        <Dashboard valor={total} />
        <Finanzas finanzas={finanzas} eliminarFinanza={eliminarFinanza} />
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => ({
  agregarFinanza: finanza => dispatch(agregar(finanza)),
  eliminarFinanza: index => dispatch(eliminar(index))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
