$(document).ready(function() {
	applyOverlayListeners();
});

function applyOverlayListeners() {
	$("#intro-overlay").click(function() {
		$("#intro-overlay").fadeOut(500);
	});

	$("#article-1").click(function() {
		$("#overlay-1").css("display", "block");
		$("#overlay-1 span").click(function() {
			$("#overlay-1").css("display", "none");
		});
	});

	$("#article-2").click(function() {
		$("#overlay-2").css("display", "block");
		$("#overlay-2 span").click(function() {
			$("#overlay-2").css("display", "none");
		});
	});

	$("#article-3").click(function() {
		$("#overlay-3").css("display", "block");
		$("#overlay-3 span").click(function() {
			$("#overlay-3").css("display", "none");
		});
	});

	$("#article-4").click(function() {
		$("#overlay-4").css("display", "block");
		$("#overlay-4 span").click(function() {
			$("#overlay-4").css("display", "none");
		});
	});
}