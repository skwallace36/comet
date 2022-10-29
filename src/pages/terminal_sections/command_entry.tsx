import React from "react";
import { useState, useEffect } from "react";
import Label from "react";

interface command_entry_props {
  last_key_down: string;
  key_down: number;
  execute_callback: (command: string) => void;
}
function CommandEntry(props: command_entry_props)  {

  const [accumulated_input, set_accumulated_input] = useState("");

  useEffect(() => {
    handle_key_down(props.last_key_down)
  }, [props.key_down]);


  const handle_key_down = (key: string) => {
    if (key === "Enter") {
        props.execute_callback(accumulated_input);
        return;
    }
    if (key === "Backspace") {
        set_accumulated_input(accumulated_input.slice(0, -1));
        return;
    }
    set_accumulated_input(accumulated_input + key);
  }

  return (
      <div className="command_entry" id="command_entry">
        <label className="command_entry_label" id="command_entry_label">
          {accumulated_input}
        </label>
      </div>
    );
};


export default CommandEntry;