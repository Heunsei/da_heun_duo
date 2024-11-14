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

export function validateUsername(name: string) {
  if (name.length < 3) {
    return false;
  } else {
    return true;
  }
}
