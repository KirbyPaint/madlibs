$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();

    inputs = ["name", "second name", "animal's name", "exclamation", "a verb", "a noun"]
    let answers = [];

    inputs.forEach(function(input) {
      let user = prompt("Please input " + input);
      answers.push(user);
    });

    /*const person1Input = prompt("Please enter your name");
    const person2Input = prompt("Please enter another name");
    const animalInput = prompt("Please enter an animal's name");
    const exclamationInput = prompt("Please enter an exclamation");
    const verbInput = prompt("Please enter a verb");
    const nounInput = prompt("Please enter a noun"); */



    $(".person1").text(answers[0]);
    $(".person2").text(answers[1]);
    $(".animal").text(answers[2]);
    $(".exclamation").text(answers[3]);
    $(".verb").text(answers[4]);
    $(".noun").text(answers[5]);

    $("#story").show();
  });
});