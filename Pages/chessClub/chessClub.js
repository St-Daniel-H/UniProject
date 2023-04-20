// Custom function to format date in following format
// dd-mm-yyyy
// dd/mm/yyyy
// dd.mm.yyyy
function dateFormater(date, separator) {
  var day = date.getDate();
  // add +1 to month because getMonth() returns month from 0 to 11
  var month = date.getMonth() + 1;
  var year = date.getFullYear();

  // show date and month in two digits
  // if month is less than 10, add a 0 before it
  if (day < 10) {
    day = "0" + day;
  }
  if (month < 10) {
    month = "0" + month;
  }

  // now we have day, month and year
  // use the separator to join them
  return day + separator + month + separator + year;
}

var now = new Date();
console.log(dateFormater(now, "/"));
let myLibrary = [
  {
    id: 12,
    time: "12/2/2021",
    message: "hey",
  },
];
var list = document.createElement("ul");
document.getElementById("renderContent").appendChild(list);
list.setAttribute("id", "list");
function announcement(message, time, key) {
  (this.message = message), (this.time = time), (this.id = key);
}
const remove = (key) => {
  console.log(key);
  var a = document.getElementById("list");
  var item = document.getElementById(key);
  a.removeChild(item);
  const indexOfObject = myLibrary.findIndex((object) => {
    return object.id === key;
  });
  myLibrary.splice(indexOfObject, 1);
  console.log(myLibrary);
};

list.innerHTML = myLibrary
  .map((announcement, key) => {
    return (
      "<div id=" +
      key +
      " class ='messageCard'><div class='messageCardinfo'><div class='messageCardleft'><img class='cardImage' src='../../images/userProfilePicture.png'></div><div class='messageCardright'><h3>" +
      "daniel" +
      "</h3><p>" +
      announcement.time +
      "</p></div></div><div class='messageCardmessage'>" +
      announcement.message +
      "</div></div>"
    );
  })
  .join("");
function createBook() {
  let messageValue = document.getElementById("messageInput").value;
  var time = new Date();
  if (messageValue != "") {
    console.log("hi");
    let newAnnouncement = new announcement(
      messageValue,
      dateFormater(time, "/")
    );
    console.log(newAnnouncement.message);
    myLibrary.unshift(newAnnouncement);

    list.innerHTML = myLibrary
      .map((announcement, key) => {
        return (
          "<div id=" +
          key +
          " class ='messageCard'><div  class='messageCardinfo'><div class='messageCardleft'><img class='cardImage' src='../../images/userProfilePicture.png'></div><div class='messageCardright'><h3>" +
          "daniel" +
          "</h3><p>" +
          announcement.time +
          "</p></div></div><div class='messageCardmessage'>" +
          announcement.message +
          "</div></div>"
        );
      })
      .join("");

    document.getElementById("messageInput").value = "";
    console.log(myLibrary);
  } else return;
}
