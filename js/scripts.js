function playAnimation() {
	$("#sun").animate({left: "1600px"}, 5000);
	$("#word").css({"text-shadow": "rgb(0, 0, 0) -15px 15px 5px",
					"transition-duration": "5s",
					"transition-delay": "1.2s"});
	setTimeout(function() {
		$("#repeat").addClass("visible").removeClass("hidden");
	}, 5000);
}

function resetAnimation() {
	$("#sun").animate({left: "-100px"});
	$("#word").css({"text-shadow": "rgb(0,0,0) 15px 15px 5px",
					"transition-duration": "0.25s",
					"transition-delay": "0.25s"});
	setTimeout(function() {
			$("#play").addClass("visible").removeClass("hidden");
		}, 250);
}

$('#play').on("click", function() {
	$(this).addClass('hidden').removeClass('visible');
	playAnimation();
});

$('#repeat').on("click", function() {
	$(this).addClass('hidden').removeClass('visible');
	resetAnimation();
});