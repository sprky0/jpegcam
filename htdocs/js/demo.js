define("demo", ["jpegcam/webcam"], function(cam) {

	function my_local_callback_function(response) {
		alert("HI!");
	}

	var target = document.getElementById("webcam_area");

	cam.set_shutter_sound_url('js/jpegcam/shutter.mp3');
	cam.set_swf_url('js/jpegcam/webcam.swf');

	cam.set_api_url('test.php');
	cam.set_hook('onComplete', my_local_callback_function);

	target.innerHTML = cam.get_html(640, 480);

	document.getElementById("button_snap").onclick = function() {
		cam.snap();
	};

	document.getElementById("button_freeze").onclick = function() {
		cam.freeze();
	};
	
	document.getElementById("button_configure").onclick = function() {
		cam.configure();
	};

}); 