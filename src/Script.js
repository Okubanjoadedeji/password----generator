
function PasswordGenerator() {
  const [password, setPassword] = useState("");

  const length = 12;
  const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerCase = "abcdefghijklmnopqrstuvwxyz";
  const number = "123456789";
  const symbol = "@#$%^&*()_+-=<>/|~{}[]";
  const allChars = upperCase + lowerCase + number + symbol;

  const createPassword = () => {
    let newPassword = "";
    newPassword += getRandomCharacter(upperCase);
    newPassword += getRandomCharacter(lowerCase);
    newPassword += getRandomCharacter(number);
    newPassword += getRandomCharacter(symbol);

    while (length > newPassword.length) {
      newPassword += getRandomCharacter(allChars);
    }

    setPassword(newPassword);
  };

  const copyPassword = () => {
    navigator.clipboard
      .writeText(password)
      .then(() => console.log("Password copied to clipboard!"))
      .catch((err) => console.error("Failed to copy password: ", err));
  };

  const getRandomCharacter = (characterSet) => {
    return characterSet[Math.floor(Math.random() * characterSet.length)];
  };

  return (
    <div>
      <input type="text" value={password} readOnly />
      <button onClick={createPassword}>Generate Password</button>
      <button onClick={copyPassword}>Copy Password</button>
    </div>
  );
}

export default PasswordGenerator;
