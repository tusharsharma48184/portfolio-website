document.getElementById("sendBtn").addEventListener("click", function() {
    var userQuery = document.getElementById("query").value;
    if (userQuery.trim() === "") {
        alert("Please enter a query before submitting.");
        return;
    }
    var email = "tusharsharma48184@gmail.com";
    var subject = encodeURIComponent(userQuery);
    var body = encodeURIComponent("Hello,\n\nI have the following query:\n\n" + userQuery);
    var gmailURL = "https://mail.google.com/mail/?view=cm&fs=1&to=" + email + "&su=" + subject + "&body=" + body;
    window.open(gmailURL, "_blank");
});