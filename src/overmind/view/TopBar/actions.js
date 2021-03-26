export async function onResetCache({ actions }) {
  await actions.oada.resetCache();
  //Refresh the page
  //location.reload();
}
export async function onLogout({ actions }) {
  await actions.view.Login.logout();
}

export async function toggleUser({state}) {
  const f = "Frank Farmer";
  const h = "Happy Hauler";
  const p = "Pig Processor";

  const cur = state.view.Login.me ? state.view.Login.me : 'Frank Farmer';
  switch (cur) {
    case f: state.view.Login.me = h; break;
    case h: state.view.Login.me = p; break;
    case p: state.view.Login.me = f; break;
    default: state.view.Login.me = f;
  }
  
}
