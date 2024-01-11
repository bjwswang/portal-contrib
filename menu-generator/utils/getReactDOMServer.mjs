
const getReactDOMServer = async () => {
  let ReactDOMServer
  try {
    ReactDOMServer = await import('react-dom/server') // react-dom 18
  } catch (e) {
    ReactDOMServer = await import('react-dom/server.node.js') // react-dom < 18
  }
  return ReactDOMServer
}
export default getReactDOMServer
