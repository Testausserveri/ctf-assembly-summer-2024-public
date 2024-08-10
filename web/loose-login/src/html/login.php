<?php

require_once __DIR__ . '/../common.php';

// Ensure this is not the first visit
if (count($_SESSION['ratelimit']) <= 1) {
    error('Normal users only, please');
}

function check_password_validity($password) {
    // Requirements:
    // - At least 50 characters
    // - At least 1 uppercase letter
    // - At least 1 lowercase letter
    // - At least 1 digit
    // - At least 1 special character

    if (strlen($password) < 50) {
        return false;
    }

    if (!preg_match('/[A-Z]/', $password)) {
        return false;
    }

    if (!preg_match('/[a-z]/', $password)) {
        return false;
    }

    if (!preg_match('/[0-9]/', $password)) {
        return false;
    }

    if (!preg_match('/[^A-Za-z0-9]/', $password)) {
        return false;
    }

    return true;
}

// Set the session if the username and password are correct
if ($_SERVER['REQUEST_METHOD'] != 'POST') {
    error('Invalid request method');
} else if (empty($_POST['username']) || empty($_POST['password'])) {
    error('Username and password are required');
} else if (!check_password_validity($_POST['password'])) {
    error('Password requirements not met');
} else {
    $users = load_users();

    if (!array_key_exists($_POST['username'], $users)) {
        error('Invalid username');
    } else if (md5($_POST['password']) != $users[$_POST['username']]) {
        error('Invalid password');
    } else {
        $_SESSION['user'] = $_POST['username'];
    }
}

redirect('Location: /');
