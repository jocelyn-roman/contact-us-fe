export const isValidEmail = (mail: string) => {
  if (/\S+@gmail.com/.test(mail)) {
    return false;
  }
  return true;
};

export const isValidPhone = (phone: string) => {
  if (!(phone.match('[0-9]{10}'))) {
    return false;
  }
  return true;
};