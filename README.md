# Startup Grind - UI Challenge

Displays conversation thread with UI prioritized.

### Setup

1. `git clone https://github.com/jacobhamblin/startup-grind.git`
2. `npm install`
3. `npm run watch`
4. In another terminal: `cd dist && sudo python -m SimpleHTTPServer 80` or `python -m http.server 80` if on windows.
5. visit `localhost` in a browser.

### Tests

```
npm run test
```

### Assumptions

1. User is on Chrome, Safari, or Opera: I use webkit filters to change the color of various assets, inc. user avatar, the pencil, the show/hide child comments arrow, and the svg dots that pop while json is fetched. The assumption here is that the user is on Chrome or Safari or Opera, as IE and Firefox don't support them. caniuse.com says Firefox supports, but my quick test suggests otherwise. In production, it'd be worth opening an image editor and changing the color if IE and Firefox have significant browser share, but I figured for this demo the webkit filters would suffice.

2. User is on a modern browser: The style gets messy on IE 10, 9 and nothing is display on 8. Flexbox is probably the biggest culprit.

3. In production there would be a database to send the edit and delete POST requests, so the changes would persist through other browser sessions.

4. The json structure doesn't change: Probably a pretty typical assumption to make.
