

function addWords() {
	var input = document.getElementsByClassName("input")
	var fill = document.getElementsByClassName("fill")
	var story = document.getElementById("story")

	for(var i =0; i< fill.length; i++) {
		fill[i].innerText = input[i].value
		input[i].value = ""
	}

	story.style.display = "block"

	
}



