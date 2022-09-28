import { useNavigate } from "react-router-dom";
import * as styled from "./HeaderStyles";

type Props = {
  title: string;
};

export const Header = (props: Props) => {
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  return (
    <header>
      <styled.BackButton onClick={goBack}>Voltar</styled.BackButton>
      <styled.Description>{props.title}</styled.Description>
    </header>
  );
};
