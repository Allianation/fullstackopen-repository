import { useSelector, useDispatch } from "react-redux";
import { setNotification } from "../reducers/notificationReducer";

const Notification = () => {
  const dispatch = useDispatch();
  dispatch(setNotification("Redux Toolkit is awesome!"));

  const notification = useSelector((state) => state.notification);

  const style = {
    border: "solid",
    padding: 10,
    borderWidth: 1,
  };
  return (
    <>
      <div style={style}>{notification}</div>
      <br />
    </>
  );
};

export default Notification;
