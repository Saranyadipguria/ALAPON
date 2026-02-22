function sendRating() {
  const rating = document.querySelector('input[name="rating"]:checked').value;
  document.getElementById("thankyou").style.display = "block";

  setTimeout(() => {
    const msg = "⭐ Rating from website: " + rating + " out of 5";
    const url = "https://wa.me/919933992238?text=" + encodeURIComponent(msg);
    window.open(url, "_blank");
  }, 1200);
}
