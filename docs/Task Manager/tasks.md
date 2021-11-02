# Tasks

A Task holds multiple arguments. It contains a text which describes what the assigned user or group members should do, it contains an ID which is used to identify the task in every command and it has one of three [stats](#states). Optional it can contain a deadline.

Except for the ID, all data can be edited.

## States

Every task is in one of the states:
- **Todo** - The state every task starts with. It means that nobody started working on the task.
- **In Progress** - This state means somebody started working on the task.
- **Done** - The last state which means that the task is finished.

## Deadline

The deadline is set by executing the [`task deadline` command](all-commands.md#task-commands). 

When the deadline of a task is nearly reached, the assigned user(s) will receive a direct message by the bot, notifying them, that the deadline is nearly reached.