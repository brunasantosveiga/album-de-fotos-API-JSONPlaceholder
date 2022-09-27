import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../api";
import { TypeAlbums } from "../types/TypeAlbums";

export const Home = () => {
  const [loading, setLoading] = useState(false);
  const [albums, setAlbums] = useState<TypeAlbums[]>([]);

  const navigate = useNavigate();

  useEffect(() => {
    loadAlbums();
  }, []);

  const loadAlbums = async () => {
    setLoading(true);
    let requisitionAlbums = await api.getAllAlbums();
    setLoading(false);
    setAlbums(requisitionAlbums);
  };

  return (
    <div>
      {loading && <div>Carregando...</div>}
      {!loading && albums.length > 0 && (
        <p>
          {albums.map((album, id) => (
            <>
              <p onClick={() => navigate(`/albums/${id + 1}`)}>{album.title}</p>
              <br />
            </>
          ))}
        </p>
      )}
    </div>
  );
};
