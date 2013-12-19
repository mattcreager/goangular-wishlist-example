goangular-wishlist-example
==========================

You can see the example running on Heroku [here](http://secret-citadel-9867.herokuapp.com/).

![wish-list screenshot](screenshot.png)

## Running the Example

### Sign up for GoInstant

First, [sign up](http://goinstant.com/signup) for GoInstant and create an app. Let’s call it “wishlist.”

### Install the Source Files & Configure

First we'll clone the example repository:

```bash
$ git clone git@github.com:mattcreager/goangular-wishlist-example.git && cd goangular-wishlist-example/
```

Now, we’ll need to create a personal copy of the `public/config.example.js` file and fill it in with our application URL. For the example to work, we’ll need to rename it to `public/js/config.js`:

```bash
$ cp public/js/config.example.js public/js/config.js
```

We’ll retrieve our application URL from the [GoInstant dashboard](https://goinstant.com/dashboard) and replace the one in `config.js`.

The GoInstant application URL looks something like this: `https://goinstant.net/YOURACCOUNT/YOURAPPLICATION`, so the `config.js` should look something like:

```js
window.CONFIG = {
  connectUrl: 'https://goinstant.net/YOURAPP/YOURACCOUNT'
};
```

### Start the Wish-List App

Finally run NPM install and start our trendy [harpjs](http://harpjs.com/) server:

```bash
$ npm install && npm start
```
