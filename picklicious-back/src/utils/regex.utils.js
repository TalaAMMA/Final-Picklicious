// regex describes a set of strings that matches the pattern

export const REGEX = {
      email: /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/,
     password:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10000}$/,
    };
    
   export const regexIsOk = (regex, value) => regex.test(value);
   export const emailIsValid = (email) => regexIsOk(REGEX.email, email);