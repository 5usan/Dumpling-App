export const nameValidator = value => {
  const regex = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/;
  if (!regex.test(value.trim())) return false;
  return true;
};

export const emailValidator = value => {
  const regex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!regex.test(value.trim())) return false;
  return true;
};

export const contactValidator = value => {
  const regex = /^\+?(?:977)?[ -]?(?:(?:(?:98|97)-?\d{8})|(?:01-?\d{7}))$/;
  if (!regex.test(value.trim())) return false;
  return true;
};

export const addressValidator = value => {
  const regex = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/;
  if (!regex.test(value.trim())) return false;
  return true;
};
