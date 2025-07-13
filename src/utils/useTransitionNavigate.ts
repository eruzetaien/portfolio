import { useNavigate } from "react-router-dom";

export const useTransitionNavigate = () => {
  const navigate = useNavigate();

  return (to: string, delay: number = 500) => {
    const start = new Event("start-transition");
    const end = new Event("end-transition");

    window.dispatchEvent(start);

    setTimeout(() => {
      navigate(to);
      window.dispatchEvent(end);
    }, delay);
  };
};