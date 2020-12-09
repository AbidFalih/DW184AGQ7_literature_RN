import React, { useState } from "react";
import { View, StyleSheet, Text, Platform } from "react-native";
import { Button, Input } from "react-native-elements";
import DateTimePicker from "@react-native-community/datetimepicker";

const AddLiterature = () => {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  var dd = String(date.getDate()).padStart(2, "0");
  var mm = String(date.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = date.getFullYear();

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
    dd = String(date.getDate()).padStart(2, "0");
    mm = String(date.getMonth() + 1).padStart(2, "0"); //January is 0!
    yyyy = date.getFullYear();
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        <b>Add Literature</b>
      </Text>

      <Input
        style={styles.inputText}
        containerStyle={styles.inputContainer}
        placeholder="Title"
      />
      <View style={styles.dateContainer}>
        {console.log("date", date)}
        <Text style={styles.dateText}>{`${dd}/${mm}/${yyyy}`}</Text>
        <Button
          buttonStyle={styles.dateBtnStyle}
          titleStyle={styles.dateBtnTitle}
          containerStyle={styles.dateBtnContainer}
          onPress={showDatepicker}
          title="Date"
        />
      </View>

      <Input
        style={styles.inputText}
        containerStyle={styles.inputContainer}
        placeholder="Pages"
      />
      <Input
        style={styles.inputText}
        containerStyle={styles.inputContainer}
        placeholder="ISBN"
      />
      <Input
        style={styles.inputText}
        containerStyle={styles.inputContainer}
        placeholder="Author"
      />
      <Input
        style={styles.inputText}
        containerStyle={styles.inputContainer}
        placeholder="Attache File"
      />

      <Button
        buttonStyle={styles.btnStyle}
        containerStyle={styles.btnContainer}
        title="Add Literature"
      />
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "#fff",
    fontSize: 36,
    textAlign: "center",
    paddingBottom: 20,
  },

  inputText: {
    height: 40,
    color: "#fff",
    paddingStart: 10,
  },
  inputContainer: {
    paddingStart: 20,
    paddingEnd: 20,
    paddingBottom: 10,
  },

  dateContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: 10,
  },
  dateText: {
    color: "#7e7c7a",
    fontSize: 18,
    flex: 1,
    marginStart: 30,
  },
  dateBtnStyle: {
    backgroundColor: "#fff",
  },
  dateBtnContainer: {
    marginEnd: 20,
  },
  dateBtnTitle: {
    color: "#000",
  },

  btnStyle: {
    backgroundColor: "#AF2E1C",
  },
  btnContainer: {
    width: "100%",
    paddingStart: 20,
    paddingEnd: 20,
    paddingTop: 10,
  },
});

export default AddLiterature;
