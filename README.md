# heroku-to-local-tunnel
![GitHub Repo stars](https://img.shields.io/github/stars/sabbir-21/heroku-to-local-tunnel?color=blue&style=flat)
![GitHub forks](https://img.shields.io/github/forks/sabbir-21/heroku-to-local-tunnel?color=green&style=flat)
![GitHub issues](https://img.shields.io/github/issues/sabbir-21/heroku-to-local-tunnel)
![GitHub closed issues](https://img.shields.io/github/issues-closed/sabbir-21/heroku-to-local-tunnel)
![GitHub pull requests](https://img.shields.io/github/issues-pr/sabbir-21/heroku-to-local-tunnel)
![GitHub closed pull requests](https://img.shields.io/github/issues-pr-closed/sabbir-21/heroku-to-local-tunnel)
![GitHub contributors](https://img.shields.io/github/contributors/sabbir-21/heroku-to-local-tunnel?style=flat)
![GitHub repo size](https://img.shields.io/github/repo-size/sabbir-21/heroku-to-local-tunnel?color=red)
![GitHub commit activity](https://img.shields.io/github/commit-activity/m/sabbir-21/heroku-to-local-tunnel)
![GitHub](https://img.shields.io/github/license/sabbir-21/heroku-to-local-tunnel)

 A personal localtunnel hosted on heroku to serve local machine as spublic server

## Features

- Tunnel your localhost to heroku public url
- ngrok / localtunnel alternative
- Raspberry Pi server host
- Raspberry Pi camera server host

Note that

> Only the server-app folder need to be hosted
> client-app folder for local machine

# Deploy
Deploy Your Own server

### Heroku
[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/sabbir-21/heroku-to-local-tunnel/tree/main/server-app)

Note: `First Fork Then Click On Deploy Button!`

### Self Host

- change directory to server-app
```cd .\server-app```
- Initialize node
```npm init```
- Install express
```npm install express```
- Install socket.io
```npm install socket.io```
- Install body-parser
```npm install body-parser```
## Packages List

| Package | command |
| ------ | ------ |
| For server-app |
| Express | npm install express |
| Socket.io | npm install socket.io |
| body-parser | npm install body-parser |
| For Client-app |
| Socket.io-client | npm install socket.io-client |
| superagent | npm install superagent |