# All Commands

Commands are detected by starting a message with the [prefix](prefix.md). After that, the command has to be typed
correctly, otherwise the bot won't respond to the message. In the examples we will use the default prefix `.` (dot).

:::info

Arguments surrounded by "<" and ">" are custom texts. So you can type in whatever you want. When using it in a command,
the "greater than" and "less than" aren't necessary. Look at the examples for more context.

:::

| Command | Example | Description |
| --- | --- | --- |
| `help` | .help | Lists all available commands |
| `register` | .register | Is required to get stats. Only if you executed this command, the bot will track your online and play time. |
| `language` | .language | Switches the language between english (default) and german. |
| `games <today/yesterday/week/month/all>` | .games week | Displays how long you played a game in the given time range. | 
| `onlinetime <today/yesterday/week/month/all>` | .onlinetime yesterday | Displays how long you have been online in the given time range. |
| `unregister` | .unregister | Deletes all statistics saved from you and stops collecting more statistics. |
| `stats` | .stats | Displays general statistics about the bot. |
| `invite` | .invite | Gives you the link to invite the bot. |
| `ranking <onlinetime/points> <today/yesterday/week/month/all>` | .ranking points week | Displays a ranking from the specified values (onlinetime or points) in the given time range. |
| `settings <ranking-visibility>` | .settings ranking-visibility | Hides you from the ranking or otherwise. |
| `limit <Time in Minutes/disable>` | .limit 120 | Disables or sets a onlinetime limit in minutes, where the Bot will notify you if the limit is reached. | 