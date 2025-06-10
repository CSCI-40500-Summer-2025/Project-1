document.getElementById("rsvpForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const guests = document.getElementById("guests").value.trim();

  if (!name || !email || !guests) {
    alert("Please fill in all fields.");
    return;
  }

  alert(`Thanks for RSVPing, ${name}! We’ve noted ${guests} guest(s).`);
  
  // Clear form
  document.getElementById("rsvpForm").reset();
});
