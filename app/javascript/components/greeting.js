
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchGreeting } from "../redux/greetingSlice";

const Greeting = () => {
  const dispatch = useDispatch();
  const greeting = useSelector((state) => state.greeting);

  useEffect(() => {
    dispatch(fetchGreeting());
  }, [dispatch]);

  return (
    <div>
      <h1>Refresh the page to view the same greeting in different languages</h1>
      <ul>
        {greeting.map((greeting) => (
          <li className="list_item" key={greeting.id}>{greeting.greeting}</li>
        ))}
      </ul>
    </div>
  )
}

export default Greeting;