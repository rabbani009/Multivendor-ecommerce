// Mail checker
export const mailRegx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
// Name checker
export const nameRegx = /^[a-z ,.'-]+$/i;
// Phone checker
export const phoneRegx = /^(?:\+88|01)?(?:\d{11}|\d{13})$/;
