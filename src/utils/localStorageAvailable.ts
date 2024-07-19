export default function localStorageAvailable() {
  try {
    // Incognito mode might reject access to the localStorage for security reasons.
    // window isn't defined on Node.js
    // https://stackoverflow.com/questions/16427636/check-if-localstorage-is-available
    const key = "__some_random_key_you_are_not_going_to_use__";
    window.localStorage.setItem(key, key);

    window.localStorage.removeItem(key);

    return true;
  } catch (err) {
    return false;
  }
}

/*
 로컬 스토리지에 임의의 키를 저장하고 제거하는 방식으로
 로컬 스토리지 사용 가능 여부를 확인하는 함수
*/
