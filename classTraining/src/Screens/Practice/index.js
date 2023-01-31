import {View, Text, StyleSheet} from 'react-native';
import React, {useState, useEffect} from 'react';
import * as Progress from 'react-native-progress';
import Ring from '../../CustomComponents/Ring';
const Practice = ({navigation}) => {
  const [progress, setProgress] = useState(0);
  const [indeterminate, setIntermediate] = useState(true);

  useEffect(() => {
    animate();
    // console.log(progress, indeterminate);
  }, []);

  function animate() {
    let progress = 0;

    setProgress(progress);
    setTimeout(() => {
      // this.setState({indeterminate: false});
      setIntermediate(false);

      setInterval(() => {
        progress += Math.random() / 5;
        if (progress > 1) {
          progress = 1;
        }
        // this.setState({progress});
        setProgress(progress);
      }, 500);
    }, 1500);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Progress Example</Text>
      <Progress.Bar
        style={styles.progress}
        progress={progress}
        indeterminate={indeterminate}
      />
      <View style={styles.circles}>
        <Progress.Circle
          style={styles.progress}
          progress={progress}
          indeterminate={indeterminate}
        />
        <Progress.Circle
          style={styles.progress}
          progress={progress}
          indeterminate={indeterminate}
        />
      </View>
      <View style={styles.circles}>
        <Progress.Circle
          style={styles.progress}
          progress={progress}
          indeterminate={indeterminate}
        />
        <Progress.Circle
          style={styles.progress}
          progress={progress}
          indeterminate={indeterminate}
        />
        <Progress.Circle
          style={styles.progress}
          progress={progress}
          indeterminate={indeterminate}
        />
        <Progress.Pie
          style={styles.progress}
          progress={progress}
          indeterminate={indeterminate}
        />
        <Progress.Circle
          style={styles.progress}
          // fill={'#F44336'}
          progress={progress}
          indeterminate={indeterminate}
          direction="counter-clockwise"
        />
      </View>
      <View style={styles.circles}>
        <Progress.CircleSnail style={styles.progress} color={'#F44336'} />
        <Progress.CircleSnail
          style={styles.progress}
          color={['#F44336', '#2196F3', '#009688']}
        />
      </View>
      <View style={styles.circles}>
        <Progress.CircleSnail style={styles.progress} color={'#F44336'} />
        <Progress.CircleSnail
          style={styles.progress}
          color={['#F44336', '#2196F3', '#009688']}
        />
        <Ring delay={0} />
        <Ring delay={1000} />
        <Ring delay={2000} />
        <Ring delay={3000} />
      </View>
      <Ring />
    </View>
  );
};

export default Practice;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    paddingVertical: 20,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  circles: {
    flexDirection: 'row',
    backgroundColor: 'tomato',
    alignItems: 'center',
  },
  progress: {
    margin: 10,
  },
});
