let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

// Get form values
var nama = document.getElementById("nama").value;
var dob = document.getElementById("dob").value;
var gender = document.getElementById("gender").value;
var message = document.getElementById("message").value;

// Get current date and time
var currentDate = new Date();
var datetime = currentDate.toLocaleString();

// Create a new result item
var resultItem = document.getElementsByClassName("tampilanhasil");

var resultItem = document.createElement("div");
document.querySelector(".tombol").onclick = () => {
  resultItem.innerHTML = `
        <br/><span><strong>Nama:</strong> ${nama}</span><br/>
        <span><strong>Tanggal Lahir:</strong> ${dob}</span><br/>
        <span><strong>Jenis Kelamin:</strong> ${gender}</span><br/>
        <span><strong>Pesan:</strong> ${message}</span><br/>
        <span><strong>Waktu:</strong> ${datetime}</span><br/>
    `;
};

// Append the new result item to the results container
document.getElementById("results").appendChild(resultItem);

// Reset the form
document.getElementById("dataForm").reset();

document.querySelectorAll(".menu").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);
    window.scrollTo({
      top: targetElement.offsetTop,
      behavior: "smooth"
    });
  });
});
