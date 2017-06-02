$(document).ready(function() {

	//hide quiz & results div until game is over
	$("#results").hide();
	$("#quiz").hide();

	var quiz = {
		question: ["Who is Jim's crush in the office?", 
					"Which of Angela's cats did Dwight kill?", 
					"Who does Michael hate in the office?",
					"Where did Michael go on vacation with Jan?",
					"Who in the office does not have kids?",
					"Who in the office graduated from the same high school?",
					"Who in the office runs a bed and breakfast from his/her home?"],
		answers : {a1 : ["Pam", "Kelly", "Angela", "Ryan"], 
					a2 : ["Sprinkles", "Mr. Ash", "Princess Lady", "Garbage"], 
					a3 : ["Ryan", "Toby", "Jim", "Creed"],
					a4: ["The Bahamas", "Sandals, Jamaica", "Cancun, Mexico", "Paris, France"],
					a5: ["Toby", "Stanley", "Michael", "Meredith"],
					a6: ["Toby and Phyllis", "Jim and Pam", "Michael and Phyllis", "Ryan and Kelly"],
					a7: ["Dwight", "Creed", "Stanley", "Meredith"]},
		correctAnswers : ["Pam", "Sprinkles", "Toby", "Sandals, Jamaica", "Michael", "Michael and Phyllis", "Dwight"]
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
				fourthQuestion();
			} else {
				alert("WRONG!!!");
				lossCounter++;
				fourthQuestion();
			}
		})

		if (timer.time === 0) {
			alert("You ran out of time!");
			unanswered++;
			fourthQuestion();
		}
	} //end of thirdQuestion function

	function fourthQuestion() {
		timer.time = 30;
		countdown();
		$("#buttons").empty();

		$("#question").html(quiz.question[3]);

		for (var i = 0; i < quiz.answers.a4.length; i++) {
			var a = $("<button>");
			a.addClass("choices");
			a.attr("data-name", quiz.answers.a4[i]);
			a.text(quiz.answers.a4[i]);
			$("#buttons").append(a);
		}

		$(".choices").click(function(event){
			var userGuess = $(this).text();
			console.log(userGuess);

			if (userGuess === quiz.correctAnswers[3]) {
				winCounter++;
				console.log(winCounter);
				alert("You got it right!");
				fifthQuestion();
			} else {
				alert("WRONG!!!");
				lossCounter++;
				fifthQuestion();
			}
		
		})

		if (timer.time === 0) {
			alert("You ran out of time!");
			unanswered++;
			fifthQuestion();
		}
	} //end of fourthQuestion function

	function fifthQuestion() {
		timer.time = 30;
		countdown();
		$("#buttons").empty();

		$("#question").html(quiz.question[4]);

		for (var i = 0; i < quiz.answers.a5.length; i++) {
			var a = $("<button>");
			a.addClass("choices");
			a.attr("data-name", quiz.answers.a5[i]);
			a.text(quiz.answers.a5[i]);
			$("#buttons").append(a);
		}

		$(".choices").click(function(event){
			var userGuess = $(this).text();
			console.log(userGuess);

			if (userGuess === quiz.correctAnswers[4]) {
				winCounter++;
				console.log(winCounter);
				alert("You got it right!");
				sixthQuestion();
			} else {
				alert("WRONG!!!");
				lossCounter++;
				sixthQuestion();
			}
		
		})

		if (timer.time === 0) {
			alert("You ran out of time!");
			unanswered++;
			sixthQuestion();
		}
	} //end of fifthQuestion function

	function sixthQuestion() {
		timer.time = 30;
		countdown();
		$("#buttons").empty();

		$("#question").html(quiz.question[5]);

		for (var i = 0; i < quiz.answers.a6.length; i++) {
			var a = $("<button>");
			a.addClass("choices");
			a.attr("data-name", quiz.answers.a6[i]);
			a.text(quiz.answers.a6[i]);
			$("#buttons").append(a);
		}

		$(".choices").click(function(event){
			var userGuess = $(this).text();
			console.log(userGuess);

			if (userGuess === quiz.correctAnswers[5]) {
				winCounter++;
				console.log(winCounter);
				alert("You got it right!");
				seventhQuestion();
			} else {
				alert("WRONG!!!");
				lossCounter++;
				seventhQuestion();
			}
		
		})

		if (timer.time === 0) {
			alert("You ran out of time!");
			unanswered++;
			seventhQuestion();
		}
	} //end of sixthQuestion function

	function seventhQuestion() {
		timer.time = 30;
		countdown();
		$("#buttons").empty();

		$("#question").html(quiz.question[6]);

		for (var i = 0; i < quiz.answers.a7.length; i++) {
			var a = $("<button>");
			a.addClass("choices");
			a.attr("data-name", quiz.answers.a7[i]);
			a.text(quiz.answers.a7[i]);
			$("#buttons").append(a);
		}

		$(".choices").click(function(event){
			var userGuess = $(this).text();
			console.log(userGuess);

			if (userGuess === quiz.correctAnswers[6]) {
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
	} //end of seventhQuestion function

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