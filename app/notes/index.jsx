import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AddNoteModal from "../../component/AddNoteModal.jsx";
import NoteList from "../../component/NoteList.jsx";

const NoteScreen = () => {
  const [notes, setNotes] = useState([
    {
      id: "1",
      text: "note 1",
    },
    {
      id: "2",
      text: "note 2",
    },
    {
      id: "3",
      text: "note 3",
    },
  ]);

  const [modalVisible, setModalVisible] = useState(false);
  const [newNote, setNewNote] = useState("");

  // add note

  const addNote = () => {
    if (newNote?.trim() === "") return;

    setNotes((prev) => [...prev, { id: Date.now().toString(), text: newNote }]);

    setNewNote("");

    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      {/* note list */}
      <NoteList notes={notes} />

      <TouchableOpacity
        style={styles.addNoteButton}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.addNoteText}>+Add Notes</Text>
      </TouchableOpacity>

      {/* Modal */}
      <AddNoteModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        newNote={newNote}
        setNewNote={setNewNote}
        addNote={addNote}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  noteItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    marginBottom: 10,
    backgroundColor: "#f5f5f5",
    borderRadius: 5,
    marginVertical: 5,
  },
  noteText: {
    fontSize: 16,
  },
  addNoteButton: {
    position: "absolute",
    backgroundColor: "#007bff",
    bottom: 30,
    left: 20,
    right: 20,
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  addNoteText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },

  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },

  modalContent: {
    backgroundColor: "#fff",
    padding: "20",
    borderRadius: 10,
    width: "80%",
  },

  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },

  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    marginBottom: 15,
  },

  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cancelButton: {
    backgroundColor: "#ccc",
    padding: 10,
    borderRadius: 8,
    flex: 1,
    marginRight: 10,
    alignItems: "center",
  },
  cancelButtonText: {
    fontSize: 16,
    color: "#333",
  },
  saveButton: {
    backgroundColor: "#007bff",
    padding: 10,
    borderRadius: 8,
    flex: 1,
    alignItems: "center",
  },
  saveButtonText: {
    fontSize: 16,
    color: "#fff",
  },
});

export default NoteScreen;
