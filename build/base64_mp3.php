<?php

$raw = file_get_contents("../jpegcam/shutter.mp3");
echo base64_encode($raw);
