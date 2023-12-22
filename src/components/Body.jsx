import React, { useState, useRef } from "react";

function PasswordGenerator() {
  const [password, setPassword] = useState("");
  const passwordInputRef = useRef(null);

  const createPassword = () => {
    const length = 12; // Adjust password length as needed
    const allChars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*()_+-=<>/|~{}[]";

    let password = "";
    // Ensure at least one character from each set
    password += getRandomCharacter(allChars.toUpperCase());
    password += getRandomCharacter(allChars.toLowerCase());
    password += getRandomCharacter(allChars.replace(/[^0-9]/g, ""));
    password += getRandomCharacter(allChars.replace(/[a-zA-Z0-9]/g, ""));

    while (password.length < length) {
      password += getRandomCharacter(allChars);
    }

    setPassword(password);
  };

  const copyPassword = () => {
    passwordInputRef.current.select();
    document.execCommand("copy");
    // Provide visual feedback to the user (e.g., a success message)
  };

  const getRandomCharacter = (characterSet) => {
    return characterSet[Math.floor(Math.random() * characterSet.length)];
  };

  return (
    <div className="container">
      <h1>
        Generate a <br /> <span>Random Password</span>
      </h1>

      <div className="display">
        <input
          type="text"
          ref={passwordInputRef}
          value={password}
          placeholder="Password"
        />
        <img src="images/copy.png" alt="copy" onClick={copyPassword} />
      </div>

      <button onClick={createPassword}>
        <img src="images/generate.png" alt="generate" /> Generate Password
      </button>
    </div>
  );
}

export default PasswordGenerator;
