<?php

if (isset($_GET['file'])) {
    if (strpos($_GET['file'], '..') !== false) {
        die('Invalid file');
    }

    $file = __DIR__ . '/' . $_GET['file'];

    if (file_exists($file)) {
        header('Content-Type: application/octet-stream');
        header('Content-Disposition: attachment; filename="' . basename($file) . '"');
        readfile($file);
        exit;
    }
}