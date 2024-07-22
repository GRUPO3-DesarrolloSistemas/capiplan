// FitImage.tsx
import React, { useState, useEffect } from "react";
import { View, Dimensions, Animated } from "react-native";
import Svg, { Circle, G } from "react-native-svg";
import styles from '../../../assets/style/styleFitImage';
import { colors } from "../../themes/colors";

const { width, height } = Dimensions.get("screen");

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const FitImage = () => {
  const innerCircleRadius = 13;
  const innerCircleFillPercentage = 75;
  const innerCirclePerimeter = 2 * Math.PI * innerCircleRadius;
  const innerCircleStrokeDashOffset =
    innerCirclePerimeter -
    (innerCirclePerimeter * innerCircleFillPercentage) / 100;

  const outerCircleRadius = 18;
  const outerCircleFillPercentage = 35;
  const outerCirclePerimeter = 2 * Math.PI * outerCircleRadius;
  const outerCircleStrokeDashOffset =
    outerCirclePerimeter -
    (outerCirclePerimeter * outerCircleFillPercentage) / 100;

  const [springValue] = useState(new Animated.Value(1.3));
  const [innerCircleInitialFill] = useState(
    new Animated.Value(innerCirclePerimeter)
  );
  const [outerCircleInitialFill] = useState(
    new Animated.Value(outerCirclePerimeter)
  );

  useEffect(() => {
    Animated.parallel([
      Animated.timing(innerCircleInitialFill, {
        toValue: innerCircleStrokeDashOffset,
        duration: 1000,
        useNativeDriver: false
      }),
      Animated.timing(outerCircleInitialFill, {
        toValue: outerCircleStrokeDashOffset,
        duration: 2000,
        useNativeDriver: false
      }),
      Animated.spring(springValue, {
        toValue: 1,
        friction: 1,
        useNativeDriver: false
      })
    ]).start();
  }, []);

  return (
    <View style={styles.container}>
      <View>
        <Svg
          viewBox={`0 0 50 50`}
          width={width}
          height={height / 2.5}
          style={{ transform: [{ rotateZ: "-90deg" }] }}
        >
          <G>
            <Circle
              cx="25"
              cy="25"
              r={outerCircleRadius}
              fill="transparent"
              stroke= {colors.extraLighGray}
              strokeDasharray="10, 1"
              strokeDashoffset="30"
              strokeWidth={0.5}
            />
            <AnimatedCircle
              cx="25"
              cy="25"
              r={outerCircleRadius}
              fill="transparent"
              stroke={colors.lightPurple}
              strokeDasharray={outerCirclePerimeter}
              strokeDashoffset={outerCircleInitialFill}
              strokeLinecap={"round"}
            />
            <Circle
              cx="25"
              cy="25"
              r={innerCircleRadius}
              fill="transparent"
              stroke={colors.extraLighGray}
              strokeDasharray="1"
              strokeWidth={0.5}
            />
            <AnimatedCircle
              cx="25"
              cy="25"
              r={innerCircleRadius}
              fill="transparent"
              stroke={colors.lightOrange}
              strokeDasharray={innerCirclePerimeter}
              strokeDashoffset={innerCircleInitialFill}
              strokeLinecap={"round"}
            />
          </G>
        </Svg>
        <View style={styles.svgContainer}>
          <Animated.Image
            source={require("../../../assets/img/capibara.png")}
            style={[styles.image, { transform: [{ scale: springValue }] }]}
          />
        </View>
      </View>
    </View>
  );
};

export default FitImage;
