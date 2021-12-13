import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  TextInput,
  Dimensions,
  FlatList,
} from 'react-native';
import FontAwsomeIcons from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import DummyData from '../assets/DummyData';
import Logo from '../components/Logo';
const {height} = Dimensions.get('window');
const HomeScreen = ({navigation}) => {
  const [areaCard, setAreaCard] = React.useState(DummyData.areas);

  function onSelectSubject(subject) {
    let subjectList = DummyData.areas.filter(a =>
      a.subject.includes(subject.id),
    );
    setAreaCard(subjectList);
  }

  function Header() {
    return (
      <View style={styles.Header}>
        <Logo onPress={() => navigation.navigate('SignInScreen')} />
        <View style={styles.HeaderMiddle}>
          <TouchableOpacity
            onPress={() => navigation.navigate('ProfileScreen')}>
            <Image
              source={require('../assets/user/user-1.jpg')}
              resizeMode="contain"
              style={styles.UserImage}
            />
          </TouchableOpacity>
          <Text style={styles.HeaderText}>Hey John..!</Text>
        </View>
        <Text style={styles.HeaderTitle}>Find Your Favorite Subject !</Text>
        <View style={styles.Search}>
          <FontAwsomeIcons name="search" size={20} color="#6b6b6b" />
          <TextInput style={styles.SecrchInput} />
        </View>
      </View>
    );
  }

  function SubjectCategory() {
    return (
      <View style={styles.CategorySection}>
        <Text style={styles.SectionTitle}>Subjects</Text>
        <View style={styles.Category}>
          <FlatList
            data={DummyData.subjects}
            keyExtractor={item => `${item.id}`}
            horizontal
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  style={styles.CategoryCard}
                  onPress={() => onSelectSubject(item)}
                  key={item.id}>
                  <Text style={styles.CategoryText}>{item.name}</Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </View>
    );
  }

  function LessonSection() {
    return (
      <View>
        <Text style={styles.SectionTitle}>Lessons</Text>
        <View style={styles.CardContainer}>
          <FlatList
            data={areaCard}
            keyExtractor={item => `${item.id}`}
            horizontal
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  style={styles.Card}
                  onPress={() =>
                    navigation.navigate('QuizeListScreen', {item})
                  }>
                  <Image
                    source={item.image}
                    resizeMode="cover"
                    style={styles.CardImage}
                  />
                  <View style={styles.CardShadow}>
                    <Text style={styles.CardText1}>{item.name}</Text>
                    <View style={styles.CardTextBottom}>
                      <Entypo name="pin" size={18} color="#fff" />
                      <Text style={styles.CardText2}>
                        {item.numberOfQuizes} quizes
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </View>
    );
  }

  return (
    <View style={styles.Container}>
      {Header()}
      <View style={styles.Bottom}>
        {SubjectCategory()}
        {LessonSection()}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  Header: {
    backgroundColor: 'rgb(0,127,191)',
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    height: height * 0.39,
    paddingTop: 45,
    paddingLeft: 22,
    paddingRight: 22,
  },
  HeaderMiddle: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10,
  },
  HeaderText: {
    color: '#fff',
    paddingLeft: 10,
    fontFamily: 'Roboto-Black',
    fontSize: 20,
  },
  UserImage: {
    height: 55,
    width: 55,
    borderRadius: 100,
  },
  HeaderTitle: {
    color: '#fff',
    fontFamily: 'Roboto-Bold',
    width: 300,
    fontSize: 26,
  },
  Search: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    backgroundColor: '#d6d6d6',
  },
  SecrchInput: {
    width: '80%',
    marginLeft: 15,
  },
  Bottom: {
    paddingTop: 30,
    paddingLeft: 22,
    paddingRight: 22,
  },
  CategorySection: {
    paddingBottom: 15,
  },
  SectionTitle: {
    color: 'rgb(0,127,191)',
    fontFamily: 'Roboto-Black',
    fontSize: 24,
  },
  Category: {
    paddingTop: 10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  CategoryCard: {marginRight: 10},
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  Card: {
    marginRight: 10,
    marginTop: 12,
  },
  CardImage: {
    width: 210,
    height: 175,
    borderRadius: 10,
  },
  CardShadow: {
    position: 'absolute',
    height: 175,
    width: 210,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 10,
    paddingLeft: 15,
    paddingBottom: 10,
  },
  CardText1: {
    color: '#fff',
    fontFamily: 'Roboto-Black',
    fontSize: 22,
  },
  CardTextBottom: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  CardText2: {
    color: '#fff',
    fontFamily: 'Roboto-Regular',
    fontSize: 18,
  },
});

export default HomeScreen;
