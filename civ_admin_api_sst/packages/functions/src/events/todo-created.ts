import { EventHandler } from "sst/node/event-bus";
import { Todo } from "@civ-admin-api-sst/core/todo";

export const handler = EventHandler(Todo.Events.Created, async (evt) => {
  console.log("Todo created", evt);
});
