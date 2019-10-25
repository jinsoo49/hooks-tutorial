const useNetwork = onChange => {
  const [status, setStatus] = useState(navigator.onLine);
  const handleChange = () => {
    if (typeof onChange === "function") {
      onChange(navigator.onLine);
    }
    setStatus(navigator.onLine);
  };
  useEffect(() => {
    window.addEventListener("online", handleChange);
    window.addEventListener("online", handleChange);
    () => {
      window.removeEventListener("online", handleChange);
      window.removeEventListener("online", handleChange);
    };
  }, [handleChange]);
  return status;
};
