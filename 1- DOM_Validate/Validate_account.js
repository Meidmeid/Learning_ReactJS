function check() {
  const pattern = /^[_a-z0-9]{6,}$/;
  let input = document.getElementById("input").value;
  if (pattern.test(input)) {
    return alert("Successfully!");
  } else {
    return alert("Please input again!");
  }
}
