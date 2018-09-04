export default function (server, remoteUser) {

  const config = server.config();

  const groups = config.get('own_home.local.admin.users').includes(remoteUser) ?
    config.get('own_home.local.admin.groups') :
    [];
  return groups.concat(config.get('own_home.local.groups'));
}
