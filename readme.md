# Vue.js 2 JWT Authentication

## Disclaimer
This is just a reworked example of https://github.com/auth0-blog/vue-jwt-authentication for Vue 2 and Axios
For original article or if you want Vue 1 version please navigate to: https://auth0.com/blog/build-an-app-with-vuejs/

-----

This example shows how to do JWT authentication in Vue.js apps. It uses Auth0's [nodejs-jwt-authentication-sample](https://github.com/auth0/nodejs-jwt-authentication-sample), a NodeJS backend that serves Chuck Norris quotes.

## Installation

Clone the repo and then install the server submodule and dependencies.

```bash
git submodule update --init
cd server
yarn
cd ..
yarn
```

Once the application scripts are in place, start the server (which will provide the quotes) using:

```bash
cd server
yarn start
```

Afterwards, open a second Terminal window and run the [webpack development server](http://webpack.github.io/docs/webpack-dev-server.html). It will watch for changes with **hot reloading**:

```bash
yarn run dev
```

## What is Auth0?

Auth0 helps you to:

* Add authentication with [multiple authentication sources](https://docs.auth0.com/identityproviders), either social like **Google, Facebook, Microsoft Account, LinkedIn, GitHub, Twitter, Box, Salesforce, amont others**, or enterprise identity systems like **Windows Azure AD, Google Apps, Active Directory, ADFS or any SAML Identity Provider**.
* Add authentication through more traditional **[username/password databases](https://docs.auth0.com/mysql-connection-tutorial)**.
* Add support for **[linking different user accounts](https://docs.auth0.com/link-accounts)** with the same user.
* Support for generating signed [Json Web Tokens](https://docs.auth0.com/jwt) to call your APIs and **flow the user identity** securely.
* Analytics of how, when and where users are logging in.
* Pull data from other sources and add it to the user profile, through [JavaScript rules](https://docs.auth0.com/rules).

## Create a Free Auth0 Account

1. Go to [Auth0](https://auth0.com) and click Sign Up.
2. Use Google, GitHub or Microsoft Account to login.

## Issue Reporting

If you have found a bug or if you have a feature request, please report them at this repository issues section. Please do not report security vulnerabilities on the public GitHub issue tracker. The [Responsible Disclosure Program](https://auth0.com/whitehat) details the procedure for disclosing security issues.

## Author of version for Vue 2
[Stefan Jarina](jarina.cz)

## Author of original for Vue 1

[Auth0](auth0.com)

## License

This project is licensed under the MIT license. See the [LICENSE](LICENSE) file for more info.
