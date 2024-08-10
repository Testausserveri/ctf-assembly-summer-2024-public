<?php

// Upload file

if ($_SERVER['REQUEST_METHOD'] != 'POST') {
    die('Invalid request');
}

if (empty($_FILES['file'])) {
    die('No file uploaded');
}

$file = $_FILES['file'];
if ($file['error'] != 0) {
    die('Upload error: ' . $file['error']);
}

// Check file size
if ($file['size'] > 1024 * 1024) {
    die('File too large');
}

// Tidy the extension
$name = $file['name'];

// Check for existing file
if (file_exists(__DIR__ . '/gallery/' . $name)) {
    die('File already exists: ' . $name);
}

$staging_path = __DIR__ . '/../staging/' . $name;
if (!move_uploaded_file($file['tmp_name'], $staging_path)) {
    die('Upload moving failed');
}

// Check file type
$allowed_types = ['image/jpeg' => '.jpg', 'image/png' => '.png', 'image/gif' => '.gif'];
$type = trim(shell_exec('file --mime-type -b ' . $staging_path));

if (!array_key_exists($type, $allowed_types)) {
    die('Invalid file type: ' . $type);
}

$filename_parts = explode('.', basename($name));

if (count($filename_parts) > 1) {
    // Pop single element off the end if there are multiple
    $extension = array_pop($filename_parts);
    $name = implode('.', $filename_parts) . '.' . $allowed_types[$type];
} else {
    $name .= $allowed_types[$type];
}

// Check for admin permission
if (empty($_SESSION['admin'])) {
    die('Admin permission to upload required');
}


// Move file to gallery, keep staged files for further checking
if (!rename($staging_path, __DIR__ . '/gallery/' . $name)) {
    die('Gallery moving failed');
}

header('Location: /');
