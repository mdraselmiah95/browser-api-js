console.log("Please understand");
// alert("Something is coming");
const maComing = () => {
  alert("Please someone coming");
};

const askPicnic = () => {
  const response = confirm("Are you going to picnic?");
  console.log(response);
  if (response === true) {
    alert("Send me money via Bkash");
  } else {
    console.log("You have to wait.");
  }
};
