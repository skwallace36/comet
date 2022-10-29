import { useEffect, useState } from "react";
import { invoke } from "@tauri-apps/api/tauri";
import TerminalSection from "./terminal_sections/terminal_section";
import CommandEntry from "./terminal_sections/command_entry";
import { event } from "@tauri-apps/api";
import { scale_entry_section } from "./index_helpers";

enum CurrentFocus {
  None = 0,
  CommandEntry = 1
}

function App() {

  const [current_focus, set_current_focus] = useState(CurrentFocus.CommandEntry);

  const [key_down, set_key_down] = useState(0)
  const [last_key_down, set_last_key_down] = useState("");

  const execute_callback = (command: string) => {

  }

  useEffect(() => {
    window.addEventListener('keydown', onKeyDown);
    function onKeyDown(event: KeyboardEvent) {
      if(event.metaKey) {
        return;
      }
      switch(current_focus) {
        case CurrentFocus.CommandEntry:
          set_last_key_down(event.key);
          set_key_down(key_down + 1);
          break;
      }
    }
    return function () {
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [key_down]);


  return (
    <div className="parent">
        <div className="terminal_sections">
            <TerminalSection></TerminalSection>
            <TerminalSection></TerminalSection>
        </div>
        <div className="command_entry_section" id="command_entry_section">
            <CommandEntry execute_callback={execute_callback} last_key_down={last_key_down} key_down={key_down} ></CommandEntry>
        </div>
    </div>
        
  );
}

export default App;
