import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { TypePhoto } from "../../types/TypePhoto";
import { api } from "../../api";
import * as styled from "./PhotoStyled";

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
      <styled.Button onClick={goBack}>Voltar</styled.Button>
      <styled.Titles>{photo.title}</styled.Titles>
      <styled.Image src={photo.thumbnailUrl} />
    </div>
  );
};
