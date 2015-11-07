function playAnimation() {
	$(this).remove();
	$("#sun").animate({left: "1600px"}, 5000);
	$("#word").css({"text-shadow": "rgb(0, 0, 0) -15px 15px 5px",
					"transition-duration": "5s",
					"transition-delay": "1.2s"});
	setTimeout(function() {
		//$("#repeat").addClass("visible").removeClass("hidden");
	}, 5000);
}

function resetAnimation() {
	$("#sun").animate({left: "-100px"});
	$("#word").css({"text-shadow": "rgb(0,0,0) 15px 15px 5px",
					"transition-duration": "0.25s",
					"transition-delay": "0.25s"});
}

$('#play').on("click", function() {
	playAnimation();
});

$('#repeat').on("click", function() {
	resetAnimation();
});