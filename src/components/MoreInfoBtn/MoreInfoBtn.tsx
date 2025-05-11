import { BtnWrapper } from "./styles";

type MoreInfoBtnProps = {
  title: string;
   onClick?: () => void;
};

function MoreInfoBtn({ title, onClick }: MoreInfoBtnProps) {
  return (
    <BtnWrapper onClick={onClick}>
      {title}
    </BtnWrapper>
  );
}

export default MoreInfoBtn;
