var donors = [
  'Tuna Turner',
  'Sealena Gomez',
  'Stingray Charles',
  'SpongeBob Marley',
  'Squid Barrett',
  'Samuel Eel Jackson',
  'Dwayne \'The Rock\' Lobster',
  'Paul McCarpney',
  'Austin Moray-les',
  'Fish Guttman',
  'Kate Giller',
  'David Buoy',
  'Carrie Fisher',
  'John Crab'
]
var sortedDonors = donors.sort();

var donorHTML = "";
for (var i = 0; i < sortedDonors.length; i++) {
  donorHTML = donorHTML + "<li class='text-center fw-bold'><h5>" + sortedDonors[i] + "</h5></li>"
}

document.getElementById('donorList').innerHTML = donorHTML