function startTimer(){
    var counter = 30;
    setInterval(function() {
      counter--;
      if (counter >= 0) {
        span = document.getElementById("count");
        span.innerHTML = counter;
      }
      if (counter === 0) {
          alert('Quiz is now over!');
          clearInterval(counter);
      }
    }, 1000);
  }
  function start()
  {
      document.getElementById("count").style="color:black";
      startTimer();
      questions()
  };

  //Three questions for quiz
  var questions = [
{
 question: "which file do you put all detailed info about your site on?",
 answers, 
 
    a: "CSS",
    b: "HTML",
    c: "Javascript",
    answer:"B"
},
{
    Question:"What command takes my data from my local cpu to the remote github repository",
answers,
a: "Git pull",
b: "git fetch",
c: "git push",
answer: "C"
},
{
Question: "What browser works best to check on our code?",
answers,
a: "Google Chrome",
b: "Safari",
c: "mozilla firefox",
}]

