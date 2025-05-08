

/** 수정된 코드에는 이 양식 참고
 * 함수명: createElement
 * 설명: 기존에 바닐라js에서 제공하는 createElement의 헬퍼함수
 * 파라미터:
 *  tag, - 만들고 싶은 html 태그, [string]
  classNames = [], - 넣을 class, 리스트로 주면 리스트로 들어가고, 단일이면 단일로 들어감 [string]
  text = '', - innerText 값 [string]
  id, - id값, 유일성 보전해야함 [?]
  key, - key 값 없으면, 동적 생성 안돼요 [?]
  href - href [string]
 * 반환값:
 *  - html element
 * 작성자: [서진규]
 * 최초 작성일: 2025-05-05 
 * 최종 수정일: -
 */

export const createElement = (
  tag,
  classNames = [],
  text = '',
  id,
  key,
  href
) => {
  const el = document.createElement(tag);
  if (Array.isArray(classNames)) {
    el.classList.add(...classNames);
  } else if (classNames) {
    el.classList.add(classNames);
  }
  if (text) el.innerText = text;
  if (id) el.id = id;
  if (key) el.key = key;
  if (href) el.setAttribute('href', href);
  return el;
};
