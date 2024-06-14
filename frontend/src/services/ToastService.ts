type ConfigProps = {
  type: "success" | "error" | "warn" | "info";
};

const toast = () => {
  const success = () => {
    console.log("Hello");
  };

  return { success };
};

module.exports = toast;
