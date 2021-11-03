---
sidebar_position: 0
---

# Getting started with Discord Wellbeing

To get started with Discord Wellbeing you have to invite the bot to your server. You can invite it via our [invite link (https://bnder.net/@dwb)](https://bnder.net/@dwb).

## Inviting

:::caution

In order to invite a bot to your server, you need the "Manage Server" permission or have to be the owner of the server.

:::

Before a bot can be used on a Server it is necessary to invite the bot to the server you want it on. You do that by
visiting an [invite page](https://bnder.net/@dwb), hosted on Discords network.

### Bot invite link

A bot gets invited via a link. The invite link of the Discord Wellbeing looks similar to this:

:::tip

Make sure you are logged in to your Discord account.

:::

```
https://discord.com/oauth2/authorize?client_id=602460094940184587&scope=bot+applications.commands&permissions=85056
```

The structure of the link is the following:

- `https://` The protocol used to transfer data over the network. You should only use connections over https.
- `discord.com/` The official domain of Discord. Only invite bots via this domain. Some older invite links could use "
  discordapp.com", which was the old domain for the Discord website.
- `oauth2/authorize` The path to the authorization page.
- `client_id=` The part after the equals sign is the id of the application you are going to invite. Every application
  has a unique id, as well as every user has a unique id.
- `scope=` This part defines what the application is going to be. The argument "bot" means, that it's a bot application
  that you are going to invite.
- `permissions=` The number represents the permissions the bot wants to get on your server. All permissions are
  necessary for the Task Manager in order to function properly. If you remove a permission, some features might not be
  available.

### Bot permissions

On the invite page, you can see some permissions, the bot wants to get. These permissions are necessary for some
specific functionality.


### Authorize

After you have clicked on the "authorize" button, the bot will join your server and send a welcome message in the
default text channel.

## Trying out commands

The default [prefix](prefix.md) is `.` (dot). You can type `.help` to see [all available commands](all-commands.md).