# bravado-quest

Check app online: https://bravado.now.sh/

¯\\\_(ツ)\_/¯

I do not want to deploy the entire Rails application for a single API call. So, '/api/users' implemented using serverless function. 

## Layout design

Can be found here: https://www.figma.com/file/PyncPYa1rpOxRooTdfvgxHRN/Bravado-Quest

![Image of Layout](https://s3.amazonaws.com/bravado-images-production/Desktop.png)

## Expected steps

You are suggested to clone this repo and then implement layout according to design above and a single page application based on Vue and its modules. Application should be running on a project root (`/`). The sample data to use inside application should be taken using AJAX call from the users endpoint (`/users`).

Please note, the default app state contains all profile cards. When user starts typing, the results should be filtered in realtime, highlighting the matching string.

## The task highlights

* General SPA application performance, including searching, scrolling and highlighting speed.
* Quality of Vue single file components (SFC)
* HTML(JSX) and CSS quality
* JS code quality
* Search should be stateful (using browser url e.g. `/search/Boris`)
* Application should be published online for testing purposes 
* Changes should be published in a fork