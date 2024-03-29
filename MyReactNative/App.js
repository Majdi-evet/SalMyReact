import React from 'react';
import { FlatList, ActivityIndicator, Text, View  } from 'react-native';

export default class FetchExample extends React.Component {

  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }

  componentDidMount(){
    return fetch('http://192.168.10.105:8000/api/salal/?format=json')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson,
        }, function(){
/*  alert(JSON.stringify(responseJson))  */
        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }



  render(){

    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }

    return(
      <View style={{flex: 1, paddingTop:20}}>
        
        <FlatList
          data={this.state.dataSource}
          
          renderItem={({item}) => <Text style={{borderBottomColor: '#bdbdbd',borderBottomWidth: 2,backgroundColor:'#61dafb'}}>Album : {item.album} Artist : {item.artist} Song : {item.song}</Text>}
          keyExtractor={({id}, index) => id.toString()}
        />
      </View>
    );
  }
}
