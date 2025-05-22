import React from "react";
import { FlatList, View } from "react-native";
import NoteItem from "./NoteItem.jsx";

const NoteList = ({ notes }) => {
  return (
    <View>
      <FlatList
        data={notes}
        keyExtractor={(item) => item?.id}
        renderItem={({ item }) => <NoteItem note={item} />}
      />
    </View>
  );
};

export default NoteList;
