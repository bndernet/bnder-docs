# All Commands

Commands are detected by starting a message with the [prefix](prefix.md). After that, the command has to be typed
correctly, otherwise the bot won't respond to the message. In the examples we will use the default prefix `-` (dash).

:::info

Arguments surrounded by "<" and ">" are custom texts. So you can type in whatever you want. When using it in a command,
the "greater than" and "less than" aren't necessary. Look at the examples for more context.

:::

## Task Commands

:::tip

To understand the concept of tasks, take a look at [this page](tasks.md).

:::

| Command | Example | Description | [Permission](permissions.md) required |
| ----------- | ----------- |----------- |----------- |
| `task add @User <Task text>` | -task add @Jan#1234 Please format the code | To add a task to a specific user, you have to use this command. You have to mention the user who will receive the task. It is also possible to mention yourself. | CREATE_TASK |
| `task add <Group name> <Task text>` | -task add developers Push the commit to git | Tasks can be assigned to a [group of users](groups.md). You have to specifiy which group will receive the task. | CREATE_TASK |
| `task proceed <Task ID>` | -task proceed 65212 | Tasks can have different states. To see which states are possible, take a look at the [tasks page](tasks.md). To push the state one step forward, type this command, with the id of the task you want to change. You can get the id by looking at the response to the `task add` command or by listing all tasks with `task list` command. | None |
| `task deadline <Task ID> <Date (in european format)> <Time (in european format)>` | -task deadline 63172 24.10.2022 14:00 | Tasks can have a deadline and if the deadline is nearly reached, all assignees of the task will receive a direct message by the bot, notifying them about the deadline. To set the deadline the task id is required, which you can get from the `task add` response or by listing all tasks with `task list`. The date has to be in the european date format (dd.MM.yyyy) and the time needs to be in 24h format (HH:mm). | None |
| `task list` | -task list | To list all tasks assigned to you, perform this command. It will give you a list of all tasks, directly assigned to you and assigned to groups of you, with the task id and, if set, the deadline of the task. All tasks are sorted by the state they are in. | None |
| `task list @User` | -task list @Jan#1234 | This command lists all tasks assigned to the mentioned user and assigned to groups the mentioned user is a member of. It will display the task id and if there is a deadline set, also the deadline. All tasks are sorted by the state they are in. | None|
| `task list <Group>` | -task list developers | Lists all tasks assigned to a group. It will display the task id and if there is a deadline set, also the deadline. All tasks are sorted by the state they are in. | None |
| `task delete <Task ID>` | -task delete 83123 | This deletes the task with the id specified in the command message. The bot won't ask for confirmation. The task will be deleted immediately. | DELETE_TASK |
| `task delete done` | -task delete done | If you don't want to delete all tasks with the state "done" by yourself, you can use this command. It will delete all tasks with a state of "done" automatically. | DELETE_TASK |
| `task edit <Task ID> <Task text>` | -task edit 98253 Please do that now i had a typo | If you want to edit the task text, use this command. It requires the task id and a new text. | EDIT_TASK |
| `task info <Task ID>` | -task info 89312 | This command is used to display various information about the task with the specified id. It will display the id, deadline, assigned to and text. | None |
| `task done <Task ID>` | -task done 83819 | Can be used to skip all states of a task with the specified id and set it directly to done. | None |
| `task undo <Task ID>` | -task undo 73812 | If you want to pull the [state of the task](tasks.md#state) one step back, you can execute this command. | None |

## Group Commands

:::tip

To understand the concept of groups, take a look at [this page](groups.md).

:::

| Command | Example | Description | [Permission](permissions.md) required |
| ----------- | ----------- |----------- |----------- |
| `group create <Group name>` | -group create developers | A new empty group will be created. The group name needs to be a single word. If you will include emtpy spaces in the name, the bot will replace them by `_` (underscore). After a group was created it will be available to all users on the server. | CREATE_GROUP |
| `group add @User <Group name>` | -group add @Jan#1234 developers | If you don't want your group to be empty, you can use this command to add a user to a group. | ADD_MEMBERS |
| `group add @User1 @User2 @User3... <Group name>` | -group add @Jan#1234 @Bennet#1234 @bnder#4321 developers | If you don't want your group to be empty, you can use this command to add multiple users with a single command. | ADD_MEMBERS |
| `group remove @User <Group name>` | -group remove @Jan#1234 developers | This command removes a user from a group. All tasks assigned to the group will stay untouched but the removed user won't see them in his task list. | REMOVE_MEMBERS |
| `group remove @User1 @User2 @User3... <Group name>` | -group remove @Jan#1234 @Bennet#1234 @bnder#4321 developers | This command removes mutliple users from a group. All tasks assigned to the group will stay untouched but the removed users won't see them in their task list. | REMOVE_MEMBERS |
| `group delete <Group name>` | -group delete developers | A group can be deleted by using this command. All members will be removed and all tasks assigned to the group will get deleted. The bot won't ask for confirmation. After the command is executed, the bot will delete all data assigned to the group immediately. | DELETE_GROUP |
| `group list` | -group list | This command displays all groups on the server. | None |
| `group members <Group name>` | -group members developers | Will display all members of the group. | None |
| `group notifications <Group name> #Textchannel` | -group notifications developers #dev-updates | When notifications are set to a specific channel, the bot will send tasks assigned to the group in the text channel specified by this command. | None |

## Permission commands

:::tip

To understand the concept of permissions, take a look at [this page](permissions.md).

:::

| Command | Example | Description | [Permission](permissions.md) required |
| ----------- | ----------- |----------- |----------- |
| `permission` | -permission | To see all available permissions use this command. It will display all permission commands and all permissions. | None |
| `permission add @User <Permission>` | -permission add @Jan#1234 CREATE_TASK | This will grant the mentioned user the specified permission. | ADD_PERMISSION |
| `permission add @Role <Permission>` | -permission add @admin CREATE_TASK | This will grant the mentioned role the specified permission. All users with this role can now execute commands requiring the specified permission.| ADD_PERMISSION |
| `permission remove @User <Permission>` | -permission remove @Jan#1234 CREATE_TASK | If a user has a permission you don't want him to have, you can remove it by using this command. Users with administrator permissions & server owners won't be affected by this. If the user has a role with the permission granted, he can still execute commands requiring that permission. | REMOVE_PERMISSION |
| `permission remove @Role <Permission>` | -permission remove @admin CREATE_TASK | If a role has a permission you don't want it to have, you can remove it by using this command. Role members with administrator permissions & server owners won't be affected by this. If a role member has a role with the permission granted, he can still execute commands requiring that permission. | REMOVE_PERMISSION |
| `permission list @User` | -permission list @Jan#1234 | This will display all permissions and shows if the user has the permission. | SHOW_PERMISSIONS |
| `permission list @Role` | -permission list @admin | This will display all permissions and shows if the role has the permission. | SHOW_PERMISSIONS |

## Board commands

:::tip

To understand the concept of boards, take a look at [this page](boards.md).

:::

| Command | Example | Description | [Permission](permissions.md) required |
| ----------- | ----------- |----------- |----------- |
| `board create <Board name>` | -board create Project1 | This will create a new board with the specified name. To lear what a board is, take a look at [this page](boards.md). After the creation all users on the server will be able to switch to the new board.| CREATE_BOARD |
| `board switch <Board name>` | -board switch Project1 | This command allows you to switch to a board. After execution the board you specified will be active and all tasks will be associated with the active board. | None |
| `board delete <Board name>` | -board delete Project1 | This command will delete the board immediately. All tasks created in the board will be deleted too. The bot won't ask for confirmation. All tasks data associated with the board will be deleted immediately. | DELETE_BOARD |
| `board list` | -board list | Displays all boards created on the server. | None |

## General commands
| Command | Example | Description | Required Discord permission |
| ----------- | ----------- |----------- |----------- |
| `token` | -token | Will send you your login token to login to our [app](app.md) via direct message. | None |
| `token new` | -token new | Will generate a new login token for our [app](app.md) and sends it to you via direct message. | None |
| `help` | -help | Displays all commands and short explanation. | None |
| `help <command>` | -help task add | Displays general usage, example and explanation for the command specified. | None |
| `support` | -support | Gives you the link to [our Discord server](https://bnder.net/discord). | None |
| `app` | -app | Will give you the Google Play and Web link to [our app](app.md). | None |
| `stats` | -stats | The bot collects general anonymous stats. All stats can be displayed using this command. | None |
| `prefix <Character>` | -prefix ! | This will change the bots [prefix](prefix.md) to another char. | Administrator |
| `settings` | -settings | Displays all settings and commands to change them. | None |
| `settings direct-message` | -settings direct-message | Enables/Disables the direct message when a task got assigned to you. | None |
| `settings show-done-tasks` | -settings show-done-tasks | If enabled done tasks will be displayed in the `task list`. | None |
| `settings notify-channel #Textchannel` | -settings notify-channel #my-notifications | If you disabled the direct messages on task assigning you can set a text channel where a notification will be send to. | None |
| `settings notifications @User #Textchannel` | -settings notifications @Jan#1234 #jan-logs | When notifications are set to a specific channel, the bot will send tasks assigned to the mentioned user in the text channel specified in this command. | None |
| `data` | -data | Will send you a YAML file with all data we saved associated with your Discord id and the server the command is executed on. | None |
| `invite` | -invite | Displays the invite link for the bot. | None |
| `search <Search term>` | -search 721 | This command queries all boards, groups and tasks for the search term specified in this command and will display the results. | None |