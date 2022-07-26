const getLicenseBadge = (license) => {
  if (license === "MIT") {
    return "https://img.shields.io/badge/MIT-license-green";
  }

  if (license === "APACHE 2.0") {
    return "https://img.shields.io/badge/Apache-license-green";
  }

  if (license === "GPL 3.0") {
    return "https://img.shields.io/eclipse-marketplace/l/notepad4e?label=GPL%203.0";
  }

  if (license === "BSD 3") {
    return "https://img.shields.io/badge/BSD3-license-green";
  }
};

module.exports = getLicenseBadge;

const getIceCream = (iceCreamFlavour) => {
  console.log(iceCreamFlavour);
};

const myIceCream = "pistachio";
getIceCream(myIceCream);
