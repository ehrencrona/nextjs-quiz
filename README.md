# NextJS Quiz

Small quiz app based on Next JS fetching questions from opentdb.com.

Quiz data is preloaded by the server so no XHR is required to start the quiz (the request you will see in the network console is actually a pre-fetch of a second set of questions in case the user wants to restart once done).

[Tests](./__tests__) are based on React Testing Library and test at a component level.

![Screenshot](./screenshot.png)
