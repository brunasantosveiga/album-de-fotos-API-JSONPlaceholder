import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { TypePhoto } from "../../types/TypePhoto";
import { api } from "../../api";
import { Header } from "../../components/header/Header";
import * as styled from "./PhotoStyled";

export const Photo = () => {
  const [photo, setPhoto] = useState<TypePhoto>({
    albumId: 0,
    id: 0,
    title: "",
    url: "",
    thumbnailUrl: "",
  });
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

  return (
    <div>
      <Header title={photo.title} />
      <styled.Image src={photo.thumbnailUrl} />
    </div>
  );
};
