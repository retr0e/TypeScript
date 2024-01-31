function canDrive(usr) {
  console.log("Imię użykownika: ", usr.name);

  if (usr.age >= 16) {
    console.log("Może prowadzić auto");
  } else {
    console.log("nie ma prawa kierować");
  }
}

const tom = {
  name: "Tomek",
};

canDrive(tom);
