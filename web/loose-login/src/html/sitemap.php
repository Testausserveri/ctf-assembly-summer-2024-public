<?php

// Generate a sitemap from current directory

function show_directory($dir) {
    $files = glob($dir . '/*');
    echo '<ul>';
    foreach ($files as $file) {
        if (is_dir($file)) {
            show_directory($file);
        } else {
            echo "<li><a href=\"$file\">$file</a></li>";
        }
    }
    echo '</ul>';
}

echo '<pre>';
show_directory('.');
echo '</pre>';
