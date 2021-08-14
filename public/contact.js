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
      }),
  })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        document.getElementById('root').innerHTML = `${data.firstname}`
      })
      .catch((err) => console.log(err.message))
}