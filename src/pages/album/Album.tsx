import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { api } from "../../api";
import { TypeAlbums } from "../../types/TypeAlbums";
import { TypePhoto } from "../../types/TypePhoto";
import * as styled from "./AlbumStyles";

export const Album = () => {
  const params = useParams(); //para eu ter aceso ao valor que coloquei na URL que nesse caso foi id
  const navigate = useNavigate();

  const [album, setAlbum] = useState<TypeAlbums>({
    userId: 0,
    id: 0,
    title: "",
  });

  const [photosOfAlbum, setPhotosOfAlbum] = useState<TypePhoto[]>([]);

  useEffect(() => {
    loadAlbum();
  }, []);

  useEffect(() => {
    loadPhotosOfAlbum();
  }, []);

  const loadAlbum = async () => {
    let id = params.id;
    if (id !== undefined) {
      let requisitionAlbum = await api.getAlbum(id);
      setAlbum(requisitionAlbum);
    }
  };

  const loadPhotosOfAlbum = async () => {
    let id = params.id;
    if (id !== undefined) {
      let requisitionPhotosOfAlbum = await api.getPhotosOfAlbum(id);
      setPhotosOfAlbum(requisitionPhotosOfAlbum);
    }
  };

  const goBack = () => navigate(-1);

  return (
    <div>
      <styled.Button onClick={goBack}>Voltar</styled.Button>
      <styled.Titles>{album.title}</styled.Titles>
      {photosOfAlbum.map((photo: TypePhoto, index) => (
        <>
          <styled.Image
            onClick={() =>
              navigate(`/photos/${(album.id - 1) * 50 + (index + 1)}`)
            }
            src={photo.thumbnailUrl}
          />
        </>
      ))}
    </div>
  );
};
