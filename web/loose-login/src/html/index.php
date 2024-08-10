<?php

require_once __DIR__ . '/../common.php';

// If session is valid, navigate to home page
if (!empty($_SESSION['user'])) {
    render('home');
} else {
    render('index');
}
