// 시간 지연 처리 함수
export const delay = (ms = 1000) => {
  return new Promise((resolve) => {
    window.setTimeout(() => resolve(), ms);
  });
};
