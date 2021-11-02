# Permissions

We implemented a custom permission system which allows users to grant others access to single commands.

:::info

Users with Discords administrator permission and server owners are ignored by the permission system. They always have
the right to execute every command.

:::

## How does it work?

The Bot first checks if the user is the owner of the server or if he has a role with Discords Administrator permission.
If that isn't the case it checks what permissions were granted to the user directly and to his roles. If any role of him
has a permission, he will be able to execute the command which requires that permission.

### Example

User has role A and role B. Role A was granted the permission CREATE_TASK and CREATE_GROUP. Role B was granted only the
permission ADD_MEMBERS and no other. Because the user has both roles, he is able to create tasks, groups and add members
to groups.

## Grant permissions

Permissions can be granted by executing the [`permission add` command](all-commands.md#permission-commands). After a
permission was added, the bot applies the changes immediately and the user can perform the command which requires the
permission.

## Revoke permissions

Permissions can be revoked by executing the [`permission remove` command](all-commands.md#permission-commands).

:::caution

Removing a permission from a group or a user doesn't mean that the user(s) can't execute a command requiring that
permission. If the user(s) has/have another role who has the permission granted, that overwrites it, and he/they will be
able to perform the command.

:::

## All permissions

| Permission | Use case |
| --- | --- |
| CREATE_TASK | Is required to create a new task. |
| DELETE_TASK | Is required to delete a task. |
| EDIT_TASK|Is required to edit the text of a task. |
| CREATE_GROUP | Is required to create a new group. |
| DELETE_GROUP | Is required to delete a group. |
| ADD_MEMBERS | Is required to add a member to a group. |
| REMOVE_MEMBERS | Is required to remove a member from a group. |
| ADD_PERMISSION | Is required to grant users or roles permissions. |
| REMOVE_PERMISSION | Is required to revoke permissions from roles or users. |
| SHOW_PERMISSIONS | Is required to list all permissions of a role or user |
| CREATE_BOARD | Is required to create a new board |
| DELETE_BOARD | Is required to delete a board |