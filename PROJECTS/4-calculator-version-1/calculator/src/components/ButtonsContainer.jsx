import styles from "./ButtonsContainer.module.css"

const ButtonsContainer = () => {

  const buttonNames = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];


  return (
    // This is how we can use multiple buttons by mapping
    <div className={styles.buttonsContainer}>
      {buttonNames.map((buttonName) => (
        <button key= {buttonName} className={styles.button}>{buttonName}</button>
        // <button key= {buttonName} className={styles.button}>{buttonName}</button>
      ))}
    </div>
  );
};

export default ButtonsContainer;