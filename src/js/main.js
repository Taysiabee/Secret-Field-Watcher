new SecretFieldWatcher();
new SecretFieldWatcher({ name: "full_name", value: "Stella" });

new SecretFieldWatcher({
  name: "full_name",
  value: "Taco",
  foregroundColor: "black",
  backgroundColor: "pink",
  errorMessage: "Found You!",
});
new SecretFieldWatcher({
  name: "email",
  value: "test@test.com",
  backgroundColor: "green",
 errorMessage: "Invalid Email",
});
new SecretFieldWatcher({
  name: "full_name",
  value: "Porter",
  backgroundColor: "brown",
});
