import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Animated,
  Dimensions,
  Image,
} from 'react-native';
import data from '../assets/data/QuizData';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';
const {width, height} = Dimensions.get('window');

const Quiz = ({navigation}) => {
  const allQuestions = data;
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentOptionSelected, setCurrentOptionSelected] = useState(null);
  const [correctOption, setCorrectOption] = useState(null);
  const [isOptionsDisabled, setIsOptionsDisabled] = useState(false);
  const [score, setScore] = useState(0);
  const [showNextButton, setShowNextButton] = useState(false);
  const [showScoreModal, setShowScoreModal] = useState(false);

  const validateAnswer = selectedOption => {
    let correct_option = allQuestions[currentQuestionIndex].correct_option;
    setCurrentOptionSelected(selectedOption);
    setCorrectOption(correct_option);
    setIsOptionsDisabled(true);
    if (selectedOption == correct_option) {
      // Set Score
      setScore(score + 1);
    }
    // Show Next Button
    setShowNextButton(true);
  };
  const handleNext = () => {
    if (currentQuestionIndex == allQuestions.length - 1) {
      // Last Question
      // Show Score Modal
      setShowScoreModal(true);
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setCurrentOptionSelected(null);
      setCorrectOption(null);
      setIsOptionsDisabled(false);
      setShowNextButton(false);
    }
    Animated.timing(progress, {
      toValue: currentQuestionIndex + 1,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };
  const restartQuiz = () => {
    setShowScoreModal(false);

    setCurrentQuestionIndex(0);
    setScore(0);

    setCurrentOptionSelected(null);
    setCorrectOption(null);
    setIsOptionsDisabled(false);
    setShowNextButton(false);
    Animated.timing(progress, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };

  const renderQuestion = () => {
    return (
      <View
        style={{
          marginVertical: 15,
        }}>
        {/* Question Counter */}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'flex-end',
          }}>
          <Text
            style={{
              color: '#000',
              fontSize: 16,
              opacity: 0.6,
              marginRight: 2,
            }}>
            {currentQuestionIndex + 1}
          </Text>
          <Text style={{color: '#000', fontSize: 16, opacity: 0.6}}>
            / {allQuestions.length}
          </Text>
        </View>

        {/* Question */}
        <Text
          style={{
            color: '#000',
            fontSize: 24,
            fontFamily: 'Roboto-Bold',
          }}>
          {allQuestions[currentQuestionIndex]?.question}
        </Text>
      </View>
    );
  };
  const renderOptions = () => {
    return (
      <View>
        {allQuestions[currentQuestionIndex]?.options.map(option => (
          <TouchableOpacity
            onPress={() => validateAnswer(option)}
            disabled={isOptionsDisabled}
            key={option}
            style={{
              borderWidth: 3,
              borderColor:
                option == correctOption
                  ? '#00C851'
                  : option == currentOptionSelected
                  ? '#ff4444'
                  : '#1E90FF' + '40',
              backgroundColor:
                option == correctOption
                  ? '#00C851' + '20'
                  : option == currentOptionSelected
                  ? '#ff4444' + '20'
                  : '#1E90FF' + '20',
              height: 50,
              borderRadius: 20,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingHorizontal: 20,
              marginVertical: 10,
            }}>
            <Text
              style={{
                fontSize: 16,
                color: '#000',
                fontFamily: 'Roboto-Regular',
              }}>
              {option}
            </Text>

            {/* Show Check Or Cross Icon based on correct answer*/}
            {option == correctOption ? (
              <View
                style={{
                  width: 22,
                  height: 22,
                  borderRadius: 30 / 2,
                  backgroundColor: '#00C851',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <MaterialCommunityIcons
                  name="check"
                  style={{
                    color: '#fff',
                    fontSize: 16,
                  }}
                />
              </View>
            ) : option == currentOptionSelected ? (
              <View
                style={{
                  width: 22,
                  height: 22,
                  borderRadius: 30 / 2,
                  backgroundColor: '#ff4444',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <MaterialCommunityIcons
                  name="close"
                  style={{
                    color: '#fff',
                    fontSize: 16,
                  }}
                />
              </View>
            ) : null}
          </TouchableOpacity>
        ))}
      </View>
    );
  };
  const renderNextButton = () => {
    if (showNextButton) {
      return (
        <TouchableOpacity style={styles.Button} onPress={handleNext}>
          <LinearGradient
            style={styles.ButtonBackground}
            colors={['rgb(0,127,191)', 'rgb(0,127,191)']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}>
            <Text style={styles.ButtonText}>Next</Text>
          </LinearGradient>
        </TouchableOpacity>
      );
    } else {
      return null;
    }
  };

  const [progress, setProgress] = useState(new Animated.Value(0));
  const progressAnim = progress.interpolate({
    inputRange: [0, allQuestions.length],
    outputRange: ['0%', '100%'],
  });
  const renderProgressBar = () => {
    return (
      <View
        style={{
          width: '100%',
          height: 20,
          borderRadius: 20,
          backgroundColor: 'rgba(0,127,191,0.2)',
        }}>
        <Animated.View
          style={[
            {
              height: 20,
              borderRadius: 20,
              backgroundColor: 'rgba(0,127,191,0.8)',
            },
            {
              width: progressAnim,
            },
          ]}
        />
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.Container}>
      <View style={styles.Header1} />
      <View style={styles.Header2} />
      <View style={styles.Header3}>
        {/* ProgressBar */}
        {renderProgressBar()}

        {/* Question */}
        {renderQuestion()}

        {/* Options */}
        {renderOptions()}

        {/* Next Button */}
        {renderNextButton()}

        {/* Score Modal */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={showScoreModal}>
          <View style={styles.Container}>
            <View style={styles.Model1} />
            <View style={styles.Model2} />
            <View style={styles.Model3}>
              {score > allQuestions.length / 2 ? (
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingBottom: 10,
                  }}>
                  <Text style={styles.ModelText}>Congratulations!</Text>
                  <Image
                    source={require('../assets/badges/victory.jpg')}
                    resizeMode="cover"
                    style={styles.ImageModelVictory}
                  />
                </View>
              ) : (
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingBottom: 10,
                  }}>
                  <Text style={styles.ModelText}>Oops!</Text>
                  <Image
                    source={require('../assets/badges/oops.png')}
                    resizeMode="cover"
                    style={styles.ImageModelOops}
                  />
                </View>
              )}

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingBottom: 5,
                }}>
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#ffba00',
                    borderRadius: 10,
                    padding: 5,
                    width: 100,
                    marginLeft: 2,
                    marginRight: 2,
                    shadowColor: '#000',
                    shadowOffset: {
                      width: 0,
                      height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,
                    elevation: 5,
                  }}>
                  <Text
                    style={{
                      fontSize: 25,
                      color: '#fff',
                      fontFamily: 'Roboto-Black',
                    }}>
                    {allQuestions.length}
                  </Text>
                  <Text
                    style={{
                      fontSize: 16,
                      color: '#fff',
                      fontFamily: 'Roboto-Black',
                    }}>
                    Questions
                  </Text>
                </View>
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#3cb371',
                    borderRadius: 10,
                    padding: 5,
                    width: 100,
                    marginLeft: 2,
                    marginRight: 2,
                  }}>
                  <Text
                    style={{
                      fontSize: 25,
                      color: '#fff',
                      fontFamily: 'Roboto-Black',
                    }}>
                    {score}
                  </Text>
                  <Text
                    style={{
                      fontSize: 16,
                      color: '#fff',
                      fontFamily: 'Roboto-Black',
                    }}>
                    Correct
                  </Text>
                </View>
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#ff4040',
                    borderRadius: 10,
                    padding: 5,
                    width: 100,
                    marginLeft: 2,
                    marginRight: 2,
                  }}>
                  <Text
                    style={{
                      fontSize: 25,
                      color: '#fff',
                      fontFamily: 'Roboto-Black',
                    }}>
                    {allQuestions.length - score}
                  </Text>
                  <Text
                    style={{
                      fontSize: 16,
                      color: '#fff',
                      fontFamily: 'Roboto-Black',
                    }}>
                    Incorrect
                  </Text>
                </View>
              </View>

              <TouchableOpacity style={styles.Button} onPress={restartQuiz}>
                <LinearGradient
                  style={styles.ButtonBackground}
                  colors={['rgb(0,127,191)', 'rgb(0,127,191)']}
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 1}}>
                  <Text style={styles.ButtonText}>Retry Quize</Text>
                </LinearGradient>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.Button}
                onPress={() => navigation.navigate('QuizeListScreen')}>
                <LinearGradient
                  style={styles.ButtonBackground}
                  colors={['rgb(0,127,191)', 'rgb(0,127,191)']}
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 1}}>
                  <Text style={styles.ButtonText}>Back</Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: 'rgb(0,127,191)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Header1: {
    position: 'absolute',
    backgroundColor: 'rgba(255,255,255,0.3)',
    borderRadius: 20,
    width: width * 0.7,
    height: height * 0.9,
  },
  Header2: {
    position: 'absolute',
    backgroundColor: 'rgba(255,255,255,0.6)',
    borderRadius: 20,
    width: width * 0.8,
    height: height * 0.85,
  },
  Header3: {
    backgroundColor: '#fff',
    borderRadius: 20,
    width: width * 0.9,
    height: height * 0.8,
    padding: 25,
  },
  Button: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginTop: 16,
    width: '100%',
    height: 50,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  ButtonBackground: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },
  ButtonText: {
    fontFamily: 'Roboto-Bold',
    fontSize: 22,
    lineHeight: 30,
    color: '#fff',
  },
  Model1: {
    position: 'absolute',
    backgroundColor: 'rgba(255,255,255,0.3)',
    borderRadius: 20,
    width: width * 0.65,
    height: height * 0.9,
  },
  Model2: {
    position: 'absolute',
    backgroundColor: 'rgba(255,255,255,0.6)',
    borderRadius: 20,
    width: width * 0.75,
    height: height * 0.85,
  },
  Model3: {
    backgroundColor: '#fff',
    borderRadius: 20,
    width: width * 0.85,
    height: height * 0.8,
    padding: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ModelText: {
    fontSize: 35,
    fontFamily: 'Roboto-Bold',
    color: 'rgb(0,127,191)',
    paddingBottom: 20,
  },
  ImageModelVictory: {
    width: 220,
    height: 220,
  },
  ImageModelOops: {
    width: 150,
    height: 150,
  },
});

export default Quiz;
