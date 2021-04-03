import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';


export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      word: '',
      definition: '',
     
    };
  }
  getWord = (word) => {
    var url = "https://rupinwhitehatjr.github.io/dictionary/" + searchKeyword+ "json";
    const data = await fetch(url);
    if (data.staus === 200) {
      return data.json();

    }

    else {
      return null;
    }
    const response = undefined;
    var responseObject = response;
    if (responseObject) {
      var wordData = responseObject.definitions[0];
      var definition = wordData.desription;
      var lexicalCategory = wordData.wordtype;

      this.setState({
        "word": this.state.text,
        "definition": definition,
        "lexicalCategory": lexicalCategory,
      });
    }

    else {
      this.setState({
        "word": this.state.text,
        "definition": "Not Found",
      });
    }
  }

  render(){
    return (
      <View style={styles.container}>
        

        <TextInput
          style={styles.searchBar}
          placeholder="Enter Word Here"
          onChangeText={(text) => {
            this.setState({
              text: text,
              isSearchedPressed: false,
              word: 'loading...',
              lexicalCategory: '',
              examples: [],
              definition: '',
            });
          }}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.setState({ isSearchedPressed: true });
            this.getWord(this.state.text);
          }}>
          <Text style={styles.text}>Search</Text>
        </TouchableOpacity>

        <Text style={styles.answer}> Word: {this.state.word}</Text>
        <Text style={styles.answer}> Definition: {this.state.definition}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
  },
 
  button: {
    backgroundColor: 'green',
    marginTop: 20,
    marginLeft:700,
    width: 80,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    
    borderWidth: 4,
  },
  text: {
    fontSize: 20,
    
  },
  searchBar: {
    margin: 10,
    marginTop: 80,
  

    fontSize: 30,
    textAlign: 'center',
    padding: 10,
  },
  answer: {
    fontSize: 18,
    fontFamily: 'bold',

  },
});
