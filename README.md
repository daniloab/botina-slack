# botina-slack
bot for slack

# Creating the BOT App
First of all you need to create the app and install in your channel. Use the manifest below to replicate the bot in your slack channel. Follow the documentation [here](https://api.slack.com/reference/manifests)

```yml
display_information:
  name: Botina BOT
features:
  app_home:
    home_tab_enabled: false
    messages_tab_enabled: true
    messages_tab_read_only_enabled: false
  bot_user:
    display_name: Botina
    always_online: true
oauth_config:
  scopes:
    bot:
      - channels:history
      - channels:join
      - channels:read
      - chat:write
      - commands
      - im:history
      - users:read
settings:
  event_subscriptions:
    bot_events:
      - message.channels
      - message.im
  interactivity:
    is_enabled: true
  org_deploy_enabled: false
  socket_mode_enabled: true
  token_rotation_enabled: false
```

## Running the BOT
to run the bot configs the envs, install dependencies and make sure it is installed in your channel

### config the envs specific for your slack channel:
- [ ] token
- [ ] app token
- [ ] signing token

### install the dependencies
```bash
yarn
```

## having the tokens already configured run the bot with
```bash
yarn start
```

> dont forget to install the bot in your slack
