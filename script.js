
let last = ""
const feedback = document.getElementById("feedback")
document.body.onmousemove = document.body.onclick = showHover

function showHover ({altKey}) {
  if (altKey) { return }

  const selector = ":hover"
  const hover = Array
  .from(document.querySelectorAll(selector))
  .map( element => {
    let { tagName, className } = element
    className = className.replace(/\s+/, ".")
    return tagName + ( className ? `.${className}` : "")
  })
  .join(" ")

  if (last !== hover) {
    feedback.innerText += hover + "\n"
    last = hover    
  }
}

feedback.onclick = () => location=""