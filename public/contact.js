let root=document.getElementById('root');
console.log(root)

const handleSubmit2 = (e) => {
  e.preventDefault()

  fetch('/login-fetch', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({
          firstname: e.target.firstname.value,
          lastname: e.target.lastname.value,
          email:e.target.email.value,
          subject:e.target.subject.value
      }),
  })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        const messageWrapper=document.createElement("div")
        messageWrapper.classList.add("contact-message")
        
        const contactMessage=document.createElement("p")
        contactMessage.innerHTML = `Thank you for contacting us ${data.firstname}${data.lastname}. We will send you an email to your email address on ${data.email} about your inquiry `
       

        const closeBtn=document.createElement("button")
        closeBtn.classList.add("close-btn")
        closeBtn.innerHTML="Close"

        closeBtn.addEventListener("click", closeDiv)

        function closeDiv() {
            console.log("I clicked close button")
            messageWrapper.remove()
        }
        
        messageWrapper.append(contactMessage,closeBtn)
        console.log(messageWrapper)
        root.append(messageWrapper)
    })
      e.target.reset()
      .catch((err) => console.log(err.message))
}


