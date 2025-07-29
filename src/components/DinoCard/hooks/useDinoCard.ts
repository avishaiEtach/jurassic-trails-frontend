import { useSearchParams } from "react-router-dom";

export const useDinoCard = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleClick = (dinoId: string) => {
    setSearchParams({ dinoId: dinoId });
  };

  const handleOpenChangeModal = (isOpen: boolean) => {
    if (!isOpen) {
      setSearchParams({});
    }
  };

  const chosenDinoId = searchParams.get("dinoId");

  const getDinoHeaderClassName = (name: string) => {
    if (name.includes(" ")) {
      return "";
    }

    return name.length >= 15 ? "long-name" : name.length > 10 ? "mid-name" : "";
  };

  return {
    handleClick,
    handleOpenChangeModal,
    chosenDinoId,
    getDinoHeaderClassName,
  };
};
