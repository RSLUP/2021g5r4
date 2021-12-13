import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
  FlatList,
  Image,
  ScrollView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DummyData from '../assets/DummyData';
const {height, width} = Dimensions.get('window');
const QuizeListScreen = ({navigation, route}) => {
  const [quizes, setQuizes] = React.useState(null);

  React.useEffect(() => {
    let item = route.params;
    setQuizes(item);
  }, []);

  const [quizCard, setQuizCard] = React.useState(quizes?.item.quizesList);

  function onSelectQuiz(level) {
    let quizList = quizes?.item.quizesList.filter(a =>
      a.level.includes(level.id),
    );
    setQuizCard(quizList);
  }

  return (
    <View style={styles.Container}>
      <ImageBackground
        source={quizes?.item.image}
        resizeMode="cover"
        style={styles.Header}>
        <View style={styles.HeaderContain}>
          <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
            <Ionicons name="md-chevron-back" size={30} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.HeaderText}>{quizes?.item.name}</Text>
          <Text style={styles.HeaderTitle}>{quizes?.item.title}</Text>
        </View>
      </ImageBackground>
      <View style={styles.Bottom}>
        <View style={styles.Category}>
          <FlatList
            style={styles.CategoryList}
            data={DummyData.levels}
            keyExtractor={item => `${item.id}`}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  style={styles.CategoryCard}
                  onPress={() => onSelectQuiz(item)}
                  key={item.id}>
                  <Text style={styles.CategoryText}>{item.name}</Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
        <View style={styles.CardContainer}>
          <FlatList
            data={quizes?.item.quizesList}
            keyExtractor={item => `${item.id}`}
            showsVerticalScrollIndicator={false}
            numColumns={2}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  key={item.id}
                  style={styles.Card}
                  onPress={() =>
                    navigation.navigate('InstructionScreen', {item})
                  }>
                  <View>
                    <Image
                      source={require('../assets/quiz.jpg')}
                      resizeMode="cover"
                      style={styles.CardImage}
                    />
                    <ImageBackground
                      source={require('../assets/badges/badge10.png')}
                      resizeMode="cover"
                      style={styles.CardImageBadge}>
                      <Text style={styles.LevelText}>{item.levelName}</Text>
                    </ImageBackground>
                    <View style={styles.CardBottom}>
                      <Text style={styles.CardText1}>{quizes?.item.name}</Text>
                      <Text style={styles.CardText2}> Quiz {item.id}</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  Header: {
    flex: 1,
    height: height * 0.39,
    width: width,
  },
  HeaderContain: {
    paddingTop: 45,
    paddingLeft: 22,
    paddingRight: 22,
    backgroundColor: 'rgba(0,0,0,0.6)',
    height: height * 0.39,
    width: width,
  },
  HeaderText: {
    color: '#fff',
    fontFamily: 'Roboto-Black',
    fontSize: 40,
    textAlign: 'center',
    paddingBottom: 10,
  },
  HeaderTitle: {
    color: '#fff',
    fontFamily: 'Roboto-Bold',
    fontSize: 24,
    textAlign: 'center',
  },
  Bottom: {
    flex: 2,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingTop: 10,
    paddingLeft: 22,
    paddingRight: 22,
    backgroundColor: '#fff',
  },
  Category: {
    paddingTop: 10,
    paddingBottom: 10,
  },
  CategoryList: {
    alignSelf: 'center',
  },
  CategoryCard: {
    marginRight: 5,
    marginLeft: 5,
  },
  CategoryText: {
    color: 'rgb(0,127,191)',
    padding: 10,
    width: '100%',
    textAlign: 'center',
    borderRadius: 10,
    fontFamily: 'Roboto-Regular',
    fontSize: 18,
    backgroundColor: 'rgba(0,127,191,0.2)',
  },
  CardContainer: {
    alignSelf: 'center',
    paddingBottom: 80,
  },
  Card: {
    marginTop: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 8,
    marginRight: 8,
    backgroundColor: 'rgba(0,127,191,0.7)',
    borderRadius: 20,
    flexDirection: 'row',
  },
  CardImageBadge: {
    height: 150,
    width: 150,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 83,
    left: -30,
  },
  LevelText: {
    color: '#ae0c00',
    fontFamily: 'Roboto-Black',
    fontSize: 15,
    transform: [{rotate: '315deg'}],
    paddingBottom: 30,
  },
  CardImage: {
    height: 150,
    width: 150,
    borderWidth: 1,
    borderColor: 'rgba(0,127,191,0.7)',
    borderRadius: 20,
  },
  CardBottom: {
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  CardText1: {
    color: '#fff',
    fontFamily: 'Roboto-Black',
    fontSize: 18,
  },
  CardText2: {
    color: '#fff',
    fontFamily: 'Roboto-Regular',
    fontSize: 14,
  },
});

export default QuizeListScreen;
