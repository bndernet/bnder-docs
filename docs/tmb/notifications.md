---
slug: /tmb/notifications
---

# Notifications / Logging

The Bot can log tasks automatically in specific text channels. The past messages will be automatically updated when the
data of the tasks changed.

## User tasks

User tasks can be logged via the command `settings notifications @User #Textchannel`. When the mentioned user will get a
new task assigned, the bot will send a message to the mentioned channel.

## Group tasks

Tasks of a group can be logged via the command `group notifications <Group name> #Textchannel`. A message will now be
send into the mentioned text channel when a task gets assigned to the group.