const sections = document.getElementsByTagName('section');
const sectionsArray = Array.from(sections);

sectionsArray.forEach((section) => {
  const question = section.children[0]
  const answer = section.children[1]
  question.addEventListener('click', () => {
    if (section.classList.contains("closed")) {
      section.classList.remove("closed")
      section.classList.add("open")
      question.children[1].innerHTML = "keyboard_arrow_up"
      const clone = answer.cloneNode(true)
      section.appendChild(clone.content)
    } else if (section.classList.contains("open")) {
      section.classList.remove("open")
      section.classList.add("closed")
      question.children[1].innerHTML = "keyboard_arrow_down"
      section.removeChild(section.children[2])
    }
  })
})