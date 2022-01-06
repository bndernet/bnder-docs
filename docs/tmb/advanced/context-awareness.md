---
slug: /tmb/context-awareness
---

# Context awareness

Context awareness makes it a lot easier to execute multiple commands on the same task or group.

:::info

Context awareness only supports "normal/classic"-[commands](../all-commands.md).

:::

## How it works

Context awareness gets the last 25 messages in the text channel, you sent the command in and checks if messages sent by
the command executor contain a command that the Task Manager can handle. If that's the case it extracts the part it
needs to perform the command you executed. This part can be a task id or a group name.

**Task Manager never stores message content when no command was executed!**

## Examples

### Context awareness in tasks

1. Execute a command that contains a task id.
2. Execute another command without including a task id and the bot will use the last task id you included.
3. You can repeat that process infinite times. The bot will find the task id in answers it sent too.

|                                          Normal commands                                           |                                   With context awareness                                   |
|:--------------------------------------------------------------------------------------------------:|:------------------------------------------------------------------------------------------:|
| ![Example with no context awareness in tasks](/img/tmb/tmb_no_context_awareness_task_example.webp) | ![Example of context awareness in tasks](/img/tmb/tmb_context_awareness_task_example.webp) | 

As you can see, the bot gets the Task ID from the message were the task was created and there is no need to write the
ID.

### Context awareness in groups

1. Create a group.
2. Add a user to the group without writing the group name.

|                                           Normal commands                                            |                                    With context awareness                                     |
|:----------------------------------------------------------------------------------------------------:|:---------------------------------------------------------------------------------------------:|
| ![Example with no context awareness in groups](/img/tmb/tmb_no_context_awareness_group_example.webp) | ![Example of context awareness in groups](/img/tmb/tmb_context_awareness_group_example.webp)  |

## Commands where Task Manager can extract data

**Task Manager never stores message content when no command was executed!**

### Task IDs

- "task add" answer message by the bot
- "task info" command if ID is included
- "task edit" command if ID is included
- "task proceed" command if ID is included
- "task deadline" command if ID is included
- "task delete" command if ID is included
- "task done" command if ID is included
- "task undo" command if ID is included

### Group names

- "group create" command if name is included
- "group delete" command if name is included
- "group members" command if name is included
- "group notifications" command if name is included
- "group add" command if name is included
- "group remove" command if name is included