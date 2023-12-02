"use client";

import { useEffect, useState } from "react";
import { StoreModal } from "@/components/modals/store-modal";

// "Uncaught Error: Hydration failed because the initial UI does not match what was rendered on the server."
// 서버사이드 렌더링인 NextJS에서는 초기 HTML,CSS 렌더링이 서버에서 일어난다.
// 그래서 초기 HTML 구조가 클라이언트와 서버가 일치해야함.

// 만약 서버에서 렌더링된 HTML이 클라이언트의 예상과 다르다면 hydraion 에러가 생김.
// 클라이언트에서 렌더링은 서버사이드 초기 렌더링 이후 사용자와의 상호작용에 따라 발생할 수 있음.
// 초기 렌더링된 부분에서 동적인 작용 즉 쉽게말해서 JS 문법을 추가하는 것이 Hydraion 과정임.

// 이것 에러가 난다는 것은 결국 서버측 초기 렌더링 결과가 클라이언트가 예측한 것고 달라서, 발생하는 문제라는 것임.

// 클라이언트 측 데이터나 상태에 의존하는 컴포넌트가 서버에서 렌더링 될때,
// initial UI 불일치 -> hydraion 에러가 발생할 수 있음.

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <StoreModal />
    </>
  );
};
