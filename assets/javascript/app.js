$(document).ready(function() {

	//hide quiz & results div until game is over
	$("#results").hide();
	$("#quiz").hide();

	var quiz = {
		question: ["Who is Jim's crush in the office?", 
					"Which of Angela's cats did Dwight kill?", 
					"Who does Michael hate in the office?"],
		answers : {a1 : ["Pam", "Kelly", "Angela", "Ryan"], 
					a2 : ["Sprinkles", "Mr. Ash", "Princess Lady", "Garbage"], 
					a3 : ["Ryan", "Toby", "Jim", "Creed"]},
		correctAnswers : ["Pam", "Sprinkles", "Toby"]
	};

	var winCounter = 0;
	var lossCounter = 0;
	var unanswered = 0;

	var clockRunning = false;
	var intervalId;
	var timer = {

		time: 30,

		count: function() {
			timer.time--;
			$("#timer").html(timer.time);
		}


	}
	var countdown = function(){
		if (!clockRunning) {
			clockRunning = true;
			intervalId = setInterval(function (){
				timer.count();

				if (timer.time === 0) {
					clearInterval(intervalId);
				}
			}, 1000);
		}
	}
	//when user clicks start button
	$("#start").click(function(){
		console.log("#start");
		$("#quiz").show();
		startGame();

	})//end of start button click function


	var startGame = function() {
		console.log("start");
		$("#start").hide();
		firstQuestion();
		countdown();
	
	} //end of start game function
		
	function firstQuestion() {

		$("#question").html(quiz.question[0]);

		for (var i = 0; i < quiz.answers.a1.length; i++) {
			var a = $("<button>");
			a.addClass("choices");
			a.attr("data-name", quiz.answers.a1[i]);
			a.text(quiz.answers.a1[i]);
			$("#buttons").append(a);
		}

		$(".choices").click(function(event){
			var userGuess = $(this).text();
			console.log(userGuess);

			if (userGuess === quiz.correctAnswers[0]) {
				winCounter++;
				console.log(winCounter);
				alert("You got it right!");
				secondQuestion();
			} else {
				alert("WRONG!!!");
				lossCounter++;
				secondQuestion();
			}
		
		})

		if (timer.time === 0) {
			alert("You ran out of time!");
			unanswered++;
			secondQuestion();
		}
	} //end of firstQuestion function

	function secondQuestion() {
		timer.time = 30;
		countdown();
		$("#buttons").empty();

		$("#question").html(quiz.question[1]);

		for (var i = 0; i < quiz.answers.a2.length; i++) {
			var a = $("<button>");
			a.addClass("choices");
			a.attr("data-name", quiz.answers.a2[i]);
			a.text(quiz.answers.a2[i]);
			$("#buttons").append(a);
		}

		$(".choices").click(function(event){
			var userGuess = $(this).text();
			console.log(userGuess);

			if (userGuess === quiz.correctAnswers[1]) {
				winCounter++;
				console.log(winCounter);
				alert("You got it right!");
				thirdQuestion();
			} else {
				alert("WRONG!!!");
				lossCounter++;
				thirdQuestion();
			}
		
		})

		if (timer.time === 0) {
			alert("You ran out of time!");
			unanswered++;
			thirdQuestion();
		}
	} //end of secondQuestion function

	function thirdQuestion() {
		timer.time = 30;
		countdown();
		$("#buttons").empty();

		$("#question").html(quiz.question[2]);

		for (var i = 0; i < quiz.answers.a3.length; i++) {
			var a = $("<button>");
			a.addClass("choices");
			a.attr("data-name", quiz.answers.a3[i]);
			a.text(quiz.answers.a3[i]);
			$("#buttons").append(a);
		}

		$(".choices").click(function(event){
			var userGuess = $(this).text();
			console.log(userGuess);

			if (userGuess === quiz.correctAnswers[2]) {
				winCounter++;
				console.log(winCounter);
				alert("You got it right!");
				gameOver();
			} else {
				alert("WRONG!!!");
				lossCounter++;
				gameOver();
			}
		})

		if (timer.time === 0) {
			alert("You ran out of time!");
			unanswered++;
			gameOver();
		}
	} //end of thirdQuestion function


	function gameOver(){
		$("#results").show();
		$("#quiz").html($("#results"));

		$("#correct").html(winCounter);
		$("#incorrect").html(lossCounter);
		$("#unanswered").html(unanswered);
		$("#restart").click(function(){
			console.log("restart");
			reset();
		}) 

	}

	function reset(){
		
		winCounter = 0;
		lossCounter = 0;
		startGame();
	}

}) //end of document.ready function