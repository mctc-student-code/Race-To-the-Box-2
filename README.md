# Hello WebSockets

Simple collaborative speed drawing app. A prototype, thrown together pretty quickly, and definitely has bugs and various todos. 

Draw a picture in the canvas, and what you draw is added to a shared canvas, between all the connected clients. But there's a timer - after 20 seconds, the drawing is cleared. Mostly as a lazy way of avoiding dealing with data storage on the server :) 

First app using sockets.io. Inspired by <a href="http://code-and.coffee/post/2015/collaborative-drawing-canvas-node-websocket/">http://code-and.coffee/post/2015/collaborative-drawing-canvas-node-websocket/</a> and helped out by this useful tutorial <a href="">https://github.com/onedesign/express-socketio-tutorial</a> for incorporating sockets.io into an app generated by the express generator.

Clone, `npm install`, `npm start`, and open the app in a couple of browser windows (preferably Chrome) to test.

To do 
- deal with page load correctly - make sure everything is ready
- error handling
- tidy UI
- better color selecting method. Color picker input only works on Chrome.
- Handle different screen sizes
- .....
