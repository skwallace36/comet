

// if(event.metaKey && event.key === "=") {
//   scale_entry_section();
//   return;
// }

export const scale_entry_section = () => {
  const curr_scale_factor = Number(getComputedStyle(document.documentElement).getPropertyValue('--scale-factor'));
  const height = Number(getComputedStyle(document.documentElement).getPropertyValue('height'));
  var elem = document.getElementById('command_entry_section');
  var style = getComputedStyle(elem);
  if (Number(style.height) > (height * .2)) { return; }

  console.log(getComputedStyle(document.documentElement).getPropertyValue('--command-entry-height'));
  const command_entry_label_h = document.getElementById('command_entry_label').offsetHeight;
  const command_entry_section_h = document.getElementById('command_entry_section').offsetHeight;
  if((curr_scale_factor + .1) * command_entry_label_h > command_entry_section_h) {
    return
  }
  document.documentElement.style.setProperty('--scale-factor', `${curr_scale_factor + 0.1}`);
}