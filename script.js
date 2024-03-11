
document.getElementById("Add").addEventListener("click", function () {
  var title = document.getElementById("title").value;
  var date = document.getElementById("date").value;

  // Check if both title and date are filled in
  if (!title || !date) {
      alert("Fill out all of the information");
      return; // Exit function if any information is missing
  }

  var selectedDate = new Date(date);

  // Get the day of the week (0=Sunday, 1=Monday, ..., 6=Saturday)
  var days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
  ];
  var dayOfWeek = days[selectedDate.getDay()];

  // Format the date to display in the format "Day, Month Date, Year"
  var formattedDate =
      selectedDate.toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
      }) +
      "," +
      dayOfWeek;

  // Create a new div to display appointment information
  var appointmentDiv = document.createElement("div");
  appointmentDiv.className = "appointment";

  appointmentDiv.innerHTML = '<i class="fa fa-star"></i><strong>' + title + "</strong><p>Date: " + formattedDate + "</p>";

  // Append the new appointment div to the appointment box
  document.getElementById("appointmentBox").appendChild(appointmentDiv);

  // Save the appointment to local storage
  var appointments = JSON.parse(localStorage.getItem("appointments")) || [];
  appointments.push({
      title: title,
      date: date,
      formattedDate: formattedDate,
  });
  localStorage.setItem("appointments", JSON.stringify(appointments));

  // star icon
  var starIcon = appointmentDiv.querySelector('.fa-star');
  starIcon.addEventListener('click', function () {
      starIcon.classList.toggle('starred');
  });

  // Clear input fields after adding appointment
  document.getElementById("title").value = "";
  document.getElementById("date").value = "";
});

// Load appointments from local storage when the page loads
window.addEventListener("DOMContentLoaded", function () {
  var appointments = JSON.parse(localStorage.getItem("appointments")) || [];
  appointments.forEach(function (appointment) {
      var appointmentDiv = document.createElement("div");
      appointmentDiv.className = "appointment";
      appointmentDiv.innerHTML = '<i class="fa fa-star"></i><strong>' + appointment.title + "</strong><p>Date: " + appointment.formattedDate + "</p>";
      document.getElementById("appointmentBox").appendChild(appointmentDiv);

      // star icon
      var starIcon = appointmentDiv.querySelector('.fa-star');
      starIcon.addEventListener('click', function () {
          starIcon.classList.toggle('starred');
      });
  });
});

//  when "Starred" button is clicked
var showAllBox = false;

document.getElementById("star").addEventListener("click", function () {
  console.log("clicked on starred button");
  var appointmentDivs = document.querySelectorAll('.appointment');

  appointmentDivs.forEach(function (div) {
      var starIcon = div.querySelector('.fa-star');
      if (showAllBox) {
          div.style.display = 'block';
      } else if (starIcon.classList.contains('starred')) {
          div.style.display = 'block';
      } else {
          div.style.display = 'none';
      }
  });
  showAllBox = !showAllBox;
});












// document.getElementById("Add").addEventListener("click", function () {
//   var title = document.getElementById("title").value;
//   var date = document.getElementById("date").value;

//    // Check if both title and date are filled in
//    if (!title || !date) {
//     alert("Fill out all of the information");
//     return; // Exit function if any information is missing
// }


//   var selectedDate = new Date(date);

//   // Get the day of the week (0=Sunday, 1=Monday, ..., 6=Saturday)
//   var days = [
//     "Sunday",
//     "Monday",
//     "Tuesday",
//     "Wednesday",
//     "Thursday",
//     "Friday",
//     "Saturday",
//   ];
//   var dayOfWeek = days[selectedDate.getDay()];

//   // Format the date to display in the format "Day, Month Date, Year"
 
//  var formattedDate =
//     selectedDate.toLocaleDateString("en-US", {
//       year: "numeric",
//       month: "long",
//       day: "numeric",
//     }) +
//     "," +
//     dayOfWeek;

//   // Create a new div to display appointment information
//   var appointmentDiv = document.createElement("div");
//   appointmentDiv.className = "appointment";

// appointmentDiv.innerHTML = '<i class="fa fa-star"></i><strong>' + title + "</strong><p>Date: " + formattedDate + "</p>";

//   // Append the new appointment div to the appointment box
//   document.getElementById("appointmentBox").appendChild(appointmentDiv);


//   // star icon
//   var starIcon = appointmentDiv.querySelector('.fa-star');
//   starIcon.addEventListener('click', function () {
//       starIcon.classList.toggle('starred');
//   });




//   // Clear input fields after adding appointment
//   document.getElementById("title").value = "";
//   document.getElementById("date").value = "";
// });


// // when we are click starred button 
// var showAllBox=false;

// document.getElementById("star").addEventListener("click", function () {
//   console.log("cliked on stared button")
//     var appointmentDivs = document.querySelectorAll('.appointment');

//     appointmentDivs.forEach(function (div) {
//         var starIcon = div.querySelector('.fa-star');
//         if(showAllBox){
//           div.style.display = 'block';
//         }
//         else if (starIcon.classList.contains('starred')) {
//             div.style.display = 'block';
//         } else{
//             div.style.display = 'none';
//         }
//     });
//     showAllBox=!showAllBox;
// });