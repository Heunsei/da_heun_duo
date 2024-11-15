export function validateEmail(email: string) {
  const condition = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
  if (!condition.test(email)) {
    return false;
  } else {
    return true;
  }
}

export function validatePassword(password: string) {
  if (password.length < 8) {
    return false;
  } else {
    return true;
  }
}

export function validatePasswordConfirm(
  password: string,
  passwordConfirm: string
) {
  if (passwordConfirm.length < 8) {
    return {
      state: false,
      caution: "비밀번호는 8자 이상으로 입력해주세요",
    };
  } else {
    if (password === passwordConfirm) {
      return {
        state: true,
        caution: "",
      };
    } else {
      return {
        state: false,
        caution: "비밀번호가 일치하지 않습니다",
      };
    }
  }
}

export function validateUsername(name: string) {
  if (name.length < 3) {
    return false;
  } else {
    return true;
  }
}

export function validateEmailConfirm(password: string) {
  if (password.length < 8) {
    return false;
  } else {
    return true;
  }
}
