const useValidation = () => {
  const required = (value) => {
    return (value ? undefined : 'Required')
  };
  const minLength = (min) => (value) =>
  value && value.length < min ? `Must be ${min} characters or more` : undefined;
  return {
    required,
    minLength,
  }
}

export { useValidation };