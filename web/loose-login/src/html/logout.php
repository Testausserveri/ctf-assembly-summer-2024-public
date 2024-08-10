<?php

require_once __DIR__ . '/../common.php';

// Clear session
$to_clear = ['user'];
foreach ($to_clear as $value) {
    unset($_SESSION[$value]);
}

redirect('Location: /');
