document.getElementById("contactButton").addEventListener("click", function () {
  var phoneNumber = "+6281265150863"; // Replace this with your phone number
  var message = "Hello! I'm interested in chatting with you."; // Optional message

  // Construct the WhatsApp API link
  var whatsappLink =
    "https://wa.me/" + phoneNumber + "/?text=" + encodeURIComponent(message);

  // Redirect the client to the WhatsApp app
  window.open(whatsappLink, "_blank");
});
