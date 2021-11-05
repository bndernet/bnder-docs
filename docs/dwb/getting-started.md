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
https://discord.com/oauth2/authorize?client_id=684460735178604688&scope=bot&permissions=85056
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
  necessary for the Discord Wellbeing in order to function properly. If you remove a permission, some features might not be
  available.

### Bot permissions

On the invite page, you can see some permissions, the bot wants to get. These permissions are necessary for some
specific functionality.

![screenshot of discords authorization page](/img/dwb/discord_bot_authorize_image.webp)

- `read messages` - The bot needs to read messages, to filter out messages starting with the [prefix](prefix.md)
  of the bot.

:::info

The bot doesn't save any plain text messages. It only reacts and processes messages starting with the specified prefix
and followed by a command.

:::

- `send messages` - If you send a command, you want the bot to answer to it. It does that by sending a message in the
  text channel where the commands was sent. In order to send a message the bot needs the permission `send messages`.
- `embed links` - The messages of the bot are specific designed to stand appart from normal messages sent by a user. In
  order to send these "embed messages" this permission is required.
- `read message history` - In some features, the bot looks up past messages of himself to update them with new
  information. The look up is not possible without the permission `read message history`.
- `add reactions` - Reactions are a simple way to add "buttons" to a message. The bot uses reactions for example if you
  have a typo on a command. The bot detects that and can perform the right command just by tapping on the reaction.
  Without the permission `add reactions` the bot can't add reactions to his own message.

### Authorize

After you have clicked on the "authorize" button, the bot will join your server and send a welcome message in the
default text channel.

## Trying out commands

The default [prefix](prefix.md) is `.` (dot). You can type `.help` to see [all available commands](all-commands.md).