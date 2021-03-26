export async function onResetCache({ actions }) {
  await actions.oada.resetCache();
  //Refresh the page
  //location.reload();
}
export async function onLogout({ actions }) {
  await actions.view.Login.logout();
}
