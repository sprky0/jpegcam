<?php

$raw = file_get_contents("../htdocs/js/jpegcam/webcam.swf");
echo base64_encode($raw);
