export default function build({data = '', errNo = 0, errMsg = ''}) {
  if (errNo) {
    return JSON.stringify({
      errno: errNo,
      errMsg,
    });
  }
  return JSON.stringify({
    data,
    errno: 0,
  });
}
