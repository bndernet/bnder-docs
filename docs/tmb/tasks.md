---
slug: /tmb/tasks
---

# Tasks

A Task holds multiple arguments. It contains a text which describes what the assigned user or group members should do,
it contains an ID that is used to identify the task in every command, and it has one of three [states](#states).
Optional it can contain a deadline.

Except for the ID, all data can be edited.

## States

Every task is in one of the states:

- **Todo** - The state every task starts with. It means that nobody started working on the task.
- **In Progress** - This state means somebody started working on the task.
- **Done** - The last state means that the task is finished.

## Deadline

The deadline is set by executing the [`task deadline` command](all-commands.md#task-commands).

When the deadline of a task is nearly reached, the assigned user(s) will receive a direct message from the bot,
notifying them, that the deadline is nearly reached.

### Supported Formats in descending priority:

#### Legend

- dd = Day of month
- MM = Month of year
- yyyy = Full year (Example: 2022)
- yy = Year in short (Example: 22 (= 2022)

#### Date formats

- **dd.MM.yyyy HH:mm** (Example: 20.10.2022 14:00)
- **dd.MM.yy HH:mm** (Example: 20.10.22 14:00)
- **dd.MM.yyyy HH:mm:ss** (Example: 20.10.2022 14:00:00)
- **dd.MM.yyyy** (Example: 20.10.2022)
- **yyyy-MM-dd HH:mm** (Example: 2022-10-20 14:00)
- **yy-MM-dd HH:mm** (Example: 22-10-20 14:00)
- **yyyy-MM-dd HH:mm:ss** (Example: 2022-10-20 14:00:00)
- **yy-MM-dd HH:mm:ss** (Example: 22-10-20 14:00:00)
- **yyyy-MM-dd** (Example: 2022-10-20)
- **yy-MM-dd** (Example: 22-10-20)
- **yyyy/MM/dd** (Example: 2022/10/20)
- **yy/MM/dd** (Example: 22/10/20)
- **yyyy/MM/dd HH:mm** (Example: 2022/10/20 14:00)
- **yy/MM/dd HH:mm** (Example: 22/10/20 14:00)
- **yyyy/MM/dd HH:mm:ss** (Example: 2022/10/20 14:00:00)
- **yy/MM/dd HH:mm:ss** (Example: 22/10/20 14:00:00)
- **MM/dd/yyyy HH:mm:ss** (Example: 10/20/2022 14:00:00)
- **MM/dd/yyyy HH:mm** (Example: 10/20/2022 14:00)
- **MM/dd/yyyy** (Example: 10/20/2022)