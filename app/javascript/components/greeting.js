import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchGreeting } from "../redux/reducer/greetingSlice";

function Greeting() {
  const dispatch = useDispatch();
  const chooseGreeting = useSelector((state) => state.greeting);
  console.log(chooseGreeting);

  useEffect(() => {
    dispatch(fetchGreeting());
  }, [dispatch]);

  return (
    <>
      <h1>If you want to see diferent greeting, than refresh the page 😊.</h1>
      <ul>
        {chooseGreeting.map((greeting) => (
          <li>
            {greeting.greeting}
          </li>
        ))}
      </ul>
    </>
  )
};

export default Greeting;