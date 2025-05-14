import { BtnWrapper } from "./styles";

type MoreInfoBtnProps = {
  title: string;
  onClick?: () => void;
  active?: boolean;
};

function MoreInfoBtn({ title, onClick, active }: MoreInfoBtnProps) {
  return (
    <BtnWrapper onClick={onClick} $active={active}>
      {title}
    </BtnWrapper>
  );
}

export default MoreInfoBtn;
