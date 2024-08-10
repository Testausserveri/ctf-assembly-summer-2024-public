# Hackers' Chosen Drink

Creator: Eemil Sinkko

Data hidden in exif fields

## Solution

1. Extract thumbnail of the image
2. Extract the artist from the thumbnail
3. Turn the base64 into an image

As a oneliner using exiftool and mpv for viewing:
`exiftool -b -ThumbnailImage tsry-hack3rs.jpg | exiftool -Artist -b - | base64 -d | mpv --pause -`
