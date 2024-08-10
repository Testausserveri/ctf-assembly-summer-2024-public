<?php

$images = glob('gallery/*.{jpg,jpeg,png,gif}', GLOB_BRACE);

?><!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gridious Gallery</title>
<style>
    body {
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 0;
    }

    header {
        background-color: #333;
        color: white;
        padding: 1em;
        text-align: center;
    }

    main {
        display: flex;
        justify-content: space-around;
        padding: 1em;
    }

    section {
        flex: 1;
        padding: 1em;
    }

    img {
        display: block;
        margin: 0 auto;
        max-width: 100%;
    }

    form {
        display: flex;
        justify-content: space-between;
    }

    input {
        flex: 1;
        margin-right: 1em;
    }

    button {
        background-color: #333;
        border: none;
        color: white;
        padding: 0.5em 1em;
    }
    .grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        gap: 1rem;
    }
</style>
</head>
<body>
    <header>
        <h1>Gridious Gallery</h1>
    </header>
    <main>
        <section>
            <h2>Gallery</h2>
            <div class="grid">
            <?php foreach ($images as $image): ?>
                <a target="_blank" href="download.php?file=<?= $image ?>">
                    <img src="/<?= $image ?>" alt="">
                </a>
            <?php endforeach; ?>
            </div>
        </section>
        <section>
            <h2>Upload</h2>
            <form action="upload.php" method="post" enctype="multipart/form-data">
                <input type="file" name="file" required>
                <button type="submit">Upload</button>
            </form>
        </section>
</body>
</html>