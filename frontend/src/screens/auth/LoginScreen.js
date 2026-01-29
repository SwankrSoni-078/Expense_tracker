import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

export default function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        {/* App Icon */}
        <View style={styles.iconBox}>
          <Ionicons name="wallet" size={28} color="#fff" />
        </View>

        {/* App Name */}
        <Text style={styles.title}>ExpenseEase</Text>
        <Text style={styles.subtitle}>
          Track Your Expenses smarter
        </Text>

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

        {/* Login Button */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        {/* Signup Hint */}
        <Text style={styles.linkText}>
          Don't have an account?{" "}
          <Text style={styles.link} onPress={() => navigation.navigate("Signup")} >Sign up</Text>
        </Text>

        {/* Divider */}
        <Text style={styles.divider}>or continue with</Text>

        {/* Social Buttons (UI only) */}
        <View style={styles.socialRow}>
          <TouchableOpacity style={styles.socialButton}>
            <Image
              source={require("../../../assets/google-icon.png")}
              style={styles.socialIcon}
              resizeMode="contain"
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.socialButton}>
            <Image
              source={require("../../../assets/appleicon.png")}
              style={styles.socialIcon}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
        {/* Forgot Password */}
        <Text style={styles.forgot}>Forgot password?</Text>
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
    color: "#54ACBF",
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

  button: {
    backgroundColor: "#7B4BBF",
    paddingVertical: 14,
    borderRadius: 25,
    alignItems: "center",
    marginTop: 10,
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

  divider: {
    textAlign: "center",
    marginVertical: 16,
    color: "#54ACBF",
    fontSize: 13,
  },

  socialRow: {
    flexDirection: "row",
    justifyContent: "center",
  },

  socialButton: {
    width: 100,
    borderColor: "#54ACBF",
    borderRadius: 25,
    paddingVertical: 12,
    alignItems: "center",
    marginBottom: 10,
    marginHorizontal: 8,
  },

  socialIcon: {
    width: 35,
    height: 35,
  },

  socialText: {
    color: "#26658C",
    fontSize: 14,
  },

  forgot: {
    textAlign: "center",
    marginTop: 10,
    color: "#54ACBF",
    fontSize: 13,
  },
});