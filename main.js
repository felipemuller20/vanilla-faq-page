const sections = document.getElementsByTagName('section');
const sectionsArray = Array.from(sections);

sectionsArray.forEach((section) => {
  const question = section.children[0]
  const answer = section.children[1]
  question.addEventListener('click', () => {
    if (section.classList.contains("closed")) {
      section.classList.remove("closed")
      section.classList.add("open")
      question.children[0].innerHTML = "arrow_drop_down"
      const clone = answer.cloneNode(true)
      section.appendChild(clone.content)
    } else if (section.classList.contains("open")) {
      section.classList.remove("open")
      section.classList.add("closed")
      question.children[0].innerHTML = "arrow_right"
      section.removeChild(section.children[2])
    }
  })
})