import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // 페이지 주소가 바뀌면 무조건 맨 위로 강제 이동
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // 화면엔 아무것도 안 보임
}
