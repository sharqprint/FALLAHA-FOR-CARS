function copyEmail() {
  const email = "example@cars.com";
  navigator.clipboard.writeText(email).then(() => {
    alert("The text has been copied");
  }).catch(err => {
    console.error("Failed to copy email: ", err);
  });
}