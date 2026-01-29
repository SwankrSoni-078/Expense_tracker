import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

export default function SignupScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        {/* App Icon */}
        <View style={styles.iconBox}>
          <Ionicons name="wallet" size={28} color="#fff" />
        </View>

        {/* Title */}
        <Text style={styles.title}>Create Account</Text>
        <Text style={styles.subtitle}>Start tracking smarter today</Text>

        {/* Full Name */}
        <View style={styles.field}>
          <Ionicons name="person-outline" size={20} color="#999" />
          <TextInput
            placeholder="Full Name"
            style={styles.input}
          />
        </View>

        {/* Email */}
        <View style={styles.field}>
          <MaterialIcons name="email" size={20} color="#999" />
          <TextInput
            placeholder="Email Address"
            style={styles.input}
            keyboardType="email-address"
          />
        </View>

        {/* Password */}
        <View style={styles.field}>
          <Ionicons name="lock-closed-outline" size={20} color="#999" />
          <TextInput
            placeholder="Password"
            style={styles.input}
            secureTextEntry={true}
          />
          <Ionicons name="eye-outline" size={20} color="#666" />
        </View>

        {/* Confirm Password */}
        <View style={styles.field}>
          <Ionicons name="lock-closed-outline" size={20} color="#999" />
          <TextInput
            placeholder="Confirm Password"
            style={styles.input}
            secureTextEntry={true}
          />
          <Ionicons name="eye-outline" size={20} color="#666" />
        </View>

        {/* Terms */}
        <View style={styles.terms}>
          <View style={styles.checkbox}>
            <Ionicons name="checkmark" size={14} color="#7B4BBF" />
          </View>
          <Text style={styles.termsText}>
            I agree to Terms & Privacy Policy
          </Text>
        </View>

        {/* Button */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>

        {/* Login Link */}
        <Text style={styles.linkText}>
          Already have an account?{" "}
          <Text style={styles.link} onPress={() => navigation.navigate("LoginScreen")}>
            Login
          </Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F8FB",
    justifyContent: "center",
    padding: 20,
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: 24,
    padding: 24,
    elevation: 10,
  },

  iconBox: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: "#26658C",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginBottom: 16,
  },

  title: {
    textAlign: "center",
    fontSize: 22,
    fontWeight: "700",
    color: "#26658C",
  },

  subtitle: {
    textAlign: "center",
    fontSize: 14,
    color: "#777",
    marginBottom: 24,
  },

  field: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 12,
    paddingHorizontal: 12,
    marginBottom: 14,
  },

  input: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 10,
    fontSize: 14,
  },

  terms: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 16,
  },

  checkbox: {
    width: 18,
    height: 18,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: "#7B4BBF",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },

  termsText: {
    fontSize: 14,
    color: "#26658C",
  },

  button: {
    backgroundColor: "#7B4BBF",
    paddingVertical: 14,
    borderRadius: 14,
    alignItems: "center",
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },

  linkText: {
    textAlign: "center",
    marginTop: 16,
    color: "#26658C",
    fontSize: 14,
  },

  link: {
    color: "#7B4BBF",
    fontWeight: "600",
  },
});