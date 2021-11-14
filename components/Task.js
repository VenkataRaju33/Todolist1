import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
// import {BiTrash} from 'react-icons'

const Task = (props) => {

  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
       
        <View style={styles.column}>
       <View style={styles.row}>
        <Text style={styles.label}>Title:</Text>
        <Text style={styles.itemText}>{props.task.title}</Text>
        </View>
        <View style={styles.row}>
        <Text style={styles.label}>Description:</Text>
        <Text style={styles.itemText}>{props.task.description}</Text>
        </View>
        <View style={styles.row}>
        <Text style={styles.label}>Status:</Text>
        <Text style={styles.itemText}>{props.task.status}</Text>
        </View>
        <View style={styles.row}>
        <Text style={styles.label}>Deadline:</Text>
        <Text style={styles.itemText}>{props.task.deadline}</Text>
        </View>
      
        </View>
      </View>
      <View style={styles.actions}>
      <TouchableOpacity onPress={()=>props.editTask(props.index)}> 
      <View style={styles.action}>Edit</View>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>props.deleteTask(props.index)}> 
      <View style={styles.action}>Delete</View>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>props.markFinish(props.index)}> 
      <View style={styles.action}>Mark Finish</View>
      </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  actions:{

    width:'341px',
    display:'flex',
    flexDirection:'row',
    alignItems:'center'

  },

  action:{
width:100,
height:30,

display:'flex',
alignItems:'center',
justifyContent:'center',
backgroundColor:'#e7e7e7',
marginRight:'10px',

borderRadius:8

  },
  item: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  row:{
    display:'flex',
    flexDirection:'row',
  },
  label:{
    fontWeight:'bold'
  },
  column:{
display:'flex',
flexDirection:'column',
width:'100%'
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: '#55BCF6',
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
   
  },
  itemText: {
    maxWidth: '80%',
    marginBottom:10,
    marginLeft:10
  },
  circular: {
    width: 12,
    height: 12,
    borderColor: '#55BCF6',
    borderWidth: 2,
    borderRadius: 5,
  },
});

export default Task;