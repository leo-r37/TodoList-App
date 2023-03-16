import React, { useState, useEffect } from "react";
import { Text, FlatList, RefreshControl } from "react-native";
import { deleteTask, getTasks } from "../api";
import { useIsFocused } from "@react-navigation/native";

import TaskItem from "./TaskItem";

const Tasklist = () => {
  const [tasks, setTasks] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const isFocused = useIsFocused();

  const loadTask = async () => {
    const data = await getTasks();
    setTasks(data);
  };

  useEffect(() => {
    loadTask();
  }, [isFocused]);

  const handleDelete = async (id) => {
    await deleteTask(id);
    await loadTask();
  };

  const renderItem = ({ item }) => {
    return <TaskItem task={item} handleDelete={handleDelete} />;
  };

  const onRefresh = React.useCallback(async () => {
    setRefreshing(true);
    await loadTask();
    setRefreshing(false);
  });

  if (tasks.length <= 0) return <Text>No hay tareas</Text>;

  return (
    <FlatList
      style={{ width: "100%" }}
      data={tasks}
      keyExtractor={(item) => item.id + ""}
      renderItem={renderItem}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          colors={["#78e08f"]}
          onRefresh={onRefresh}
          progressBackgroundColor="#0a3d62"
        />
      }
    />
  );
};

export default Tasklist;
