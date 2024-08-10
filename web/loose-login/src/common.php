<?php

session_start();
$current_time = time();

// Ratelimit requests
if (!empty($_SESSION['ratelimit_block'])) {
    if ($_SESSION['ratelimit_block'] > $current_time) {
        die('<center>Ratelimited, try again in a minute</center>');
    } else {
        unset($_SESSION['ratelimit_block']);
        $_SESSION['ratelimit'] = [];
    }

} else if (isset($_SESSION['ratelimit']) && in_array($current_time, $_SESSION['ratelimit'], true)) {
    // No multiple requests per second
    die('<center>Whoah, slow down there!</center>');
} else {
    if (!isset($_SESSION['ratelimit'])) {
        $_SESSION['ratelimit'] = [];
    }

    // Ratelimit is 20 requests per minute, tracked in array of timestamps
    if (count($_SESSION['ratelimit']) >= 20) {
        $_SESSION['ratelimit_block'] = $current_time + 60;
        $_SESSION['ratelimit'] = [];
        die('<center>Ratelimited, try again in a minute</center>');
    }

    $_SESSION['ratelimit'][] = $current_time;

    // Remove timestamps older than 1 minute
    foreach ($_SESSION['ratelimit'] as $key => $timestamp) {
        if ($timestamp < $current_time - 60) {
            unset($_SESSION['ratelimit'][$key]);
        }
    }
}

// Error messages
if (!isset($_SESSION['error'])) {
    $_SESSION['error'] = [];
}

function load_users() {
    $users = [];
    $file = fopen(__DIR__ . '/html/users.txt', 'r');
    while ($line = fgets($file)) {
        $line = trim($line);
        if (empty($line)) {
            continue;
        }
        [$username, $hash] = explode(':', $line);
        $users[$username] = $hash;
    }
    fclose($file);
    return $users;
}

function render($template) {
    if (!file_exists(__DIR__ . '/template/' . $template . '.phtml')) {
        // $template = null;
    } else if (preg_match('/^[a-z0-9]+$/', $template) === 0) {
        $_SESSION['error'][] = 'Invalid page template';
        $template = null;
    }

    require_once __DIR__ . '/template/_base.phtml';
}

function redirect($location) {
    // Remove $current_time to prevent slowdown error from same second
    if (($key = array_search(time(), $_SESSION['ratelimit'])) !== false) {
        unset($_SESSION['ratelimit'][$key]);
    }
    header($location);
}

function error($message) {
    // Add message to error queue and render empty page
    $_SESSION['error'][] = $message;
}