import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { TypePhoto } from "../types/TypePhoto";
import { api } from "../api";

export const Photo = () => {
  const [photo, setPhoto] = useState<TypePhoto>({
    albumId: 0,
    id: 0,
    title: "",
    url: "",
    thumbnailUrl: "",
  });
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    showPhoto();
  }, []);

  const showPhoto = async () => {
    let id = params.id;
    if (id !== undefined) {
      let requisitionPhoto = await api.getPhoto(id);
      setPhoto(requisitionPhoto);
    }
  };

  const goBack = () => navigate(-1);

  return (
    <div>
      <button onClick={goBack}>Voltar</button>
      <p>{photo.title}</p>
      <img src={photo.thumbnailUrl} />
    </div>
  );
};
