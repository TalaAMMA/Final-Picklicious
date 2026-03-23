export const ERRORS = {
    required: `field required`,
    empty: `This field cannot be empty`,
    notValid: `{VALUE} is not a valid value`,
    moreThan10: `{VALUE} must has more than 10 charaters`,
  };
  export const getErrors = (errors) => {
      let message = "";
      const keys = Object.keys(errors);
      keys.forEach((key, i) => {
        message += `${errors[key].message} for ${key}`;
        if (i !== keys.length - 1) message += ` and `;
      });
      return message;
    };