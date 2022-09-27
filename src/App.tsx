import { useState, useEffect } from "react";
import { api } from "./api";
import { Home } from "./pages/Home";
import { TypeAlbums } from "./types/TypeAlbums";
import { MainRoutes } from "./routes/MainRoutes";

function App() {
  return (
    <div>
      <header>
        <h1>Galeria de fotos</h1>
      </header>
      <hr />
      <div>
        <MainRoutes />
      </div>
    </div>
  );
}

export default App;
