import React from "react";
import { View, Pressable, PressableProps, Text, StyleSheet } from "react-native";

interface SkillCardProps extends PressableProps {
  skill: string;
}

export function SkillCard({ skill, ...rest }: SkillCardProps) {
  return (
    <View
      style={styles.buttonSkill}
    >
      <View style={styles.textSkillWrapper}>
        <Text numberOfLines={2} style={styles.textSkill}>
          {skill}
        </Text>
      </View>

      <Pressable
        hitSlop={20}
        style={styles.closeButton}
        {...rest}
      >
        <Text style={styles.textButton}>X</Text>
      </Pressable>

    </View>
  )
}

const styles = StyleSheet.create({
  buttonSkill: {
    backgroundColor: '#1F1e25',
    paddingVertical: 15,
    paddingHorizontal: 32,
    flexDirection: 'row',
    borderRadius: 50,
    alignItems: 'center',
    marginVertical: 10
  },
  textSkillWrapper: {
    flex: 1,
  },
  textSkill: {
    color: '#FFF',
    fontSize: 22,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  closeButton: {
    marginLeft: 10,
    alignItems: 'flex-end'
  },
  textButton: {
    color: '#cf0d0d',
    fontSize: 16,
    fontWeight: 'bold',
    opacity: .4
  }
})